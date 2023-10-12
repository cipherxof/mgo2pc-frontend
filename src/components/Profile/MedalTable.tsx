import { useIntl } from '@umijs/max';
import { Table, Typography } from 'antd';

const { Text } = Typography;

type MedalTableProps = {
  stats: Stats;
};

type MedalData = {
  image: string;
  text: string;
};

const columns = [
  {
    title: '',
    dataIndex: 'img',
    key: 'img',
    width: '128px',
  },
  {
    title: '',
    dataIndex: 'desc',
    key: 'desc',
  },
];

export default function MedalTable(props: MedalTableProps): JSX.Element {
  const intl = useIntl();
  const medals: any[] = [];
  const medalData: MedalData[] = [];

  if (props.stats.consecutive_kills >= 5) {
    medalData.push({
      image: '0001e_0067C73A.png',
      text: `${intl.formatMessage({ id: 'app.5conckill' })}`,
    });
  }

  if (props.stats.consecutive_kills >= 10) {
    medalData.push({
      image: '0002e_0067C73E.png',
      text: `${intl.formatMessage({ id: 'app.10conckill' })}`,
    });
  }

  if (props.stats.consecutive_kills >= 25) {
    medalData.push({
      image: '0003e_0067C742.png',
      text: `${intl.formatMessage({ id: 'app.25conckill' })}`,
    });
  }

  if (props.stats.consecutive_headshots >= 3) {
    medalData.push({
      image: '0004e_0067C746.png',
      text: `${intl.formatMessage({ id: 'app.3conchead' })}`,
    });
  }

  if (props.stats.consecutive_headshots >= 10) {
    medalData.push({
      image: '0005e_0067C74A.png',
      text: `${intl.formatMessage({ id: 'app.10conchead' })}`,
    });
  }

  if (props.stats.consecutive_headshots >= 30) {
    medalData.push({
      image: '0006e_0067C74E.png',
      text: `${intl.formatMessage({ id: 'app.30conchead' })}`,
    });
  }

  if (props.stats.consecutive_deaths >= 5) {
    medalData.push({
      image: '0007e_0067C752.png',
      text: `${intl.formatMessage({ id: 'app.5concdeath' })}`,
    });
  }

  if (props.stats.consecutive_deaths >= 10) {
    medalData.push({
      image: '0008e_0067C756.png',
      text: `${intl.formatMessage({ id: 'app.10concdeath' })}`,
    });
  }

  if (props.stats.consecutive_deaths >= 25) {
    medalData.push({
      image: '0009e_0067C75A.png',
      text: `${intl.formatMessage({ id: 'app.25concdeath' })}`,
    });
  }

  if (props.stats.kills >= 500) {
    medalData.push({
      image: '0010e_0067C7B6.png',
      text: `${intl.formatMessage({ id: 'app.500totalkill' })}`,
    });
  }

  if (props.stats.kills >= 2000) {
    medalData.push({
      image: '0011e_0067C7BA.png',
      text: `${intl.formatMessage({ id: 'app.2000totalkill' })}`,
    });
  }

  if (props.stats.kills >= 10000) {
    medalData.push({
      image: '0012e_0067C7BE.png',
      text: `${intl.formatMessage({ id: 'app.10000totalkill' })}`,
    });
  }

  if (props.stats.kills >= 500) {
    medalData.push({
      image: '0013e_0067C7C2.png',
      text: `${intl.formatMessage({ id: 'app.500totaldeath' })}`,
    });
  }

  if (props.stats.kills >= 2000) {
    medalData.push({
      image: '0014e_0067C7C6.png',
      text: `${intl.formatMessage({ id: 'app.2000totaldeath' })}`,
    });
  }

  if (props.stats.kills >= 10000) {
    medalData.push({
      image: '0015e_0067C7CA.png',
      text: `${intl.formatMessage({ id: 'app.1000totaldeath' })}`,
    });
  }

  if (props.stats.spotted >= 100) {
    medalData.push({
      image: '0037e_0067C8D2.png',
      text: `${intl.formatMessage({ id: 'app.100tsnefind' })}`,
    });
  }

  if (props.stats.snake_spotted >= 50) {
    medalData.push({
      image: '0019e_0067C7DA.png',
      text: `${intl.formatMessage({ id: 'app.50snakespot1st' })}`,
    });
  }

  if (props.stats.snake_spotted >= 100) {
    medalData.push({
      image: '0020e_0067C836.png',
      text: `${intl.formatMessage({ id: 'app.100snakespot1st' })}`,
    });
  }

  if (props.stats.snake_spotted >= 500) {
    medalData.push({
      image: '0021e_0067C83A.png',
      text: `${intl.formatMessage({ id: 'app.500snakespot1st' })}`,
    });
  }

  if (props.stats.snake_holdups >= 50) {
    medalData.push({
      image: '0025e_0067C84A.png',
      text: `${intl.formatMessage({ id: 'app.50snakeholdups' })}`,
    });
  }

  if (props.stats.snake_holdups >= 100) {
    medalData.push({
      image: '0026e_0067C84E.png',
      text: `${intl.formatMessage({ id: 'app.100snakeholdups' })}`,
    });
  }

  if (props.stats.snake_holdups >= 500) {
    medalData.push({
      image: '0027e_0067C852.png',
      text: `${intl.formatMessage({ id: 'app.500snakeholdups' })}`,
    });
  }

  if (props.stats.time >= 864000) {
    medalData.push({
      image: '0041e_0067C93A.png',
      text: `${intl.formatMessage({ id: 'app.240hoursplayed' })}`,
    });
  }

  if (props.stats.time >= 3214800) {
    medalData.push({
      image: '0041e_0067C93A.png',
      text: `${intl.formatMessage({ id: 'app.893hoursplayed' })}`,
    });
  }

  if (props.stats.time >= 18000000) {
    medalData.push({
      image: '0041e_0067C93A.png',
      text: `${intl.formatMessage({ id: 'app.5000hoursplayed' })}`,
    });
  }

  for (const data of medalData) {
    medals.push({
      key: data.image,
      img: <img src={`/static/media/medals/${data.image}`} />,
      desc: <Text strong>{data.text}</Text>,
    });
  }

  return (
    <div>
      <Table dataSource={medals} columns={columns} pagination={false} showHeader={false} />
    </div>
  );
}
