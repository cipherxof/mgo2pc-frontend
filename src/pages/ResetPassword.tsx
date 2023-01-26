import { resetPassword } from '@/services/mgo2pc/api';
import { PageContainer } from '@ant-design/pro-layout';
import { Result, Spin } from 'antd';
import React from 'react';
import { useParams, useRequest } from 'umi';

type ResetParams = {
  user: string;
  key: string;
};

export default (): React.ReactNode => {
  const params = useParams<ResetParams>();
  const { data, error, loading } = useRequest(() => resetPassword(params.user, params.key));

  document.title = 'Reset Password - Metal Gear Online';

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
        <p>
          Your new password is <strong>{data}</strong>
        </p>,
      );
      extra.push(<p>You may change your password after logging in.</p>);
    }

    return (
      <Result
        status={!error ? 'success' : 'error'}
        title={!error ? 'Password Reset!' : 'Error'}
        subTitle={''}
        extra={extra}
      />
    );
  }
};
