export default [
  { path: '/games', name: 'Games', icon: 'https://mgo2pc.com/static/games.png', component: './Games' },
  { path: '/rankings/score/1', name: 'Leaderboards', icon: 'https://mgo2pc.com/static/leaderboards.png', component: './Rankings' },
  { path: '/shop', name: 'Reward Shop', icon: 'https://mgo2pc.com/static/money.png', component: './shop/Shop' },
  { path: '/game/:id', component: './Game' },
  { path: '/profile/:character', component: './Profile' },
  { path: '/account', component: './Account' },
  { path: '/account/characters', component: './Characters' },
  { path: '/guides', component: './Home' },
  { path: '/login', component: './user/Login', layout: false },
  { path: '/register', component: './user/Register', layout: false },
  { path: '/activate/:user/:key', component: './Activate' },
  { path: '/clans', component: './Clans' },
  { path: '/rankings/:mode/:page', component: './Rankings' },
  { path: '/shop', component: './shop/Shop' },
  { path: '/changelog', component: './Changelog' },
  { path: '/admin', component: './admin/Index' },
  { path: '/admin/user/:id', component: './admin/User' },
  { path: '/admin/chat/:id', component: './admin/Chat' },
  { path: '/admin/chatgame/:id', component: './admin/ChatGame' },
  { path: '/admin/events/:id', component: './admin/Events' },
  { path: '/shop/:id', component: './shop/ShopItem' },
  { path: '/', component: './Home' },
  {
    name: 'More',
    icon: 'more',
    routes: [
      /*{
        path: '/clans',
        name: 'Clans',
        icon: 'smile',
      },*/
      {
        path: '/faq',
        name: 'FAQ',
        icon: 'smile',
        component: './FAQ',
      },
      {
        path: '/rankguide',
        name: 'Ranking Guide',
        icon: 'smile',
        component: './RankGuide',
      },
      {
        path: '/changelog',
        name: 'Changelog',
        icon: 'test',
        component: './Changelog',
      }
    ],
  },
  { component: './404' },
];
