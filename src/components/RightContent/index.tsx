import { Space } from 'antd';
import React from 'react';
import HeaderSearch from '../HeaderSearch';
import Avatar from './AvatarDropdown';
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
