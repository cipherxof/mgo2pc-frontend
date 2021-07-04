import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Col, Row, Tabs, Spin, Statistic, Divider, Tag, Breadcrumb, Layout, Table } from 'antd';
import GameCard from '@/components/GameCard';
import API from '../system/api';
import { useLocation, useParams } from 'umi';
import { MgoGameModeNames, MgoGameMode, MgoMapNames, MgoMap } from '@/system/constants';
import { getRegionFlag, getMapPreview } from '@/system/utility';
import { Content } from 'antd/lib/layout/layout';

const { Text } = Typography;

type GameProps = {
  game: GameLobby
}

type GameParams = {
  id: string;
}

const modeColors: Record<string, string> = {
  "Solo Capture": "orange",
  "Capture Mission": "purple",
  "Base Mission": "lime",
  "Race Mission": "green",
  "Bomb Mission": "geekblue",
  "Team Deathmatch": "volcano",
  "Rescue Mission": "gold",
  "Team Sneaking": "blue",
  "Sneaking Mission": "cyan",
  "Stealth Deathmatch": "magenta",
  "Deathmatch": "red"
}

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
          <Tag color={modeColors[mode]} key={"1"}>
            {mode.toUpperCase()}
          </Tag>
        }
      </>
    ),
  },
];

export default (): React.ReactNode => {
  const location = useLocation();
  let props = location.state as GameProps;
  const [data, setData] = useState({ loading: !props, game: {} as GameLobby });
  const params = useParams<GameParams>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getGames();

      if (!response) {
        return;
      }

      const game = response.data.lobbies.find((g) => g.id == parseInt(params.id));

      if (game) {
        setData({ loading: false, game: game });
      } else {
        setData({ loading: false, game: {} as GameLobby });
      }
    };

    fetchData();

    const timeout = setInterval(() => fetchData(), 10000); // refresh every 10 seconds

    return () => {
      clearInterval(timeout);
    };
  }, []);

  let content;

  if (data.loading) {
    document.title = `Game - Metal Gear Online`;

    content = <Spin spinning={data.loading} size="large"> </Spin>
  } else {
    if (!props) {
      props = { game: data.game };
    }

    if (!props.game.games) {
      content = <div className="col-md-12">
        <Alert
          message="Information"
          description="This game does not exist."
          type="info"
          showIcon
        />
      </div>
    }
    else {
      document.title = `${props.game.name} - Metal Gear Online`;

      const maps: any = [];
      const cardRegion = <img src={getRegionFlag(props.game.location)} style={{ width: "32px" }} />;
      let key = 0;
      for (const game of props.game.games) {
        const gameModeId = game[0];
        const mapId = game[1];
        const mode = props.game.lobbyId === 7 ? "Combat Training" : MgoGameModeNames[gameModeId as MgoGameMode];
        let mapName = MgoMapNames[mapId as MgoMap];
        let mapElement = <React.Fragment>{mapName}</React.Fragment>
        if (key == props.game.currentGame) {
          mapElement = <Text type="warning">{mapName}</Text>
        }
        const map = <React.Fragment><img src={getMapPreview(mapId)} style={{ maxHeight: "24px" }} /> {mapElement}</React.Fragment>


        maps.push({ key, map, mode })

        key++;
      }

      content = <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-3" style={{ marginBottom: "16px" }}>
          <GameCard game={props.game} />
        </div>
        <div className="col-md-6">
          <Table columns={columns} dataSource={maps} pagination={false} />
        </div>
      </div>;
    }
  }

  return (
    <PageContainer>
      {content}
    </PageContainer>
  );
};
