import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Col, Row, Tabs, Spin, Statistic, Divider } from 'antd';
import GameCard from '@/components/GameCard';
import API from '../system/api';

const { TabPane } = Tabs;

const mockGame: Array<number[]> = [[0, 1, 2]];
const mockPlayer: GameLobbyPlayer[] = [{ id: 0, name: "TriggerHappy", host: true, rank: 0 }]
const mockLobby: GameLobby = {
  id: 0,
  lobbyId: 0,
  name: "test",
  players: mockPlayer,
  maxPlayers: 12,
  locked: false,
  currentGame: 0,
  games: mockGame,
  comment: "Hello world",
  location: "US",
}

export default (): React.ReactNode => {
  const [data, setData] = useState({ loading: true, players: '...', games: [] as GameLobby[] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getGames();

      if (!response) {
        return;
      }

      setData({ loading: false, players: `${response.data.players}`, games: response.data.lobbies });
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
    cards.push(<div className="col-md-3" key={game.id} style={{ marginBottom: "16px" }}><GameCard game={game} /></div>);
  }

  let statistics = (
    <div className="row">
      <div className="col-md-12 text-center">
        <Statistic title="Online Players" value={data.players} />
      </div>
      <Divider />
    </div>);

  if (data.games.length <= 0) {
    cards.push(
      <div key="0" className="col-md-12">
        <Alert
          message="Information"
          description="There are currently no games being played."
          type="info"
          showIcon
        />
      </div>)
  }

  return (
    <PageContainer>
      {statistics}
      <Spin spinning={data.loading} size="large">
        <div className="row">
          {cards}
        </div>
      </Spin>
    </PageContainer>
  );
};
