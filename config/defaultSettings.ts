import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'realDark',
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fixed',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: '',
  splitMenus: false,
  pwa: true,
  logo: '/static/logo.4185b845.png',
  iconfontUrl: '',
  defaultCollapsed: true,
  breakpoint: false,
};

export default Settings;
