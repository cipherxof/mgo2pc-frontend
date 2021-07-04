import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Col, Row, Tabs } from 'antd';
import GameCard from '@/components/GameCard';

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
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={6}>
          <GameCard game={mockLobby} />
        </Col>
        <Col span={6}>
          <GameCard game={mockLobby} />
        </Col>
        <Col span={6}>
          <GameCard game={mockLobby} />
        </Col>
        <Col span={6}>
          <GameCard game={mockLobby} />
        </Col>
      </Row>
    </PageContainer>
  );
};
