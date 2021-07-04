import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'realDark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fixed',
  fixedHeader: true,
  fixSiderbar: false,
  colorWeak: false,
  title: 'Metal Gear Online',
  pwa: false,
  logo: '/icons/icon-512x512.png',
  iconfontUrl: '',
};

export default Settings;
