import CharacterLevelTag from '@/components/CharacterLevelTag';
import MedalTable from '@/components/Profile/MedalTable';
import PersonalScores from '@/components/Profile/PersonalScores';
import StatsTable from '@/components/Profile/StatsTable';
import TitleHistoryTable from '@/components/Profile/TitleHistoryTable';
import { getProfile } from '@/services/mgo2pc/api';
import { getRankPreview, isModerator } from '@/system/utility';
import { UserOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { PageContainer, PageHeader } from '@ant-design/pro-layout';
import { Avatar, Button, Card, Divider, Spin, Switch, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink, useIntl, useParams, useRequest } from 'umi';

type ProfileParams = {
  character: string;
};

export const ProfilePage: React.FC = () => {
  const intl = useIntl();
  const params = useParams<ProfileParams>();
  const initialState = { name: params.character } as ProfileData;
  const [profile, setProfile] = useState<ProfileData>(initialState);
  const [weekly, setWeekly] = useState(false);
  const { data, loading } = useRequest(() => getProfile(params.character ?? 0));

  document.title = `${profile.name} - Metal Gear Online`;

  useEffect(() => {
    setProfile(data || initialState);
  }, [data]);

  let content = <React.Fragment></React.Fragment>;

  if (!loading && profile.id) {
    const xp = profile.main === profile.id ? profile.xp : profile.xp_alt;

    const headerTags = [];

    if (profile.rank > 0) {
      headerTags.push(<img style={{ width: '32px' }} src={`${getRankPreview(profile.rank)}`} />);
    }

    if (isModerator()) {
      headerTags.push(
        <NavLink to={`/admin/user/${profile.user}`}>
          <Button size="small">View Account</Button>
        </NavLink>,
      );
    }

    if (profile.clan) {
      headerTags.push(
        <NavLink to={`/clan/${profile.clanId}`}>
          <Tag color="gold">{profile.clan}</Tag>
        </NavLink>,
      );
    }

    headerTags.push(<CharacterLevelTag xp={xp} />);

    const emblem = profile.emblem === '' ? '' : `/static/media/emblems/${profile.emblem}.png`;

    const title = (
      <>
        <Avatar src={emblem} size="small" shape="square" icon={<UserOutlined />} /> {profile.name}
      </>
    );

    content = (
      <>
        <Card>
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title={title}
            subTitle={profile.comment}
            extra={headerTags}
          />
        </Card>

        <div className="mt-4 mb-4">
          <Switch onChange={(e) => setWeekly(e)} /> {intl.formatMessage({ id: 'app.weekly' })}
        </div>

        <div className="card-container">
          <ProCard tabs={{ type: 'line' }}>
            <ProCard.TabPane key="1" tab={intl.formatMessage({ id: 'app.gamemodes' })}>
              <StatsTable stats={weekly ? profile.statsWeek : profile.stats} />
            </ProCard.TabPane>
            <ProCard.TabPane key="2" tab={intl.formatMessage({ id: 'app.personalscores' })}>
              <PersonalScores stats={weekly ? profile.statsWeek : profile.stats} />
            </ProCard.TabPane>
            <ProCard.TabPane key="3" tab={intl.formatMessage({ id: 'app.titlehistory' })}>
              <TitleHistoryTable character={profile.id} />
            </ProCard.TabPane>
            <ProCard.TabPane key="4" tab={intl.formatMessage({ id: 'app.medals' })}>
              <MedalTable stats={profile.stats} />
            </ProCard.TabPane>
          </ProCard>
        </div>
      </>
    );
  }

  return (
    <PageContainer>
      <Spin spinning={loading} size="large">
        {content}
      </Spin>
    </PageContainer>
  );
};

export default ProfilePage;
