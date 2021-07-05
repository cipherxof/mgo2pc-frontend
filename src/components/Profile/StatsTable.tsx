
import { Select, Statistic, Table } from "antd";
import React, { useState } from "react";
import { formatTime } from "../../system/utility";

const { Option } = Select;

const columns = [
  {
    title: '',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Kills',
    dataIndex: 'kills',
    key: 'kills',
  },
  {
    title: 'Deaths',
    dataIndex: 'deaths',
    key: 'deaths',
  },
  {
    title: 'Stuns',
    dataIndex: 'stuns',
    key: 'stuns',
  },
  {
    title: 'Stuns Received',
    dataIndex: 'stunsrec',
    key: 'stunsrec',
  },
];

type StatsTableProps = {
  stats: Stats
}

type StatsMode = "all" | "stats_dm" | "stats_sdm" | "stats_scap" | "stats_tdm" | "stats_cap" | "stats_base" | "stats_bomb" | "stats_race" | "stats_res" | "stats_tsne" | "stats_sm";

export default function StatsTable(props: StatsTableProps): JSX.Element {
  const [data, setData] = useState({ mode: "all" as StatsMode });

  const stats: Record<string, number> = {};

  if (data.mode !== "all") {
    try {
      const statData = JSON.parse(props.stats[data.mode]);

      stats.wins = statData.wins;
      stats.rounds = statData.rounds;
      stats.score = statData.score;
      stats.time = statData.time;

      stats.kills = statData.kills;
      stats.deaths = statData.deaths;
      stats.stuns = statData.stuns;
      stats.stuns_received = statData.stunsRec;

      stats.headshot_kills = statData.hsKills;
      stats.headshot_deaths = statData.hsDeaths;
      stats.headshot_stuns = statData.hsStuns;
      stats.headshot_stuns_received = statData.hsStunsRec;

      stats.lock_kills = statData.lockKills;
      stats.lock_deaths = statData.lockDeaths;
      stats.lock_stuns = statData.lockStuns;
      stats.lock_stuns_received = statData.lockStunsRec;
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.wins = props.stats.wins;
    stats.rounds = props.stats.rounds;
    stats.score = props.stats.score;
    stats.time = props.stats.time;

    stats.kills = props.stats.kills;
    stats.deaths = props.stats.deaths;
    stats.stuns = props.stats.stuns;
    stats.stuns_received = props.stats.stuns_received;

    stats.headshot_kills = props.stats.headshot_kills;
    stats.headshot_deaths = props.stats.headshot_deaths;
    stats.headshot_stuns = props.stats.headshot_stuns;
    stats.headshot_stuns_received = props.stats.headshot_stuns_received;

    stats.lock_kills = props.stats.lock_kills;
    stats.lock_deaths = props.stats.lock_deaths;
    stats.lock_stuns = props.stats.lock_stuns;
    stats.lock_stuns_received = props.stats.lock_stuns_received;
  }

  const tableData = [
    {
      key: 'typehs',
      type: <strong>Headshot</strong>,
      kills: stats.headshot_kills,
      deaths: stats.headshot_deaths,
      stuns: stats.headshot_stuns,
      stunsrec: stats.headshot_stuns_received
    },
    {
      key: 'typel',
      type: <strong>Lock-on</strong>,
      kills: stats.lock_kills,
      deaths: stats.lock_deaths,
      stuns: stats.lock_stuns,
      stunsrec: stats.lock_stuns_received
    },
    {
      key: 'typeo',
      type: <strong>Other</strong>,
      kills: stats.kills - (stats.headshot_kills + stats.lock_kills),
      deaths: stats.deaths - (stats.headshot_deaths + stats.lock_deaths),
      stuns: stats.stuns - (stats.headshot_stuns + stats.lock_stuns),
      stunsrec: stats.stuns_received - (stats.headshot_stuns_received + stats.lock_stuns_received)
    },
    {
      key: 'typea',
      type: <strong>All</strong>,
      kills: stats.kills,
      deaths: stats.deaths,
      stuns: stats.stuns,
      stunsrec: stats.stuns_received
    },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <Select defaultValue="all" style={{ float: "right", width: 180, marginBottom: "16px" }} onChange={(e) => setData({ mode: e })}>
        <Option value="all">Total</Option>
        <Option value="stats_dm">Deathmatch</Option>
        <Option value="stats_sdm">Stealth Deathmatch</Option>
        <Option value="stats_scap">Solo Capture</Option>
        <Option value="stats_tdm">Team Deathmatch</Option>
        <Option value="stats_cap">Capture Mission</Option>
        <Option value="stats_base">Base Mission</Option>
        <Option value="stats_bomb">Bomb Mission</Option>
        <Option value="stats_race">Race Mission</Option>
        <Option value="stats_res">Rescue Mission</Option>
        <Option value="stats_tsne">Team Sneaking</Option>
        <Option value="stats_sm">Sneaking Mission</Option>
      </Select>

      <br />

      <div className="row text-center">
        <div className="col-md-3"><Statistic title="Rounds" value={stats.rounds} /></div>
        <div className="col-md-3"><Statistic title="Wins" value={stats.wins} /></div>
        <div className="col-md-3"><Statistic title="Score" value={stats.score} /></div>
        <div className="col-md-3"><Statistic title="Time Played" value={formatTime(stats.time)} /></div>
      </div>

      <br />

      <Table columns={columns} dataSource={tableData} pagination={false} />
    </div>
  );
}