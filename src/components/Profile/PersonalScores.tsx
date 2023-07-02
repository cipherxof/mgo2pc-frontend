
import { Card, Input, Statistic } from "antd";
import React, { useState } from "react";
import { formatTime } from "../../system/utility";

const { Search } = Input;

type PersonalScoresProps = {
  stats: Stats
}

export default function PersonalScores(props: PersonalScoresProps): JSX.Element {
  const [data, setData] = useState({ search: "" });

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
    { key: 'Consecutive Kills', value: props.stats.consecutive_kills },
    { key: 'Consecutive Deaths', value: props.stats.consecutive_deaths },
    { key: 'Consecutive Headshots', value: props.stats.consecutive_headshots },
    { key: 'Suicides', value: props.stats.suicides },
    { key: 'Friendly Kills', value: props.stats.team_kills },
    { key: 'Friendly Stuns', value: props.stats.stuns_friendly },
    { key: 'Times Stunned', value: props.stats.stuns_received },
    { key: 'Aborts', value: props.stats.withdrawals },
    { key: 'Radio Uses', value: props.stats.radio },
    { key: 'Chat Uses', value: props.stats.chat },
    { key: 'CQC Attacks Given', value: props.stats.cqc_given },
    { key: 'CQC Attacks Taken', value: props.stats.cqc_taken },
    { key: 'Rolls', value: props.stats.rolls },
    { key: 'Salutes', value: props.stats.salutes },
    { key: 'Catapult Uses', value: props.stats.catapult },
    { key: 'Bases Captured', value: props.stats.bases_captured },
    { key: 'Boosts Given', value: props.stats.boosts },
    { key: 'Falling Deaths', value: props.stats.falls },
    { key: 'Times Caught in Trap', value: props.stats.trapped },
    { key: 'Melee Hits', value: props.stats.melee },
    { key: 'Scans Performed', value: props.stats.scans },
    { key: 'Knife Kills', value: props.stats.knife_kills },
    { key: 'Knife Stuns', value: props.stats.knife_stuns },
    { key: 'Assist Points', value: props.stats.points_assist },
    { key: 'Base Points', value: props.stats.points_base },
    { key: 'TSNE Wakeups', value: props.stats.wakeups },
    { key: 'SNE Tags Spawned', value: props.stats.snake_tags_spawned },
    { key: 'SNE Tags Collected', value: props.stats.snake_tags_taken },
    { key: 'SNE Wins as Snake', value: props.stats.wins_snake },
    { key: 'Cardboard Box Uses', value: props.stats.box_uses },
    { key: 'Time in Cardboard Box', value: formatTime(props.stats.box_time) },
    { key: 'Total Time Using ENVG', value: formatTime(props.stats.evg_time) },
    { key: 'Total Time: Dedicated Host', value: formatTime(props.stats.time_dedi) },
    { key: 'Total Time: Deathmatch', value: formatTime(statsDM.time) },
    { key: 'Total Time: Stealth Deathmatch', value: formatTime(statsSDM.time) },
    { key: 'Total Time: Solo Capture', value: formatTime(statsSCAP.time) },
    { key: 'Total Time: Team Deathmatch', value: formatTime(statsTDM.time) },
    { key: 'Total Time: Capture Mission', value: formatTime(statsCAP.time) },
    { key: 'Total Time: Base Mission', value: formatTime(statsBase.time) },
    { key: 'Total Time: Bomb Mission', value: formatTime(statsBomb.time) },
    { key: 'Total Time: Race Mission', value: formatTime(statsRace.time) },
    { key: 'Total Time: Rescue Mission', value: formatTime(statsRes.time) },
    { key: 'Total Time: Team Sneaking', value: formatTime(statsTSNE.time) },
    { key: 'Total Time: Sneaking Mission', value: formatTime(statsSM.time) },
  ];

  const contents = [<div></div>];
  let col = 0;
  let cols = [];

  for (const stat of dataSource) {
    if (col === 4) {
      contents.push(<div className="row" style={{ marginBottom: "16px" }}>{cols}</div>);
      cols = [];
      col = 0;
    }
    if (stat.key.toLowerCase().indexOf(data.search.toLowerCase()) !== -1) {
      cols.push(<div className="col-md-3"><Card><Statistic title={stat.key} value={stat.value} /></Card></div>)
      col+=1;
    }
  }

  if (col > 0) {
    contents.push(<div className="row" style={{ marginBottom: "16px" }}>{cols}</div>);
  }

  return (
    <div>
      <Search placeholder="input search text" onSearch={(e) => setData({ search: e })} enterButton />

      <br /><br />

      {contents}
    </div>
  );
}
