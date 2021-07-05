import CharacterLevelTag from '@/components/CharacterLevelTag';
import PersonalScores from '@/components/Profile/PersonalScores';
import StatsTable from '@/components/Profile/StatsTable';
import TitleHistoryTable from '@/components/Profile/TitleHistoryTable';
import { UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Card, Divider, PageHeader, Spin, Tabs, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'umi';
import API from '../system/api';

const { TabPane } = Tabs;

type Profile = {
  id: number;
  name: string;
  comment: string;
  stats: Stats;
  clan: string;
  main: number;
  xp: number;
  xp_alt: number;
}


type ProfileParams = {
  character: string;
}

export default (): React.ReactNode => {
  const params = useParams<ProfileParams>();
  const [data, setData] = useState({ loading: true, profile: { name: params.character } as Profile });

  document.title = `${data.profile.name} - Metal Gear Online`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getProfile(params.character);

      if (!response) {
        return;
      }

      setData({ loading: false, profile: response.data.profile });
    };

    fetchData();
  }, [])

  let content = <React.Fragment></React.Fragment>;

  if (!data.loading) {
    const xp = data.profile.main === data.profile.id ? data.profile.xp : data.profile.xp_alt;

    const headerTags = [];
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
              <Avatar shape="square" icon={<UserOutlined />} /> {data.profile.name}
            </React.Fragment>
          }
          subTitle={data.profile.comment}
          extra={headerTags}
        />

        <Divider />

        <div className="card-container">
          <Tabs defaultActiveKey="1" type="card" size="small">
            <TabPane tab="Game Modes" key="1">
              <Card>
                <StatsTable stats={data.profile.stats} />
              </Card>
            </TabPane>
            <TabPane tab="Personal Scores" key="2">
              <Card>
                <PersonalScores stats={data.profile.stats} />
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
