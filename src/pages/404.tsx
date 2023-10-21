import { useIntl } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const NoFoundPage: React.FC = () => {
  const intl = useIntl();

  return (
    <Result
      status="404"
      title="404"
      subTitle={intl.formatMessage({ id: 'app.404' })}
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          {intl.formatMessage({ id: 'app.backhome' })}
        </Button>
      }
    />
  );
};

export default NoFoundPage;
