import { getRankId, timeSince } from '@/system/utility';
import { Alert, Card, Image, Spin, Statistic, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import API from '../../system/api';

const { Text, Title } = Typography;

type MedalTableProps = {
  stats: Stats
}

type MedalData = {
  image: string;
  text: string;
}

const columns = [
  {
    title: '',
    dataIndex: 'img',
    key: 'img',
    width: "128px"
  },
  {
    title: '',
    dataIndex: 'desc',
    key: 'desc',
  },
];

export default function MedalTable(props: MedalTableProps): JSX.Element {
  const medals: any[] = [];
  const medalData: MedalData[] = [];

  if (props.stats.consecutive_kills >= 5) {
    medalData.push({ image: "0001e_0067C73A.png", text: "5 consecutive kills"})
  }

  if (props.stats.consecutive_kills >= 10) {
    medalData.push({ image: "0002e_0067C73E.png", text: "10 consecutive kills"})
  }

  if (props.stats.consecutive_kills >= 25) {
    medalData.push({ image: "0003e_0067C742.png", text: "25 consecutive kills"})
  }

  if (props.stats.consecutive_headshots >= 3) {
    medalData.push({ image: "0004e_0067C746.png", text: "3 consecutive headshots"})
  }

  if (props.stats.consecutive_headshots >= 10) {
    medalData.push({ image: "0005e_0067C74A.png", text: "10 consecutive headshots"})
  }

  if (props.stats.consecutive_headshots >= 30) {
    medalData.push({ image: "0006e_0067C74E.png", text: "30 consecutive headshots"})
  }

  if (props.stats.consecutive_deaths >= 5) {
    medalData.push({ image: "0007e_0067C752.png", text: "5 consecutive deaths"})
  }

  if (props.stats.consecutive_deaths >= 10) {
    medalData.push({ image: "0008e_0067C756.png", text: "10 consecutive deaths"})
  }

  if (props.stats.consecutive_deaths >= 25) {
    medalData.push({ image: "0009e_0067C75A.png", text: "25 consecutive deaths"})
  }

  if (props.stats.kills >= 500) {
    medalData.push({ image: "0010e_0067C7B6.png", text: "500 total kills"})
  }

  if (props.stats.kills >= 2000) {
    medalData.push({ image: "0011e_0067C7BA.png", text: "2000 total kills"})
  }

  if (props.stats.kills >= 10000) {
    medalData.push({ image: "0012e_0067C7BE.png", text: "10000 total kills"})
  }

  if (props.stats.kills >= 500) {
    medalData.push({ image: "0013e_0067C7C2.png", text: "500 total deaths"})
  }

  if (props.stats.kills >= 2000) {
    medalData.push({ image: "0014e_0067C7C6.png", text: "2000 total deaths"})
  }

  if (props.stats.kills >= 10000) {
    medalData.push({ image: "0015e_0067C7CA.png", text: "10000 total deaths"})
  }

  if (props.stats.spotted >= 100) {
    medalData.push({ image: "0037e_0067C8D2.png", text: "100 finds in TSNE"})
  }

  if (props.stats.snake_spotted >= 50) {
    medalData.push({ image: "0019e_0067C7DA.png", text: "50 times spotted Snake first"})
  }

  if (props.stats.snake_spotted >= 100) {
    medalData.push({ image: "0020e_0067C836.png", text: "100 times spotted Snake first"})
  }

  if (props.stats.snake_spotted >= 500) {
    medalData.push({ image: "0021e_0067C83A.png", text: "500 times spotted Snake first"})
  }

  if (props.stats.snake_holdups >= 50) {
    medalData.push({ image: "0025e_0067C84A.png", text: "50 holds ups performed as Snake"})
  }

  if (props.stats.snake_holdups >= 100) {
    medalData.push({ image: "0026e_0067C84E.png", text: "100 holds ups performed as Snake"})
  }

  if (props.stats.snake_holdups >= 500) {
    medalData.push({ image: "0027e_0067C852.png", text: "500 holds ups performed as Snake"})
  }

  if (props.stats.time >= 864000) {
    medalData.push({ image: "0041e_0067C93A.png", text: "240 hours played"})
  }

  if (props.stats.time >= 3214800) {
    medalData.push({ image: "0041e_0067C93A.png", text: "893 hours played"})
  }

  if (props.stats.time >= 18000000) {
    medalData.push({ image: "0041e_0067C93A.png", text: "5000 hours played"})
  }

  for (const data of medalData) {
    medals.push({
      key: data.image, 
      img: <img src={`/static/media/medals/${data.image}`} />, 
      desc: <Text strong>{data.text}</Text>
    });
  }

  return <div><Table dataSource={medals} columns={columns} pagination={false} showHeader={false} /></div>;
}
