import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import { PageLoading } from '@ant-design/pro-layout';
import { notification } from 'antd';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';

const isDev = process.env.NODE_ENV === 'development';

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
