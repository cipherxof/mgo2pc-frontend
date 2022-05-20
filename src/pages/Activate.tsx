import { activateAccount } from '@/services/mgo2pc/api';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Result, Spin } from 'antd';
import React from 'react';
import { NavLink, useParams, useRequest } from 'umi';

type ActivateParams = {
  user: string;
  key: string;
};

export default (): React.ReactNode => {
  const params = useParams<ActivateParams>();
  const { error, loading } = useRequest(() => activateAccount(params.user, params.key));

  document.title = 'Activate - Metal Gear Online';

  if (loading) {
    return (
      <PageContainer>
        <Spin spinning={loading} size="large" />
      </PageContainer>
    );
  } else {
    const extra = [];

    if (!error) {
      extra.push(
        <NavLink to="/account">
          <Button type="primary" key="console">
            View Account
          </Button>
        </NavLink>,
      );
    }

    return (
      <Result
        status={!error ? 'success' : 'error'}
        title={!error ? 'Account Activated!' : 'Error'}
        subTitle={''}
        extra={extra}
      />
    );
  }
};
