import { GithubOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const defaultMessage = 'Metal Gear Online 2 PC. All rights reserved. This website is not associated with Konami or its affiliates. Special thanks to SaveMGO.';
  return (
    <DefaultFooter
      copyright={`2021 ${defaultMessage}`}
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
        }
      ]}
    />
  );
};