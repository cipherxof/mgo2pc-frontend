import { getTitles } from '@/services/mgo2pc/api';
import { getRankId, timeSince } from '@/system/utility';
import { Alert, Card, Image, Spin, Statistic, Typography } from 'antd';
import { useIntl, useRequest } from 'umi';

const { Title } = Typography;

type TitleHistoryProps = {
  character: number;
};

type TitleData = {
  name: string;
  image: string;
};

const titleData: TitleData[] = [];
titleData['bear'] = { name: 'Bear', image: '19.png' };
titleData['bee'] = { name: 'Bee', image: 'Bee.png' };
titleData['bigboss'] = { name: 'Big Boss', image: 'boss.png' };
titleData['theboss'] = { name: 'The Boss', image: 'theboss.png' };
titleData['chameleon'] = { name: 'Chameleon', image: 'CHAMELEON.png' };
titleData['chicken'] = { name: 'Chicken', image: 'Chicken.png' };
titleData['crocodile'] = { name: 'Crocodile', image: 'Gator.png' };
titleData['cuckoo'] = { name: 'Cuckoo', image: 'Cuckoo.png' };
titleData['doberman'] = { name: 'Doberman', image: 'Doberman.png' };
titleData['eagle'] = { name: 'Eagle', image: 'Eagle.png' };
titleData['elephant'] = { name: 'Elephant', image: 'Elephant.png' };
titleData['fish'] = { name: 'Fish', image: 'Fish.png' };
titleData['fox'] = { name: 'Fox', image: 'Fox.png' };
titleData['foxhound'] = { name: 'Foxhound', image: 'Foxhound.png' };
titleData['gako'] = { name: 'GAKO', image: 'GAKO.png' };
titleData['hog'] = { name: 'Hog', image: 'Hog.png' };
titleData['hound'] = { name: 'Hound', image: 'Hound.png' };
titleData['jaws'] = { name: 'Jaws', image: 'Shark.png' };
titleData['kerotan'] = { name: 'Kerotan', image: 'Kerotan.png' };
titleData['komodo'] = { name: 'Komodo', image: 'Komodo.png' };
titleData['owl'] = { name: 'Owl', image: 'Owl.png' };
titleData['pigeon'] = { name: 'Pigeon', image: 'Pigeon.png' };
titleData['rat'] = { name: 'Rat', image: 'Rat.png' };
titleData['skua'] = { name: 'Skua', image: 'Skua.png' };
titleData['sloth'] = { name: 'Sloth', image: 'Sloth.png' };
titleData['snake'] = { name: 'Snake', image: 'Snake.png' };
titleData['squirrel'] = { name: 'Squirrel', image: 'Flying Squirrel.png' };
titleData['theboss'] = { name: 'Boss', image: 'Boss.png' };
titleData['tortoise'] = { name: 'Tortoise', image: 'Turtle.png' };
titleData['tsuchinoko'] = { name: 'Tsuchinoko', image: 'TSUCHINOKO.png' };
titleData['waterbear'] = { name: 'Waterbear', image: 'Waterbear.png' };
titleData['whale'] = { name: 'Whale', image: 'Whale.png' };

export default function TitleHistoryTable(props: TitleHistoryProps): JSX.Element {
  const intl = useIntl();
  const { data, loading } = useRequest(() => getTitles(props.character));

  if (!data || loading) {
    return (
      <div className="text-center">
        <Spin spinning={loading} size="large" />
      </div>
    );
  }

  const contents = [<div key="empty" />];
  let col = 0;
  let cols = [];
  let foundTitles = false;

  for (const [key, value] of Object.entries(data)) {
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
    if (value > 0 && key !== 'id' && key !== 'chara' && titleData[key]) {
      foundTitles = true;
      cols.push(
        <div className="col-md-3 text-center">
          <Card>
            <Title level={3}>{titleData[key].name}</Title>
            <Image width={96} src={`/static/media/emblem/${getRankId(key)}.png`} />
            <Statistic value={`${timeSince(new Date(value * 1000))} ago`} />
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
  if (!foundTitles) {
    contents.push(
      <div key="0" className="col-md-12">
        <Alert
          message="Information"
          description={intl.formatMessage({ id: 'app.notitle' })}
          type="info"
          showIcon
        />
      </div>,
    );
  }

  return <div>{contents}</div>;
}
