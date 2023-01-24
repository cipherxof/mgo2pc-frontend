import GameCard from '@/components/GameCard';
import { getGames } from '@/services/mgo2pc/api';
import { MgoGameMode, MgoGameModeNames, MgoMap, MgoMapNames } from '@/system/constants';
import { getMapPreview } from '@/system/utility';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from '@umijs/max';
import { Alert, Card, Divider, Space, Spin, Table, Tag, Typography } from 'antd';
import React from 'react';
import { useParams } from 'umi';

const { Text } = Typography;

type GameProps = {
  lobby: GameLobby;
};

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

  const game = data?.lobbies.find((g: any) => g.id === parseInt(params.id ?? '0'));

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
      let mapElement = <React.Fragment>{mapName}</React.Fragment>;
      if (key === game.currentGame) {
        mapElement = <Text type="warning">{mapName}</Text>;
      }
      const map = (
        <React.Fragment>
          <Space>
            <img src={getMapPreview(mapId)} style={{ maxHeight: '32px', margin: 'auto' }} />{' '}
            {mapElement}{' '}
          </Space>
        </React.Fragment>
      );

      maps.push({ key, map, mode });

      key += 1;
    }

    const dataSource = [];

    const columns2 = [
      {
        title: 'Setting',
        dataIndex: 'setting',
        key: 'setting',
      },
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
      },
    ];

    const settingTags = [];
    /*dataSource.push({ key: '4', setting: 'Record Stats', value: `${!game.settings?.nonStat}` });
    dataSource.push({ key: '1', setting: 'Briefing Time', value: `${game.settings?.briefingTime}` });
    dataSource.push({ key: '2', setting: 'Auto-Teams', value: `${game.settings?.autoAssign}` });
    dataSource.push({ key: '3', setting: 'Friendly Fire', value: `${game.settings?.friendlyFire}` });
    dataSource.push({ key: '5', setting: 'Uniques', value: `${game.settings?.uniques.enabled}` });*/

    const settingName = {
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

    settingTags.push(
      <Tag className="mr-2 mb-2" color={!game.settings?.nonStat ? 'green' : 'red'}>
        Stats Enabled
      </Tag>,
    );

    for (const [key, value] of Object.entries(game.settings)) {
      if (typeof value !== 'boolean' || key === 'nonStat') continue;

      settingTags.push(
        <Tag className="mr-2 mb-2" color={value ? 'green' : 'red'}>
          {settingName[key] ? settingName[key] : key}
        </Tag>,
      );
    }

    settingTags.push(
      <Tag className="mr-2 mb-2" color={game.settings?.uniques.enabled ? 'green' : 'red'}>
        Uniques
      </Tag>,
    );

    content = (
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-3" style={{ marginBottom: '16px' }}>
          <GameCard game={game} />
          <Divider />
          <Card title="Settings">{settingTags}</Card>
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
