const Jywb = resolve => require(['@p/jyw-b'], resolve);
const JywbHelp = resolve => require(['@p/jyw-b/help'], resolve);
export default [{
  path: '/jywb', name: 'jywb', component: Jywb,
  children: [
    { path: 'help', component: JywbHelp, name: 'jywbHelp', meta: { title: '帮助中心' } }
  ]
}];