import { getStatus } from '@/services/mgo2pc/api';
import { Alert } from 'antd';
import { useIntl, useRequest } from 'umi';

export default () => {
  const intl = useIntl();

  let { data, loading } = useRequest(getStatus);

  if (loading) {
    data = { status: 1 };
  } else if (!data) {
    data = { status: 0 };
  }

  const message =
    data.status === 1
      ? intl.formatMessage({ id: 'app.serveron' })
      : intl.formatMessage({ id: 'app.serveroff' });

  return <Alert message={message} type={data.status === 1 ? 'success' : 'error'} showIcon banner />;
};
