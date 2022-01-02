import { formatTime, timeSince } from '@/system/utility';
import { Alert, Card, Image, Spin, Statistic, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import API from '../../system/api';

const { Title } = Typography;

type TitleHistoryProps = {
  character: number;
};

type TitleData = {
  name: string;
  image: string;
}

export default function TitleHistoryTable(props: TitleHistoryProps): JSX.Element {
  const [data, setData] = useState({ loading: true, titles: {} as TitleHistory });

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getTitles(`${props.character}`);

      if (!response) {
        return;
      }

      setData({ loading: false, titles: response.data.titles });
    };

    fetchData();
  }, []);

  if (data.loading) {
    return (
      <div className="text-center">
        <Spin spinning={data.loading} size="large"></Spin>
      </div>
    );
  }

  const titleData: TitleData[] = [];
  titleData["bear"] = { name: "Bear", image: "Bear.png" };
  titleData["bee"] = { name: "Bee", image: "Bee.png" };
  titleData["boss"] = { name: "Big Boss", image: "boss.png" };
  titleData["chameleon"] = { name: "Chameleon", image: "CHAMELEON.png" };
  titleData["chicken"] = { name: "Chicken", image: "Chicken.png" };
  titleData["crocodile"] = { name: "Crocodile", image: "Gator.png" };
  titleData["cuckoo"] = { name: "Cuckoo", image: "Cuckoo.png" };
  titleData["doberman"] = { name: "Doberman", image: "Doberman.png" };
  titleData["eagle"] = { name: "Eagle", image: "Eagle.png" };
  titleData["elephant"] = { name: "Elephant", image: "Elephant.png" };
  titleData["fish"] = { name: "Fish", image: "Fish.png" };
  titleData["fox"] = { name: "Fox", image: "Fox.png" };
  titleData["foxhound"] = { name: "Foxhound", image: "Foxhound.png" };
  titleData["gako"] = { name: "GAKO", image: "GAKO.png" };
  titleData["hog"] = { name: "Hog", image: "Hog.png" };
  titleData["hound"] = { name: "Hound", image: "Hound.png" };
  titleData["jaws"] = { name: "Jaws", image: "Shark.png" };
  titleData["kerotan"] = { name: "Kerotan", image: "Kerotan.png" };
  titleData["komodo"] = { name: "Komodo", image: "Komodo.png" };
  titleData["owl"] = { name: "Owl", image: "Owl.png" };
  titleData["pigeon"] = { name: "Pigeon", image: "Pigeon.png" };
  titleData["rat"] = { name: "Rat", image: "Rat.png" };
  titleData["skua"] = { name: "Skua", image: "Skua.png" };
  titleData["sloth"] = { name: "Sloth", image: "Sloth.png" };
  titleData["snake"] = { name: "Snake", image: "Snake.png" };
  titleData["squirrel"] = { name: "Squirrel", image: "Flying Squirrel.png" };
  titleData["theboss"] = { name: "Boss", image: "Boss.png" };
  titleData["tortoise"] = { name: "Tortoise", image: "Turtle.png" };
  titleData["tsuchinoko"] = { name: "Tsuchinoko", image: "TSUCHINOKO.png" };
  titleData["waterbear"] = { name: "Waterbear", image: "Waterbear.png" };
  titleData["whale"] = { name: "Whale", image: "Whale.png" };

  const contents = [<div></div>];
  let col = 0;
  let cols = [];

  for (const [key, value] of Object.entries(data.titles)) {
    console.log(`${key}: ${value}`);
    if (col === 4) {
      contents.push(
        <div className="row" style={{ marginBottom: '16px' }}>
          {cols}
        </div>,
      );
      cols = [];
      col = 0;
    }
    if (value > 0 && key !== "id" && key !== "chara" && titleData[key]) {
      cols.push(
        <div className="col-md-3 text-center">
          <Card>
            <Title level={3}>{titleData[key].name}</Title>
            <Image width={96} src={`https://mgo2pc.com/static/media/emblem/${titleData[key].image}`} />
            <Statistic value={`${timeSince(new Date(value * 1000))} ago`} />
          </Card>
        </div>,
      );
      col += 1;
    }
  }

  if (col > 0) {
    contents.push(<div className="row" style={{ marginBottom: "16px" }}>{cols}</div>);
  } else {
    contents.push(
      <div key="0" className="col-md-12">
        <Alert
          message="Information"
          description="This character has not acquired any titles."
          type="info"
          showIcon
        />
      </div>)
  }

  return <div>{contents}</div>;
}
