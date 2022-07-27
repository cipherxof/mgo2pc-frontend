import { Select, Statistic, Table } from 'antd';
import React, { useState } from 'react';
import { useIntl } from 'umi';
import { formatTime } from '../../system/utility';

const { Option } = Select;

type StatsTableProps = {
  stats: Stats;
};

type StatsMode =
  | 'all'
  | 'stats_dm'
  | 'stats_sdm'
  | 'stats_scap'
  | 'stats_tdm'
  | 'stats_cap'
  | 'stats_base'
  | 'stats_bomb'
  | 'stats_race'
  | 'stats_res'
  | 'stats_tsne'
  | 'stats_sm';

export default function StatsTable(props: StatsTableProps): JSX.Element {
  const intl = useIntl();
  const [data, setData] = useState({ mode: 'all' as StatsMode });

  const stats: Record<string, number> = {};

  const columns = [
    {
      title: '',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: intl.formatMessage({ id: 'app.kills' }),
      dataIndex: 'kills',
      key: 'kills',
    },
    {
      title: intl.formatMessage({ id: 'app.deaths' }),
      dataIndex: 'deaths',
      key: 'deaths',
    },
    {
      title: intl.formatMessage({ id: 'app.stuns' }),
      dataIndex: 'stuns',
      key: 'stuns',
    },
    {
      title: intl.formatMessage({ id: 'app.stunsreceived' }),
      dataIndex: 'stunsrec',
      key: 'stunsrec',
    },
  ];

  if (data.mode !== 'all') {
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
      type: <strong>{intl.formatMessage({ id: 'app.headshot' })}</strong>,
      kills: stats.headshot_kills,
      deaths: stats.headshot_deaths,
      stuns: stats.headshot_stuns,
      stunsrec: stats.headshot_stuns_received,
    },
    {
      key: 'typel',
      type: <strong>{intl.formatMessage({ id: 'app.lockon' })}</strong>,
      kills: stats.lock_kills,
      deaths: stats.lock_deaths,
      stuns: stats.lock_stuns,
      stunsrec: stats.lock_stuns_received,
    },
    {
      key: 'typeo',
      type: <strong>{intl.formatMessage({ id: 'app.other' })}</strong>,
      kills: stats.kills - (stats.headshot_kills + stats.lock_kills),
      deaths: stats.deaths - (stats.headshot_deaths + stats.lock_deaths),
      stuns: stats.stuns - (stats.headshot_stuns + stats.lock_stuns),
      stunsrec: stats.stuns_received - (stats.headshot_stuns_received + stats.lock_stuns_received),
    },
    {
      key: 'typea',
      type: <strong>{intl.formatMessage({ id: 'app.all' })}</strong>,
      kills: stats.kills,
      deaths: stats.deaths,
      stuns: stats.stuns,
      stunsrec: stats.stuns_received,
    },
  ];

  return (
    <div style={{ overflowX: 'auto' }}>
      <Select
        defaultValue="all"
        style={{ float: 'right', width: 180, marginBottom: '16px' }}
        onChange={(e) => setData({ mode: e as StatsMode })}
      >
        <Option value="all">{intl.formatMessage({ id: 'app.total' })}</Option>
        <Option value="stats_dm">{intl.formatMessage({ id: 'app.deathmatch' })}</Option>
        <Option value="stats_sdm">{intl.formatMessage({ id: 'app.stealthdeathmatch' })}</Option>
        <Option value="stats_scap">{intl.formatMessage({ id: 'app.solocapture' })}</Option>
        <Option value="stats_tdm">{intl.formatMessage({ id: 'app.teamdeathmatch' })}</Option>
        <Option value="stats_cap">{intl.formatMessage({ id: 'app.capturemission' })}</Option>
        <Option value="stats_base">{intl.formatMessage({ id: 'app.basemission' })}</Option>
        <Option value="stats_bomb">{intl.formatMessage({ id: 'app.bombmission' })}</Option>
        <Option value="stats_race">{intl.formatMessage({ id: 'app.racemission' })}</Option>
        <Option value="stats_res">{intl.formatMessage({ id: 'app.rescuemission' })}</Option>
        <Option value="stats_tsne">{intl.formatMessage({ id: 'app.teamsneaking' })}</Option>
        <Option value="stats_sm">{intl.formatMessage({ id: 'app.sneakingmission' })}</Option>
      </Select>

      <br />

      <div className="row text-center">
        <div className="col-md-3">
          <Statistic title={intl.formatMessage({ id: 'app.rounds' })} value={stats.rounds} />
        </div>
        <div className="col-md-3">
          <Statistic title={intl.formatMessage({ id: 'app.wins' })} value={stats.wins} />
        </div>
        <div className="col-md-3">
          <Statistic title={intl.formatMessage({ id: 'app.score' })} value={stats.score} />
        </div>
        <div className="col-md-3">
          <Statistic
            title={intl.formatMessage({ id: 'app.timeplayed' })}
            value={formatTime(stats.time)}
          />
        </div>
      </div>

      <br />

      <Table columns={columns} dataSource={tableData} pagination={false} />
    </div>
  );
}
