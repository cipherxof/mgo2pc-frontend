
import { Image, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import API from '../../system/api';

const columns = [
  {
    title: '',
    dataIndex: 'img',
    key: 'img',
    width: 90
  },
  {
    title: '',
    dataIndex: 'title',
    key: 'title',
  },
];

type TitleHistoryProps = {
  character: number;
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
  }, [])

  if (data.loading) {
    return <div className="text-center"><Spin spinning={data.loading} size="large"></Spin></div>;
  }

  const tableData = [];

  // todo: clean this crap
  if (data.titles.bear > 0) tableData.push({ key: 'bear', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Bear.png" />, title: <span style={{ fontSize: "24px" }}>Bear</span> });
  if (data.titles.bee > 0) tableData.push({ key: 'bee', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Bee.png" />, title: <span style={{ fontSize: "24px" }}>Bee</span> });
  if (data.titles.bigboss > 0) tableData.push({ key: 'boss', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/boss.png" />, title: <span style={{ fontSize: "24px" }}>Big Boss</span> });
  if (data.titles.chameleon > 0) tableData.push({ key: 'chameleon', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/CHAMELEON.png" />, title: <span style={{ fontSize: "24px" }}>Chameleon</span> });
  if (data.titles.chicken > 0) tableData.push({ key: 'chicken', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Chicken.png" />, title: <span style={{ fontSize: "24px" }}>Chicken</span> });
  if (data.titles.crocodile > 0) tableData.push({ key: 'crocodile', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Gator.png" />, title: <span style={{ fontSize: "24px" }}>Crocodile</span> });
  if (data.titles.cuckoo > 0) tableData.push({ key: 'cuckoo', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Cuckoo.png" />, title: <span style={{ fontSize: "24px" }}>Cuckoo</span> });
  if (data.titles.doberman > 0) tableData.push({ key: 'doberman', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Doberman.png" />, title: <span style={{ fontSize: "24px" }}>Doberman</span> });
  if (data.titles.eagle > 0) tableData.push({ key: 'eagle', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Eagle.png" />, title: <span style={{ fontSize: "24px" }}>Eagle</span> });
  if (data.titles.elephant > 0) tableData.push({ key: 'elephant', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Elephant.png" />, title: <span style={{ fontSize: "24px" }}>Elephant</span> });
  if (data.titles.fish > 0) tableData.push({ key: 'fish', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Fish.png" />, title: <span style={{ fontSize: "24px" }}>Fish</span> });
  if (data.titles.fox > 0) tableData.push({ key: 'fox', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Fox.png" />, title: <span style={{ fontSize: "24px" }}>Fox</span> });
  if (data.titles.foxhound > 0) tableData.push({ key: 'foxhound', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Foxhound.png" />, title: <span style={{ fontSize: "24px" }}>Foxhound</span> });
  if (data.titles.gako > 0) tableData.push({ key: 'gako', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/GAKO.png" />, title: <span style={{ fontSize: "24px" }}>GAKO</span> });
  if (data.titles.hog > 0) tableData.push({ key: 'hog', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Hog.png" />, title: <span style={{ fontSize: "24px" }}>Hog</span> });
  if (data.titles.hound > 0) tableData.push({ key: 'hound', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Hound.png" />, title: <span style={{ fontSize: "24px" }}>Hound</span> });
  if (data.titles.jaws > 0) tableData.push({ key: 'jaws', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Shark.png" />, title: <span style={{ fontSize: "24px" }}>Jaws</span> });
  if (data.titles.kerotan > 0) tableData.push({ key: 'kerotan', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Kerotan.png" />, title: <span style={{ fontSize: "24px" }}>Kerotan</span> });
  if (data.titles.komodo > 0) tableData.push({ key: 'komodo', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Komodo.png" />, title: <span style={{ fontSize: "24px" }}>Komodo</span> });
  if (data.titles.owl > 0) tableData.push({ key: 'owl', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Owl.png" />, title: <span style={{ fontSize: "24px" }}>Owl</span> });
  if (data.titles.pigeon > 0) tableData.push({ key: 'pigeon', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Pigeon.png" />, title: <span style={{ fontSize: "24px" }}>Pigeon</span> });
  if (data.titles.rat > 0) tableData.push({ key: 'rat', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Rat.png" />, title: <span style={{ fontSize: "24px" }}>Rat</span> });
  if (data.titles.skua > 0) tableData.push({ key: 'skua', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Skua.png" />, title: <span style={{ fontSize: "24px" }}>Skua</span> });
  if (data.titles.sloth > 0) tableData.push({ key: 'sloth', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Sloth.png" />, title: <span style={{ fontSize: "24px" }}>Sloth</span> });
  if (data.titles.snake > 0) tableData.push({ key: 'snake', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Snake.png" />, title: <span style={{ fontSize: "24px" }}>Snake</span> });
  if (data.titles.squirrel > 0) tableData.push({ key: 'squirrel', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Flying Squirrel.png" />, title: <span style={{ fontSize: "24px" }}>Squirrel</span> });
  if (data.titles.theboss > 0) tableData.push({ key: 'theboss', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Boss.png" />, title: <span style={{ fontSize: "24px" }}>Boss</span> });
  if (data.titles.tortoise > 0) tableData.push({ key: 'tortoise', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Turtle.png" />, title: <span style={{ fontSize: "24px" }}>Tortoise</span> });
  if (data.titles.tsuchinoko > 0) tableData.push({ key: 'tsuchinoko', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Tsuchinoko.png" />, title: <span style={{ fontSize: "24px" }}>Tsuchinoko</span> });
  if (data.titles.waterbear > 0) tableData.push({ key: 'waterbear', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Waterbear.png" />, title: <span style={{ fontSize: "24px" }}>Waterbear</span> });
  if (data.titles.whale > 0) tableData.push({ key: 'whale', img: <Image width={96} src="https://mgo2pc.com/static/media/emblem/Whale.png" />, title: <span style={{ fontSize: "24px" }}>Whale</span> });

  return (
    <div>
      <Table showHeader={false} columns={columns} dataSource={tableData} pagination={false} />
    </div>
  );
}