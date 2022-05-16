import { getUserAccount } from '@/system/utility';
import { IdcardOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
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
  const account = getUserAccount();
  const displayName = account ? account.displayName : 'User';

  const onMenuClick = useCallback((event: MenuInfo) => {}, []);

  const onLogout = useCallback(() => {
    localStorage.removeItem('token');
    notification.success({
      message: `Success`,
      description: 'You have been logged out.',
      placement: 'topRight',
    });
    history.push('/');
  }, []);

  if (!account) {
    return <React.Fragment></React.Fragment>;
  }

  const isAdmin = account.role !== undefined && account.role >= 10;

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      {isAdmin && (
        <Menu.Item key="admin">
          <NavLink to="/admin">
            <IdcardOutlined />
            Admin
          </NavLink>
        </Menu.Item>
      )}

      <Menu.Item key="center">
        <NavLink to="/account/characters">
          <UserOutlined />
          Characters
        </NavLink>
      </Menu.Item>

      <Menu.Item key="settings">
        <NavLink to="/account">
          <SettingOutlined />
          Settings
        </NavLink>
      </Menu.Item>

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
        <Avatar
          size="small"
          className={styles.avatar}
          alt="avatar"
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
        />
        <span className={`${styles.name} anticon`}>{displayName}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
