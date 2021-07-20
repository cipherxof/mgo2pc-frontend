import ServerStatus from '@/components/ServerStatus';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Divider } from 'antd';
import React from 'react';
import { NavLink } from 'umi';
import { Table, Tag, Space } from 'antd';

export default (): React.ReactNode => {
  document.title = "Clans - Metal Gear Online";

  return (
    <PageContainer>
      <Table columns={columns} dataSource={data} />
    </PageContainer>
  );
};
