import { isLoggedIn } from '@/system/utility';
import { Space } from 'antd';
import React from 'react';
import { NavLink } from 'umi';
import HeaderSearch from '../HeaderSearch';
import NoticeIcon from '../NoticeIcon';
import Avatar from './AvatarDropdown';
import styles from './index.less';
import RewardPoints from './RewardPoints';

const GlobalHeaderRight: React.FC = () => {
  const loggedIn = isLoggedIn();

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
        <NoticeIcon />
        <RewardPoints value={0} />
        <Avatar />
      </Space>
    );
  } else {
    return (
      <Space className={`${styles.right}  ${styles.dark}`}>
        <span className={styles.action}>
          <NavLink to="/login" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            Login
          </NavLink>
        </span>
        <span className={styles.action}>
          <NavLink to="/register" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            Create Account
          </NavLink>
        </span>
      </Space>
    );
  }
};

export default GlobalHeaderRight;
