const Jywc = resolve => require(['@p/jyw-c'], resolve);
const JywcHelp = resolve => require(['@p/jyw-c/help'], resolve);
export default [{
  path: '/jywc', name: 'jywc', component: Jywc,
  children: [
    { path: 'help', component: JywcHelp, name: 'jywcHelp', meta: { title: '帮助中心' } }
  ]
}];