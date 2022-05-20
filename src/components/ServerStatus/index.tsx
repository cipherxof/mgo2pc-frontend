import { getStatus } from '@/services/mgo2pc/api';
import { Alert } from 'antd';
import { useRequest } from 'umi';

export default () => {
  let { data, loading } = useRequest(getStatus);

  if (loading) {
    data = { status: 1 };
  } else if (!data) {
    data = { status: 0 };
  }

  const message = `The server is currently ${data.status === 1 ? 'online' : 'offline'}.`;

  return <Alert message={message} type={data.status === 1 ? 'success' : 'error'} showIcon banner />;
};
