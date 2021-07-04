export default [
  { path: '/', component: './Home' },
  { path: '/games', name: 'Games', icon: 'desktop', component: './Games' },
  { path: '/game/:id', component: './Game' },
  { path: '/profile/:character', component: './Profile' },
  { path: '/account', component: './Account' },
  { path: '/login', component: './user/Login', layout: false },
  { path: '/register', component: './user/Register', layout: false },
  {
    name: 'Information',
    icon: 'crown',
    routes: [{ path: '/faq', name: 'FAQ', icon: 'smile', component: './FAQ' }]
  },
  { component: './404' },
];
