import CharacterLevelTag from '@/components/CharacterLevelTag';
import MedalTable from '@/components/Profile/MedalTable';
import PersonalScores from '@/components/Profile/PersonalScores';
import StatsTable from '@/components/Profile/StatsTable';
import TitleHistoryTable from '@/components/Profile/TitleHistoryTable';
import { getProfile } from '@/services/mgo2pc/api';
import { getRankPreview, isModerator } from '@/system/utility';
import { UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Button, Card, Divider, PageHeader, Spin, Switch, Tabs, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useRequest } from 'umi';

const { TabPane } = Tabs;

type ProfileParams = {
  character: string;
};

export const ProfilePage: React.FC = () => {
  const params = useParams<ProfileParams>();
  const initialState = { name: params.character } as ProfileData;
  const [profile, setProfile] = useState<ProfileData>(initialState);
  const [weekly, setWeekly] = useState(false);
  const { data, loading } = useRequest(() => getProfile(params.character));

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
      headerTags.push(<Tag color="gold">{profile.clan}</Tag>);
    }

    headerTags.push(<CharacterLevelTag xp={xp} />);

    const emblem =
      profile.emblem === '' ? '' : `https://mgo2pc.com/static/media/emblems/${profile.emblem}.png`;

    const title = (
      <>
        <Avatar src={emblem} size="small" shape="square" icon={<UserOutlined />} /> {profile.name}
      </>
    );

    content = (
      <>
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title={title}
          subTitle={profile.comment}
          extra={headerTags}
        />

        <Divider />

        <div className="mb-3">
          <Switch onChange={(e) => setWeekly(e)} /> Weekly
        </div>

        <div className="card-container">
          <Tabs defaultActiveKey="1" type="card" size="small">
            <TabPane tab="Game Modes" key="1">
              <Card>
                <StatsTable stats={weekly ? profile.statsWeek : profile.stats} />
              </Card>
            </TabPane>
            <TabPane tab="Personal Scores" key="2">
              <Card>
                <PersonalScores stats={weekly ? profile.statsWeek : profile.stats} />
              </Card>
            </TabPane>
            <TabPane tab="Title History" key="3">
              <Card>
                <TitleHistoryTable character={profile.id} />
              </Card>
            </TabPane>
            <TabPane tab="Medals" key="4">
              <Card>
                <MedalTable stats={profile.stats} />
              </Card>
            </TabPane>
          </Tabs>
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
