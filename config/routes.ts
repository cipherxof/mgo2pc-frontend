import { useIntl } from 'umi';

export default [
  {
    path: '/games',
    name: 'games',
    icon: 'https://mgo2pc.com/static/games.png',
    component: './Games',
  },
  {
    path: '/rankings/score/1',
    name: 'leaderboards',
    icon: 'https://mgo2pc.com/static/leaderboards.png',
    component: './Rankings',
  },
  {
    path: '/shop',
    name: 'rewardshop',
    icon: 'https://mgo2pc.com/static/money.png',
    component: './shop/Shop',
  },
  { path: '/game/:id', component: './Game' },
  { path: '/profile/:character', component: './Profile' },
  { path: '/account', component: './Account' },
  { path: '/account/characters', component: './Characters' },
  { path: '/guides', component: './Home' },
  { path: '/login', component: './user/Login', layout: false },
  { path: '/register', component: './user/Register', layout: false },
  { path: '/recovery', component: './user/Recovery', layout: false },
  { path: '/resetpassword/:user/:key', component: './ResetPassword' },
  { path: '/activate/:user/:key', component: './Activate' },
  { path: '/clans', component: './Clans' },
  { path: '/rankings/:mode/:page', component: './Rankings' },
  { path: '/shop/:id?', component: './shop/Shop' },
  { path: '/changelog', component: './Changelog' },
  { path: '/admin', component: './admin/Index' },
  { path: '/admin/user/:id', component: './admin/User' },
  { path: '/admin/chat/:id', component: './admin/Chat' },
  { path: '/admin/chatgame/:id', component: './admin/ChatGame' },
  { path: '/admin/events/:id', component: './admin/Events' },
  { path: '/', component: './Home' },
  {
    name: 'more',
    icon: 'more',
    routes: [
      /*{
        path: '/clans',
        name: 'Clans',
        icon: 'smile',
      },*/
      {
        path: '/faq',
        name: 'faq',
        icon: 'smile',
        component: './FAQ',
      },
      {
        path: '/rankguide',
        name: 'rankguide',
        icon: 'smile',
        component: './RankGuide',
      },
      {
        path: '/changelog',
        name: 'changelog',
        icon: 'test',
        component: './Changelog',
      },
    ],
  },
  { component: './404' },
];
