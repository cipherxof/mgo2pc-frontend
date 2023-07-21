import GameCard from '@/components/GameCard';
import { getGames } from '@/services/mgo2pc/api';
import { StatisticCard } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from '@umijs/max';
import { Alert, Divider, Spin, Switch } from 'antd';
import React, { useState } from 'react';
import { NavLink, useIntl } from 'umi';

export default (): React.ReactNode => {
  const intl = useIntl();
  const { data, loading } = useRequest(getGames, { pollingInterval: 10000 });
  const [compact, setCompact] = useState(false);

  let playersInGame = 0;
  const cards: JSX.Element[] = [];

  document.title = 'Games - Metal Gear Online';

  if (data) {
    data.lobbies.sort((a, b) => b.players.length - a.players.length);

    for (const game of data.lobbies) {
      playersInGame += game.players.length;

      cards.push(
        <div className="col-md-3" key={game.id} style={{ marginBottom: '16px' }}>
          <NavLink to={`/game/${game.id}`}>
            <GameCard game={game} collapsed={compact} />
          </NavLink>
        </div>,
      );
    }
  }

  const statistics = (
    <div className="row">
      <div className="col-md-12 text-center">
        <StatisticCard.Group>
          <StatisticCard
            statistic={{
              title: intl.formatMessage({ id: 'app.lobbies' }),
              value: data?.lobbies.length,
            }}
          />

          <StatisticCard
            statistic={{
              title: intl.formatMessage({ id: 'app.online' }),
              value: data?.players,
            }}
          />

          <StatisticCard
            statistic={{
              title: intl.formatMessage({ id: 'app.onlineplayers' }),
              value: playersInGame,
            }}
          />
        </StatisticCard.Group>
      </div>
      <Divider />
    </div>
  );

  if (data && data.lobbies.length <= 0) {
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
      <Spin spinning={loading && !data} size="large">
      {statistics}
      <div className="row">
        <div className="col-md-12 mb-4">
          <Switch onChange={(checked) => setCompact(checked)} /> Compact
        </div>
        {cards}
      </div>
      </Spin>
    </PageContainer>
  );
};
