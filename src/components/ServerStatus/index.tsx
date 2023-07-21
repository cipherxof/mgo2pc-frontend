import { getGames, getStatus } from '@/services/mgo2pc/api';
import { NavLink } from '@umijs/max';
import { Alert } from 'antd';
import { useIntl, useRequest } from 'umi';

export default () => {
  const intl = useIntl();

  let { data, loading } = useRequest(getStatus);
  const gamesData = useRequest(() => getGames(true));

  if (loading) {
    data = { status: 1, players: 0 };
  } else if (!data) {
    data = { status: 0, players: 0 };
  }

  if (!gamesData.loading) {
    data.players = gamesData.data.players;
  }

  const message =
    data.status === 1
      ? intl.formatMessage({ id: 'app.servercount' }, { players: data.players })
      : intl.formatMessage({ id: 'app.serveroff' });

  return (
    <NavLink to="/games">
      <Alert message={message} type={data.status === 1 ? 'success' : 'error'} showIcon banner />
    </NavLink>
  );
};
