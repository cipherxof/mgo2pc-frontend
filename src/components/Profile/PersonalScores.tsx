import { useIntl } from '@umijs/max';
import { Card, Input, Statistic } from 'antd';
import { useState } from 'react';
import { formatTime } from '../../system/utility';

const { Search } = Input;

type PersonalScoresProps = {
  stats: Stats;
};

export default function PersonalScores(props: PersonalScoresProps): JSX.Element {
  const intl = useIntl();
  const [data, setData] = useState({ search: '' });

  const statsTDM = JSON.parse(props.stats.stats_tdm);
  const statsDM = JSON.parse(props.stats.stats_dm);
  const statsSCAP = JSON.parse(props.stats.stats_scap);
  const statsSDM = JSON.parse(props.stats.stats_sdm);
  const statsRes = JSON.parse(props.stats.stats_res);
  const statsCAP = JSON.parse(props.stats.stats_cap);
  const statsBase = JSON.parse(props.stats.stats_base);
  const statsRace = JSON.parse(props.stats.stats_race);
  const statsBomb = JSON.parse(props.stats.stats_bomb);
  const statsTSNE = JSON.parse(props.stats.stats_tsne);
  const statsSM = JSON.parse(props.stats.stats_sm);

  const dataSource = [
    {
      key: `${intl.formatMessage({ id: 'app.conceckills' })}`,
      value: props.stats.consecutive_kills,
    },
    {
      key: `${intl.formatMessage({ id: 'app.concecdeaths' })}`,
      value: props.stats.consecutive_deaths,
    },
    {
      key: `${intl.formatMessage({ id: 'app.concechs' })}`,
      value: props.stats.consecutive_headshots,
    },
    { key: `${intl.formatMessage({ id: 'app.suicides' })}`, value: props.stats.suicides },
    { key: `${intl.formatMessage({ id: 'app.friendlykills' })}`, value: props.stats.team_kills },
    {
      key: `${intl.formatMessage({ id: 'app.friendlystuns' })}`,
      value: props.stats.stuns_friendly,
    },
    { key: `${intl.formatMessage({ id: 'app.timesstunned' })}`, value: props.stats.stuns_received },
    { key: `${intl.formatMessage({ id: 'app.aborts' })}`, value: props.stats.withdrawals },
    { key: `${intl.formatMessage({ id: 'app.radiouse' })}`, value: props.stats.radio },
    { key: `${intl.formatMessage({ id: 'app.chatuse' })}`, value: props.stats.chat },
    { key: `${intl.formatMessage({ id: 'app.cqcgiven' })}`, value: props.stats.cqc_given },
    { key: `${intl.formatMessage({ id: 'app.cqctaken' })}`, value: props.stats.cqc_taken },
    { key: `${intl.formatMessage({ id: 'app.rolls' })}`, value: props.stats.rolls },
    { key: `${intl.formatMessage({ id: 'app.salutes' })}`, value: props.stats.salutes },
    { key: `${intl.formatMessage({ id: 'app.catapult' })}`, value: props.stats.catapult },
    { key: `${intl.formatMessage({ id: 'app.basecap' })}`, value: props.stats.bases_captured },
    { key: `${intl.formatMessage({ id: 'app.boosts' })}`, value: props.stats.boosts },
    { key: `${intl.formatMessage({ id: 'app.falldeath' })}`, value: props.stats.falls },
    { key: `${intl.formatMessage({ id: 'app.caughttrap' })}`, value: props.stats.trapped },
    { key: `${intl.formatMessage({ id: 'app.melee' })}`, value: props.stats.melee },
    { key: `${intl.formatMessage({ id: 'app.scansp' })}`, value: props.stats.scans },
    { key: `${intl.formatMessage({ id: 'app.knifekill' })}`, value: props.stats.knife_kills },
    { key: `${intl.formatMessage({ id: 'app.knifestuns' })}`, value: props.stats.knife_stuns },
    { key: `${intl.formatMessage({ id: 'app.assist' })}`, value: props.stats.points_assist },
    { key: `${intl.formatMessage({ id: 'app.basep' })}`, value: props.stats.points_base },
    { key: `${intl.formatMessage({ id: 'app.tsnep' })}`, value: props.stats.wakeups },
    {
      key: `${intl.formatMessage({ id: 'app.snetagspawn' })}`,
      value: props.stats.snake_tags_spawned,
    },
    {
      key: `${intl.formatMessage({ id: 'app.snetagcollected' })}`,
      value: props.stats.snake_tags_taken,
    },
    { key: `${intl.formatMessage({ id: 'app.snewin' })}`, value: props.stats.wins_snake },
    { key: `${intl.formatMessage({ id: 'app.cardboarduse' })}`, value: props.stats.box_uses },
    {
      key: `${intl.formatMessage({ id: 'app.cardboardtime' })}`,
      value: formatTime(props.stats.box_time),
    },
    {
      key: `${intl.formatMessage({ id: 'app.envgtime' })}`,
      value: formatTime(props.stats.evg_time),
    },
    {
      key: `${intl.formatMessage({ id: 'app.dedicatedhosttime' })}`,
      value: formatTime(props.stats.time_dedi),
    },
    { key: `${intl.formatMessage({ id: 'app.deathmatchtime' })}`, value: formatTime(statsDM.time) },
    { key: `${intl.formatMessage({ id: 'app.sdmtime' })}`, value: formatTime(statsSDM.time) },
    { key: `${intl.formatMessage({ id: 'app.scaptime' })}`, value: formatTime(statsSCAP.time) },
    { key: `${intl.formatMessage({ id: 'app.tdmtime' })}`, value: formatTime(statsTDM.time) },
    { key: `${intl.formatMessage({ id: 'app.captime' })}`, value: formatTime(statsCAP.time) },
    { key: `${intl.formatMessage({ id: 'app.basetime' })}`, value: formatTime(statsBase.time) },
    { key: `${intl.formatMessage({ id: 'app.bombtime' })}`, value: formatTime(statsBomb.time) },
    { key: `${intl.formatMessage({ id: 'app.racetime' })}`, value: formatTime(statsRace.time) },
    { key: `${intl.formatMessage({ id: 'app.rescuetime' })}`, value: formatTime(statsRes.time) },
    { key: `${intl.formatMessage({ id: 'app.tsnetime' })}`, value: formatTime(statsTSNE.time) },
    { key: `${intl.formatMessage({ id: 'app.snetime' })}`, value: formatTime(statsSM.time) },
  ];

  const contents = [<div></div>];
  let col = 0;
  let cols = [];

  for (const stat of dataSource) {
    if (col === 4) {
      contents.push(
        <div className="row" style={{ marginBottom: '16px' }}>
          {cols}
        </div>,
      );
      cols = [];
      col = 0;
    }
    if (stat.key.toLowerCase().indexOf(data.search.toLowerCase()) !== -1) {
      cols.push(
        <div className="col-md-3">
          <Card>
            <Statistic title={stat.key} value={stat.value} />
          </Card>
        </div>,
      );
      col += 1;
    }
  }

  if (col > 0) {
    contents.push(
      <div className="row" style={{ marginBottom: '16px' }}>
        {cols}
      </div>,
    );
  }

  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={(e) => setData({ search: e })}
        enterButton
      />

      <br />
      <br />

      {contents}
    </div>
  );
}
