import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'realDark',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fixed',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: '',
  splitMenus: false,
  pwa: true,
  logo: 'https://media.discordapp.net/attachments/915718508942348288/1066518658882486342/2023-native.png?width=1352&height=301',
  iconfontUrl: '',
  defaultCollapsed: true,
  breakpoint: false,
};

export default Settings;
