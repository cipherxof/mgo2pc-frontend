import { MgoGameMode, MgoGameModeNames, MgoMap, MgoMapNames, MgoMode, MgoModeNames } from '@/system/constants';
import { getMapPreview, getRegionFlag } from '@/system/utility';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Divider, Popover, Typography } from 'antd';
import React from 'react';
import { NavLink } from 'umi';

const { Meta } = Card;
const { Text, Link } = Typography;

type GameCardProps = {
  game: GameLobby;
  hoverable?: boolean;
}

export default function GameCard(props: GameCardProps): JSX.Element {
  const playerList: JSX.Element[] = [];

  for (const player of props.game.players) {
    //const icon = <img src={require(`../assets/img/codenames/${player.rank}.png`).default} />;
    //const avatar = player.host ? <Badge dot><Avatar src={icon} /></Badge> : <Avatar size="small" icon={<UserOutlined />} />;

    const popContent = (
      <div className="text-center">
        <NavLink to={`/profile/${player.name}`}>
          <Button type="primary" size={"large"}>View Profile</Button>
        </NavLink>
      </div>);

    playerList.push(
      <Popover content={popContent} placement="left">
        <p key={player.id}><Avatar size="small" icon={<UserOutlined />} /> {player.name}</p>
      </Popover>
    )
  }

  const playerCount = <Text type="secondary">({props.game.players.length}/{props.game.maxPlayers})</Text>;
  const cardRegion = <img src={getRegionFlag(props.game.location)} style={{ width: "16px" }} />;
  const gameTitle = <React.Fragment>{cardRegion} {props.game.name} {playerCount}</React.Fragment>
  const cardTitle = props.game.locked ? <React.Fragment><LockOutlined /> {gameTitle}</React.Fragment> : gameTitle;

  const currentGame = props.game.games[props.game.currentGame];

  const gameModeId = currentGame[0];
  const mapId = currentGame[1];
  const modeId = currentGame[2];

  const gameMode = props.game.lobbyId === 7 ? "Combat Training" : MgoGameModeNames[gameModeId as MgoGameMode];
  const map = MgoMapNames[mapId as MgoMap];
  const mode = MgoModeNames[modeId as MgoMode];

  return (
    <Card hoverable={true} cover={<img alt={"Silo Sunset"} src={getMapPreview(mapId)} />} >
      <Meta title={<div>{cardTitle}<br />{<small> <Text type="warning"><i>{gameMode}</i></Text></small>}</div>} description={props.game.comment} />
      <Divider />
      {playerList}
    </Card>
  );
};
