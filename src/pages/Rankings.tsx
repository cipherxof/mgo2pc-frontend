import { getRankings } from '@/services/mgo2pc/api';
import { UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Pagination, Select, Spin, Switch, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'umi';

const { Option } = Select;
const { Text } = Typography;

const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
    width: '5%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '70%',
    render: (text: any) => {
      return (
        <>
          <NavLink to={`/profile/${text.split('\t')[2]}`}>
            <Avatar
              size="small"
              src={
                text.split('\t')[0] === ''
                  ? ''
                  : `https://mgo2pc.com/static/media/emblems/${text.split('\t')[0]}.png`
              }
              icon={<UserOutlined />}
            />{' '}
            <Text>{text.split('\t')[1]}</Text>
          </NavLink>
        </>
      );
    },
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
];

type RankingParams = {
  mode?: string;
  page?: string;
};

export default (): React.ReactNode => {
  document.title = 'Rankings - Metal Gear Online';

  const history = useHistory();
  const params = useParams<RankingParams>();

  const [data, setData] = useState({
    weekly: false,
    loading: true,
    pages: 1,
    page: params.page ? params.page : 1,
    mode: params.mode ? params.mode : 'total',
    tableData: [] as any,
  });

  function onModeChange(value: string) {
    setData({
      weekly: data.weekly,
      loading: true,
      pages: data.pages,
      page: 1,
      mode: value,
      tableData: [] as any,
    });
    history.push(`/rankings/${value}/1`);
  }

  function onPageChange(value: number) {
    setData({
      weekly: data.weekly,
      loading: true,
      pages: data.pages,
      page: value,
      mode: data.mode,
      tableData: data.tableData,
    });
    history.push(`/rankings/${data.mode}/${value}`);
  }

  function setWeekly(value: boolean) {
    setData({
      weekly: value,
      loading: true,
      pages: data.pages,
      page: 1,
      mode: data.mode,
      tableData: data.tableData,
    });
    //history.push(`/rankings/${data.mode}/1`);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRankings(data.mode, data.page, data.weekly);

      if (!response) {
        console.log('no response');
        return;
      }

      setData({
        weekly: data.weekly,
        loading: false,
        pages: response.pages,
        page: data.page,
        mode: data.mode,
        tableData: response.data,
      });
    };

    fetchData();
  }, [data.mode, data.page, data.weekly]);

  if (data.loading) {
    return (
      <PageContainer>
        <div className="text-center">
          <Spin spinning={data.loading} size="large"></Spin>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="row">
        <div className="col-md-8">
          <Switch checked={data.weekly} onChange={(e: any) => setWeekly(e)} /> Weekly
        </div>
        <div className="col-md-4">
          <Select
            defaultValue={data.mode}
            onChange={onModeChange}
            style={{ float: 'right', width: 180, marginBottom: '16px' }}
          >
            <Option value="total">Total Score</Option>
            <Option value="exp">Experience</Option>
            <Option value="stuns">Stuns</Option>
            <Option value="knife">Knife Kills</Option>
            <Option value="scans">Scans</Option>
            <Option value="dm">Deathmatch</Option>
            <Option value="sdm">Stealth Deathmatch</Option>
            <Option value="tdm">Team Deathmatch</Option>
            <Option value="cap">Capture Mission</Option>
            <Option value="base">Base Mission</Option>
            <Option value="bomb">Bomb Mission</Option>
            <Option value="race">Race Mission</Option>
            <Option value="res">Rescue Mission</Option>
            <Option value="tsne">Team Sneaking</Option>
            <Option value="sm">Sneaking Mission</Option>
            <Option value="kdr">Kill / Death Ratio</Option>
            <Option value="winrat">Win / Loss Ratio</Option>
          </Select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Spin spinning={data.loading} size="large">
            <Table columns={columns} dataSource={data.tableData} pagination={false} />
            <Pagination
              defaultCurrent={data.page}
              total={data.pages}
              pageSize={15}
              style={{ float: 'right', marginTop: '16px' }}
              showSizeChanger={false}
              onChange={onPageChange}
            />
          </Spin>
        </div>
      </div>
    </PageContainer>
  );
};
