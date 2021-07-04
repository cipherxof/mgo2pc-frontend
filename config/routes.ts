export default [
  { path: '/welcome', name: 'Home', icon: 'home', component: './Welcome' },
  { path: '/games', name: 'Games', icon: 'desktop', component: './Games' },
  {
    path: '/admin',
    name: 'Information',
    icon: 'crown',
    component: './Admin',
    routes: [{ path: '/admin/sub-page', name: 'FAQ', icon: 'smile', component: './Welcome' }],
  },
  { path: '/', redirect: '/welcome' },
  { path: '/login', component: './user/Login', layout: false },
  { component: './404' },
];
