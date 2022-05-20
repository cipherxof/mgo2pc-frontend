import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import { PageLoading } from '@ant-design/pro-layout';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import type { RequestOptionsInit } from 'umi-request';
import { getUserToken } from './system/utility';

// const isDev = process.env.NODE_ENV === 'development';

export const initialStateConfig = {
  loading: <PageLoading />,
};

export const layout: RunTimeLayoutConfig = () => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    links: [],
    menuHeaderRender: undefined,
  };
};

const baseURLInterceptor = (url: null | string, options: RequestOptionsInit) => {
  const host = window.location.hostname === 'localhost' ? 'http://localhost:80' : '';

  options.headers = {
    authorization: `${getUserToken()}`,
  };

  return {
    url: `${host}${url}`,
    options: { ...options, interceptors: true },
  };
};

export const request: RequestConfig = {
  requestInterceptors: [baseURLInterceptor],
  errorConfig: {
    adaptor: (resData: { success: boolean; message: string; data: any }) => {
      return {
        ...resData.data,
        success: resData.success,
        errorMessage: resData.message,
      };
    },
  },
};
