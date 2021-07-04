import { GithubOutlined } from '@ant-design/icons';
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
          href: 'https://github.com/cipherxof',
          blankTarget: true,
        }
      ]}
    />
  );
};
