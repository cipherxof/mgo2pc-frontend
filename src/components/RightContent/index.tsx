import { getUserToken, isLoggedIn } from '@/system/utility';
import { Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'umi';
import HeaderSearch from '../HeaderSearch';
import NoticeIcon from '../NoticeIcon';
import Avatar from './AvatarDropdown';
import styles from './index.less';
import RewardPoints from './RewardPoints';
import API from '../../system/api';

const GlobalHeaderRight: React.FC = () => {
  const loggedIn = isLoggedIn();
  const [data, setData] = useState({ rp: 0 });

  useEffect(() => {
    const fetchData = async () => {
      if (!loggedIn) return;

      const token = getUserToken();

      if (!token) return;

      const response = await API.getAccount(token);

      if (!response) {
        return;
      }

      setData({ rp: response.data.rp });

      return () => {
        clearInterval(timeout);
      };
    };

    const timeout = setInterval(() => fetchData(), 1000 * 60); // refresh every 120 seconds

    fetchData();
  }, []);

  if (loggedIn) {
    return (
      <Space className={`${styles.right} ${styles.dark}`}>
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
        <RewardPoints value={data.rp} />
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
