import { MgoGameMode, MgoGameModeNames, MgoMode, MgoModeNames } from '@/system/constants';
import { getMapPreview, getRegionFlag } from '@/system/utility';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Divider, Popover, Typography } from 'antd';
import React from 'react';
import { NavLink } from 'umi';

const { Meta } = Card;
const { Text } = Typography;

type GameCardProps = {
  game: GameLobby;
  hoverable?: boolean;
  collapsed?: boolean;
};

export default function GameCard(props: GameCardProps): JSX.Element {
  const playerList: JSX.Element[] = [];
  let roomDescription = <>{props.game.comment}</>;

  if (!props.collapsed) {
    playerList.push(<Divider />);

    for (const player of props.game.players) {
      const popContent = (
        <div className="text-center">
          <NavLink to={`/profile/${encodeURIComponent(player.name)}`}>
            <Button type="primary" size={'large'}>
              View Profile
            </Button>
          </NavLink>
        </div>
      );

      playerList.push(
        <Popover content={popContent} placement="left" key={player.id}>
          <p key={player.id}>
            {player.emblem !== '' ? (
              <Avatar
                className="mr-1"
                src={`/static/media/emblems/${player.emblem}.png`}
                size="small"
                shape="square"
                icon={<UserOutlined />}
              />
            ) : (
              <Avatar className="mr-1" size="small" shape="square" icon={<UserOutlined />} />
            )}
            {player.name}
          </p>
        </Popover>,
      );
    }
  } else {
    roomDescription = (
      <div style={{ height: '50px', textOverflow: 'ellipsis' }}>{props.game.comment}</div>
    );
  }

  const playerCount = (
    <Text type="secondary">
      ({props.game.players.length}/{props.game.maxPlayers})
    </Text>
  );
  const cardRegion = <img src={getRegionFlag(props.game.location)} style={{ width: '16px' }} />;
  const gameTitle = (
    <>
      {cardRegion} {props.game.name} {playerCount}
    </>
  );
  const cardTitle = props.game.locked ? (
    <>
      <LockOutlined /> {gameTitle}
    </>
  ) : (
    gameTitle
  );

  const currentGame = props.game.games[props.game.currentGame];

  const gameModeId = currentGame[0];
  const mapId = currentGame[1];
  const modeId = currentGame[2];

  const gameMode =
    props.game.lobbyId === 7 ? 'Combat Training' : MgoGameModeNames[gameModeId as MgoGameMode];
  // const map = MgoMapNames[mapId as MgoMap];
  const mode = MgoModeNames[modeId as MgoMode];

  let modeElement = <></>;

  if (!props.collapsed && modeId > 0) {
    modeElement = (
      <div className="mt-3">
        <img
          alt={mode}
          src={require(`../../assets/img/modes/${modeId}.png`)}
          style={{ maxWidth: '16px', verticalAlign: 'middle' }}
        />{' '}
        {mode}
      </div>
    );
  }

  return (
    <Card hoverable={true} cover={<img alt={'Silo Sunset'} src={getMapPreview(mapId)} />}>
      <Meta
        title={
          <div>
            <div>{cardTitle}</div>
            <div>
              <small>
                <Text italic type="warning">
                  {gameMode}
                </Text>
              </small>
            </div>
          </div>
        }
        description={roomDescription}
      />
      {modeElement}
      {playerList}
    </Card>
  );
}
