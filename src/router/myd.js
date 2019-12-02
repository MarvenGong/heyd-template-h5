const Myd = resolve => require(['@p/myd'], resolve);
const MydHelp = resolve => require(['@p/myd/help'], resolve);
const MydRoutes = [{
  path: '/myd', name: 'myd', component: Myd,
  children: [
    { path: 'help', component: MydHelp, name: 'mydHelp', meta: { title: '帮助中心' } }
  ]
}];
export default MydRoutes;
