import { getUserName } from '@/system/utility';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, notification } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback } from 'react';
import { NavLink, useHistory } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const history = useHistory();

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
    },
    [],
  );

  const onLogout = useCallback(
    () => {
      sessionStorage.removeItem('token');
      notification.success({ message: `Success`, description: "You have been logged out.", placement: "topRight" });
      history.push('/');
    },
    [],
  );

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      <NavLink to="/account/characters">
        <Menu.Item key="center">
          <UserOutlined />
          Characters
        </Menu.Item>
      </NavLink>

      <NavLink to="/account">
        <Menu.Item key="settings">
          <SettingOutlined />
          Settings
        </Menu.Item>
      </NavLink>

      <Menu.Divider />

      <Menu.Item key="logout" onClick={() => onLogout()}>
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} alt="avatar" />
        <span className={`${styles.name} anticon`}>{getUserName()}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
