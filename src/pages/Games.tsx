import GameCard from '@/components/GameCard';
import { getGames } from '@/services/mgo2pc/api';
import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Divider, Spin, Statistic } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'umi';

export default (): React.ReactNode => {
  const [data, setData] = useState({ loading: true, players: '...', games: [] as GameLobby[] });

  document.title = 'Games - Metal Gear Online';

  useEffect(() => {
    const fetchData = async () => {
      const response = await getGames();

      if (!response) {
        return;
      }

      setData({
        loading: false,
        players: `${response.data.players}`,
        games: response.data.lobbies,
      });
    };

    fetchData();

    const timeout = setInterval(() => fetchData(), 10000); // refresh every 10 seconds

    return () => {
      clearInterval(timeout);
    };
  }, []);

  data.games.sort((a, b) => b.players.length - a.players.length);

  const cards: JSX.Element[] = [];

  for (const game of data.games) {
    cards.push(
      <div className="col-md-3" key={game.id} style={{ marginBottom: '16px' }}>
        <NavLink to={`/game/${game.id}`}>
          <GameCard game={game} />
        </NavLink>
      </div>,
    );
  }

  const statistics = (
    <div className="row">
      <div className="col-md-12 text-center">
        <Statistic title="Online Players" value={data.players} />
      </div>
      <Divider />
    </div>
  );

  if (data.games.length <= 0) {
    cards.push(
      <div key="0" className="col-md-12">
        <Alert
          message="Information"
          description="There are currently no games being played."
          type="info"
          showIcon
        />
      </div>,
    );
  }

  return (
    <PageContainer>
      {statistics}
      <Spin spinning={data.loading} size="large">
        <div className="row">{cards}</div>
      </Spin>
    </PageContainer>
  );
};
