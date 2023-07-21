import GameCard from '@/components/GameCard';
import SettingTag from '@/components/SettingTag/SettingTag';
import { getGames } from '@/services/mgo2pc/api';
import { MgoGameMode, MgoGameModeNames, MgoMap, MgoMapNames } from '@/system/constants';
import { getMapPreview } from '@/system/utility';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from '@umijs/max';
import { Alert, Card, Divider, Space, Spin, Table, Tag, Typography } from 'antd';
import React from 'react';
import { useParams } from 'umi';

const { Text } = Typography;

type GameParams = {
  id: string;
};

const modeColors: Record<string, string> = {
  'Solo Capture': 'orange',
  'Capture Mission': 'purple',
  'Base Mission': 'lime',
  'Race Mission': 'green',
  'Bomb Mission': 'geekblue',
  'Team Deathmatch': 'volcano',
  'Rescue Mission': 'gold',
  'Team Sneaking': 'blue',
  'Sneaking Mission': 'cyan',
  'Stealth Deathmatch': 'magenta',
  Deathmatch: 'red',
};

const settingName: Record<string, string> = {
  dedicated: 'Dedicated Host',
  nonStat: 'Stats Disabled',
  friendlyFire: 'Friendly Fire',
  autoAim: 'Auto Aim',
  enemyNametags: 'Enemy Name Tags',
  silentMode: 'Silent Mode',
  autoAssign: 'Auto Teams',
  teamsSwitch: 'Team Switch',
  ghosts: 'Ghosts',
  voiceChat: 'Voice Chat',
};

const columns = [
  {
    title: 'Playlist',
    dataIndex: 'map',
    key: 'map',
  },
  {
    title: '',
    key: 'mode',
    dataIndex: 'mode',
    render: (mode: string) => (
      <>
        {
          <Tag color={modeColors[mode]} key={'1'}>
            {mode.toUpperCase()}
          </Tag>
        }
      </>
    ),
  },
];

export default (): React.ReactNode => {
  const { data, loading } = useRequest(() => getGames(true), { pollingInterval: 10000 });
  const params = useParams<GameParams>();

  const game: GameLobby = data?.lobbies.find((g: any) => g.id === parseInt(params.id ?? '0'));

  let content;

  if (!game) {
    content = (
      <div className="col-md-12">
        <Alert message="Information" description="This game does not exist." type="info" showIcon />
      </div>
    );
  } else {
    document.title = `${game.name} - Metal Gear Online`;

    const maps: any = [];
    let key = 0;

    for (const entry of game.games) {
      const gameModeId = entry[0];
      const mapId = entry[1];
      const mode =
        game.lobbyId === 7 ? 'Combat Training' : MgoGameModeNames[gameModeId as MgoGameMode];
      const mapName = MgoMapNames[mapId as MgoMap];
      let mapElement = <>{mapName}</>;

      if (key === game.currentGame) {
        mapElement = <Text type="warning">{mapName}</Text>;
      }

      const map = (
        <>
          <Space>
            <img src={getMapPreview(mapId)} style={{ maxHeight: '32px', margin: 'auto' }} />{' '}
            {mapElement}{' '}
          </Space>
        </>
      );

      maps.push({ key, map, mode });

      key += 1;
    }

    const settingTags: JSX.Element[] = [];

    if (game.settings) {
      settingTags.push(
        <div>
          <SettingTag name="Stats Enabled" enabled={!game.settings?.nonStat} />
        </div>,
      );

      settingTags.push(
        <div>
          <SettingTag name="Uniques" enabled={game.settings?.uniques.enabled ?? false} />
        </div>,
      );
      
      const levelLimit = game.settings.levelLimit.enabled ? `Levels: ${game.settings.levelLimit.base} ± ${game.settings.levelLimit.tolerance}` : 'No level restrictions';
      settingTags.push(
        <div>
          <SettingTag name={levelLimit} enabled={game.settings.levelLimit.enabled ?? false} />
        </div>,
      );

      for (const [key, value] of Object.entries(game.settings)) {
        if (typeof value !== 'boolean' || key === 'nonStat') continue;

        settingTags.push(
          <div>
            <SettingTag name={settingName[key] ? settingName[key] : key} enabled={value} />
          </div>,
        );
      }
    }

    content = (
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-3" style={{ marginBottom: '16px' }}>
          <GameCard game={game} />
          <Divider />
          <Card>{settingTags}</Card>
        </div>
        <div className="col-md-6">
          <Table columns={columns} dataSource={maps} pagination={false} />
        </div>
      </div>
    );
  }

  return (
    <PageContainer>
      <Spin spinning={loading} size="large">
        {content}
      </Spin>
    </PageContainer>
  );
};
