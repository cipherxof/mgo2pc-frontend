import { GithubOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import { useIntl } from 'umi';
export default () => {
  const intl = useIntl();

  const defaultMessage = intl.formatMessage({ id: 'app.copyright' });

  return (
    <DefaultFooter
      copyright={`2022 ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/cipherxof/mgo2pc-frontend',
          blankTarget: true,
        },
        {
          key: 'youtube',
          title: <YoutubeOutlined />,
          href: 'https://www.youtube.com/channel/UC_9m-kGKK95xj-GvqUERrJw/videos',
          blankTarget: true,
        },
        {
          key: 'twitter',
          title: <TwitterOutlined />,
          href: 'https://twitter.com/mgo2pc',
          blankTarget: true,
        },
      ]}
    />
  );
};
