import { activateAccount } from '@/services/mgo2pc/api';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Result, Spin } from 'antd';
import React from 'react';
import { NavLink, useIntl, useParams, useRequest } from 'umi';

type ActivateParams = {
  user: string;
  key: string;
};

export default (): React.ReactNode => {
  const intl = useIntl();
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
        status={
          !error
            ? `${intl.formatMessage({ id: 'app.success' })}`
            : `${intl.formatMessage({ id: 'app.error' })}`
        }
        title={
          !error
            ? `${intl.formatMessage({ id: 'app.accountactivated' })}`
            : `${intl.formatMessage({ id: 'app.error' })}`
        }
        subTitle={''}
        extra={extra}
      />
    );
  }
};
