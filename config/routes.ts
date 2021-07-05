export default [
  { path: '/games', name: 'Games', icon: 'desktop', component: './Games' },
  { path: '/game/:id', component: './Game' },
  { path: '/profile/:character', component: './Profile' },
  { path: '/account', component: './Account' },
  { path: '/account/characters', component: './Characters' },
  { path: '/guides', component: './Home' },
  { path: '/login', component: './user/Login', layout: false },
  { path: '/register', component: './user/Register', layout: false },
  {
    path: '/faq',
    name: 'More',
    icon: 'more',
    component: './FAQ',
    routes: [
      {
        path: '/faq',
        name: 'FAQ',
        icon: 'smile',
        component: './FAQ',
      },
    ],
  },
  //{ name: 'More', icon: 'more', routes: [{ path: '/faq', name: 'FAQ', component: './FAQ' }]},
  { path: '/', component: './Home' },
  { component: './404' },
];
