import { getUserToken } from '@/system/utility';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, Space, Tooltip } from 'antd';
import React from 'react';
import { NavLink } from 'umi';
import HeaderSearch from '../HeaderSearch';
import Avatar from './AvatarDropdown';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const token = getUserToken();
  const loggedIn = !(!token);

  if (loggedIn) {
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
  } else {
    return (
      <Space className={`${styles.right}  ${styles.dark}`} >
        <span className={styles.action}>
          <NavLink to="/login" style={{ color: "rgba(255, 255, 255, 0.85)" }}>Login</NavLink>
        </span>
        <span className={styles.action}>
          <NavLink to="/register" style={{ color: "rgba(255, 255, 255, 0.85)" }}>Create Account</NavLink>
        </span>
      </Space >
    )
  }
};

export default GlobalHeaderRight;
