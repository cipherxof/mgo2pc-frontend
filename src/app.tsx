import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
import { getUserToken } from './system/utility';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  return {
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

const baseURLInterceptor = (url: null | string, options: any) => {
  const host = window.location.hostname === 'localhost' ? 'http://localhost:80' : '';
  
  options.headers = {
    authorization: `${getUserToken()}`,
  };

  return {
    url: `${host}${url}`,
    options: { ...options, interceptors: true },
  };
};

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    menuHeaderRender: undefined,
    childrenRender: (children) => {
      return (
        <>
          {children}
        </>
      );
    },
    ...initialState?.settings,
  };
};

export const request = {
  ...errorConfig,
  requestInterceptors: [baseURLInterceptor],
};
