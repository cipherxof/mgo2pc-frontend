export default [
  { path: '/games', name: 'Games', icon: 'desktop', component: './Games' },
  { path: '/game/:id', component: './Game' },
  { path: '/profile/:character', component: './Profile' },
  { path: '/account', component: './Account' },
  { path: '/account/characters', component: './Characters' },
  { path: '/guides', component: './Home' },
  { path: '/login', component: './user/Login', layout: false },
  { path: '/register', component: './user/Register', layout: false },
  { path: '/activate/:user/:key', component: './Activate' },
  { path: '/clans', component: './Clans' },
  { path: '/shop', component: './shop/Shop' },
  { path: '/changelog', component: './Changelog' },
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
        path: '/changelog',
        name: 'Changelog',
        icon: 'test',
        component: './Changelog',
      },
      {
        path: '/shop',
        name: 'Reward Shop',
        icon: 'test',
        component: './shop/Shop',
      },
    ],
  },
  { component: './404' },
];
