import { getUserAccount } from '@/system/utility';
import { DashboardOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { setAlpha } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { history, NavLink } from '@umijs/max';
import { Avatar, notification } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback } from 'react';
import HeaderDropdown from '../HeaderDropdown';

const AvatarLogo = () => {
  const avatarClassName = useEmotionCss(({ token }) => {
    return {
      marginRight: '8px',
      color: token.colorPrimary,
      verticalAlign: 'top',
      background: setAlpha(token.colorBgContainer, 0.85),
      [`@media only screen and (max-width: ${token.screenMD}px)`]: {
        margin: 0,
      },
    };
  });

  return (
    <Avatar
      size="small"
      className={avatarClassName}
      src={'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'}
      alt="avatar"
    />
  );
};

const AvatarDropdown: React.FC = () => {
  const account = getUserAccount();

  const actionClassName = useEmotionCss(({ token }) => {
    return {
      display: 'flex',
      height: '48px',
      marginLeft: 'auto',
      overflow: 'hidden',
      alignItems: 'center',
      padding: '0 8px',
      cursor: 'pointer',
      borderRadius: token.borderRadius,
      '&:hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });

  const nameClassName = useEmotionCss(({ token }) => {
    return {
      maxWidth: '200px',
      height: '48px',
      overflow: 'hidden',
      lineHeight: '48px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      [`@media only screen and (max-width: ${token.screenMD}px)`]: {
        display: 'none',
      },
    };
  });

  const loginOut = () => {
    localStorage.removeItem('token');
    notification.success({
      message: `Success`,
      description: 'You have been logged out.',
      placement: 'topRight',
    });
    history.push('/');
  };

  const onMenuClick = useCallback((event: MenuInfo) => {
    const { key } = event;
    if (key === 'logout') {
      loginOut();
      return;
    }
    history.push(key);
  }, []);

  const displayName = account ? account.displayName : 'User';

  if (!account) {
    return (
      <>
        <NavLink className={actionClassName} style={{ color: 'inherit' }} to="/login">
          <span>Login</span>
        </NavLink>
        <NavLink className={actionClassName} style={{ color: 'inherit' }} to="/register">
          <span>Register</span>
        </NavLink>
      </>
    );
  }

  const isAdmin = account.role !== undefined && account.role >= 10;

  const menuItems = [
    {
      key: '/account/characters',
      icon: <UserOutlined />,
      label: 'Characters',
    },
    {
      key: '/account',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
    },
  ];

  if (isAdmin) {
    menuItems.unshift({
      key: '/admin',
      icon: <DashboardOutlined />,
      label: 'Admin',
    });
  }

  return (
    <HeaderDropdown
      menu={{
        selectedKeys: [],
        onClick: onMenuClick,
        items: menuItems,
      }}
    >
      <span className={actionClassName}>
        <AvatarLogo />
        <span className={`${nameClassName} anticon`}>{displayName}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
