import CharacterLevelTag from '@/components/CharacterLevelTag';
import PersonalScores from '@/components/Profile/PersonalScores';
import StatsTable from '@/components/Profile/StatsTable';
import TitleHistoryTable from '@/components/Profile/TitleHistoryTable';
import { getRankPreview, isModerator } from '@/system/utility';
import { UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Card, Divider, Dropdown, Menu, PageHeader, Spin, Switch, Tabs, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'umi';
import API from '../system/api';

const { TabPane } = Tabs;

type Profile = {
  id: number;
  name: string;
  comment: string;
  stats: Stats;
  statsWeek: Stats;
  clan: string;
  main: number;
  xp: number;
  xp_alt: number;
  rank: number;
  emblem: string;
};

type ProfileParams = {
  character: string;
};


export default (): React.ReactNode => {
  const params = useParams<ProfileParams>();
  const [data, setData] = useState({
    loading: true,
    profile: { name: params.character } as Profile,
  });
  const [weekly, setWeekly] = useState(false);
  const history = useHistory();

  document.title = `${data.profile.name} - Metal Gear Online`;

  const handleMenuClick = (e: any) => {
    if (history) {
      history.push(e.key);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getProfile(params.character);

      if (!response) {
        return;
      }

      setData({ loading: false, profile: response.data.profile });
    };

    fetchData();
  }, []);

  let content = <React.Fragment></React.Fragment>;

  if (!data.loading) {
    const xp = data.profile.main === data.profile.id ? data.profile.xp : data.profile.xp_alt;

    const headerTags = [];
    if (data.profile.rank > 0) {
      headerTags.push(
        <img
          style={{ width: '32px' }}
          src={`https://mgo2pc.com/static/media/emblem/${getRankPreview(data.profile.rank)}.png`}
        />,
      );
    }
    
    if (isModerator()) {
      const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key={`/admin/user/${data.profile.id}`}>View Account</Menu.Item>
          <Menu.Item key={`/admin/chat/${data.profile.id}`}>View Chat History</Menu.Item>
          <Menu.Item key="/">Kick Character</Menu.Item>
        </Menu>
      );

      headerTags.push(
        <Dropdown.Button size="small" overlay={menu}>Moderate</Dropdown.Button>
      );
    }

    if (data.profile.clan) {
      headerTags.push(<Tag color="gold">{data.profile.clan}</Tag>);
    }

    headerTags.push(<CharacterLevelTag xp={xp} />);

    content = (
      <React.Fragment>
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title={
            <React.Fragment>
              <Avatar
                src={
                  data.profile.emblem === ''
                    ? ''
                    : `https://mgo2pc.com/static/media/emblems/${data.profile.emblem}.png`
                }
                size="small"
                shape="square"
                icon={<UserOutlined />}
              />{' '}
              {data.profile.name}
            </React.Fragment>
          }
          subTitle={data.profile.comment}
          extra={headerTags}
        />

        <Divider />

        <div>
          <Switch onChange={(e) => setWeekly(e)} /> Weekly
        </div>

        <br />

        <div className="card-container">
          <Tabs defaultActiveKey="1" type="card" size="small">
            <TabPane tab="Game Modes" key="1">
              <Card>
                <StatsTable stats={weekly ? data.profile.statsWeek : data.profile.stats} />
              </Card>
            </TabPane>
            <TabPane tab="Personal Scores" key="2">
              <Card>
                <PersonalScores stats={weekly ? data.profile.statsWeek : data.profile.stats} />
              </Card>
            </TabPane>
            <TabPane tab="Title History" key="3">
              <Card>
                <TitleHistoryTable character={data.profile.id} />
              </Card>
            </TabPane>
          </Tabs>
        </div>
      </React.Fragment>
    );
  }

  return (
    <PageContainer>
      <Spin spinning={data.loading} size="large">
        {content}
      </Spin>
    </PageContainer>
  );
};
