export default [
  { path: '/', component: './Home' },
  { path: '/games', name: 'Games', icon: 'desktop', component: './Games' },
  { path: '/profile/:character', component: './Profile' },
  { path: '/account', component: './Account' },
  {
    name: 'Information',
    icon: 'crown',
    routes: [{ path: '/faq', name: 'FAQ', icon: 'smile', component: './FAQ' }],
  },
  { path: '/login', component: './user/Login', layout: false },
  { component: './404' },
];
