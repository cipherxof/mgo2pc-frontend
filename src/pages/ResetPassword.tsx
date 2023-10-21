import { resetPassword } from '@/services/mgo2pc/api';
import { PageContainer } from '@ant-design/pro-layout';
import { Result, Spin } from 'antd';
import React from 'react';
import { useIntl, useParams, useRequest } from 'umi';

type ResetParams = {
  user: string;
  key: string;
};

export default (): React.ReactNode => {
  const intl = useIntl();
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
          {intl.formatMessage({ id: 'app.newpw2' })} <strong>{data}</strong>
        </p>,
      );
      extra.push(<p>{intl.formatMessage({ id: 'app.changepw' })}</p>);
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
