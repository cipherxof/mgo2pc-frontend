import { UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Pagination, Select, Spin, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'umi';
import API from '../system/api';

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
    render: (text: any) => (
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
    ),
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
];

type RankingData = {
  id: number;
  chara: number;
  dm: number;
};

type RankingParams = {
  mode?: string;
  page?: string;
};

export default (): React.ReactNode => {
  document.title = 'Rankings - Metal Gear Online';

  console.log("RENDER");

  const history = useHistory();
  const params = useParams<RankingParams>();

  console.log(params);
  
  const [data, setData] = useState({
    loading: true,
    pages: 1,
    page: params.page ? params.page : 1,
    mode: params.mode ? params.mode : 'dm',
    tableData: {} as any,
  });

  function onModeChange(value: string) {
    setData({ loading: true, pages: data.pages, page: 1, mode: value, tableData: {} as any });
    history.push(`/rankings/${value}/1`);
  }

  function onPageChange(value: number) {
    setData({
      loading: true,
      pages: data.pages,
      page: value,
      mode: data.mode,
      tableData: {} as any,
    });
    history.push(`/rankings/${data.mode}/${value}`);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getRankings(data.mode, data.page);

      if (!response) {
        return;
      }

      setData({
        loading: false,
        pages: response.data.pages,
        page: data.page,
        mode: data.mode,
        tableData: response.data.rankings,
      });
    };

    fetchData();
  }, [data.mode, data.page]);

  console.log(data);

  if (data.loading) {
    return (
      <div className="text-center">
        <Spin spinning={data.loading} size="large"></Spin>
      </div>
    );
  }

  return (
    <PageContainer>
      <Select
        defaultValue={data.mode}
        onChange={onModeChange}
        style={{ float: 'right', width: 180, marginBottom: '16px' }}
      >
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
      </Select>
      <Table columns={columns} dataSource={data.tableData} pagination={false} />
      <Pagination
        defaultCurrent={data.page}
        total={data.pages}
        pageSize={15}
        style={{ float: 'right', marginTop: '16px' }}
        showSizeChanger={false}
        onChange={onPageChange}
      />
    </PageContainer>
  );
};
