﻿/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/',
    component: './Home',
    name: 'home',
    icon: 'home',
  },
  {
    path: '/games',
    name: 'games',
    icon: 'global',
    component: './Games',
  },
  {
    path: '/rankings/score/1',
    name: 'leaderboards',
    icon: 'crown',
    component: './Rankings',
  },
  {
    path: '/stats',
    name: 'population',
    icon: 'user',
    component: './Stats',
  },
  {
    path: '/shop',
    name: 'rewardshop',
    icon: 'shop',
    component: './Shop/Shop',
  },
  { path: '/game/:id', component: './Game' },
  { path: '/profile/:character', component: './Profile' },
  { path: '/account', component: './Account' },
  { path: '/account/characters', component: './Characters' },
  {
    name: 'login',
    path: '/login',
    component: './User/Login',
    layout: false,
  },
  { path: '/register', component: './User/Register', layout: false },
  { path: '/register-result/:email', component: './User/Register/result.tsx' },
  { path: '/recovery', component: './User/Recovery', layout: false },
  { path: '/resetpassword/:user/:key', component: './ResetPassword' },
  { path: '/activate/:user/:key', component: './Activate' },
  //{ path: '/clans', component: './Clans' },
  { path: '/clan/:id', component: './Clan' },
  { path: '/rankings/:mode/:page', component: './Rankings' },
  { path: '/shop/:id', component: './Shop/Shop' },
  { path: '/changelog', component: './Changelog' },
  { path: '/game/:id', component: './Game' },
  {
    path: '*',
    component: './404',
  },
  {
    path: '/faq',
    name: 'faq',
    icon: 'question',
    component: './FAQ',
  },
  {
    path: '/tutorials',
    name: 'guides',
    icon: 'camera',
    component: './VideoGuides',
  },
  {
    path: '/rankguide',
    name: 'ranks',
    icon: 'star',
    component: './RankGuide',
  },
  /*{
      path: '/changelog',
      name: 'Changelog',
      icon: 'book',
      component: './Changelog',
    },*/
];
