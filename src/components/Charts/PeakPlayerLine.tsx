import React from 'react';
import { Line } from '@ant-design/charts';

type PeakPlayerLineProps = {
  stats: StatsGame[];
};

export default function PeakPlayerLine(props: PeakPlayerLineProps): JSX.Element {
  if (!props.stats || props.stats.length <= 0) {
    return <>There is no data...</>;
  }

  console.log(props);

  const data = [];

  for (const stats of props.stats) {
    data.push({ date: stats.date.split('T')[0], value: stats.played_today, category: 'Total' });
    data.push({
      date: stats.date.split('T')[0],
      value: stats.peak_players,
      category: 'Concurrent',
    });
  }

  const config = {
    data,
    theme: 'dark',
    xField: 'date',
    yField: 'value',
    seriesField: 'category',
    style: { background: '#141414 !important' },
    point: {
      shape: ({ category }) => {
        return category === 'Gas fuel' ? 'square' : 'circle';
      },
      style: ({ year }) => {
        return {
          r: Number(year) % 4 ? 0 : 3, // 4 个数据示一个点标记
        };
      },
    },
    showMarkers: true,
    showContent: true,
    position: 'right | left',
    showCrosshairs: true,
  };

  return <Line className="chart" {...config} />;
}
