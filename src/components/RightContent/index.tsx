import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  return (
    <Space className={`${styles.right}  ${styles.dark}`}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="Search"
        defaultValue=""
        options={[]}
      // onSearch={value => {
      //   console.log('input', value);
      // }}
      />
      <Avatar />
    </Space>
  );
};

export default GlobalHeaderRight;
