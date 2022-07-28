// https://umijs.org/config/
import { IConfigFromPlugins } from '@/.umi/core/pluginConfig';
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

(async () => {
  try {
    const adminRoutes = await import('./routes-admin');
    if (adminRoutes) {
      routes.concat(adminRoutes.default);
    }
  } catch (e) {}
})();

const config: IConfigFromPlugins = {
  hash: true,
  antd: {
    dark: true,
  },
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'en-US',
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
};

export default defineConfig(config);
