/* eslint-disable max-len */
import Vue from 'vue';
import Router from 'vue-router';
import MydRoutes from './myd';
import JywcRoutes from './jyw-c';
import JywbRoutes from './jyw-b';
// import { needH5LoginRouteName } from './router-config';
// import UserLogin from '../utils/UserLogin';
Vue.use(Router);
const Default = resolve => require(['@p/index.vue'], resolve);
const PageNotFound = resolve => require(['@p/errors/not-found'], resolve);
const myRouter = new Router({
  routes: [
    { path: '*', name: 'pageNotFound', component: PageNotFound },
    { path: '/', component: Default, name: 'default' }
  ],
  scrollBehavior() {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 };
  }
});
myRouter.addRoutes([...MydRoutes, ...JywcRoutes, ...JywbRoutes]);
// myRouter.beforeEach((to, from, next) => {
//   // 如果访问的页面需要登录则进行登录判断
//   if (needH5LoginRouteName.indexOf(to.name) >= 0) {
//     if (UserLogin.isLogin()) {
//       next();
//     } else {
//       next({ 'path': '/login',
//         query: {
//           redirect_url: to.path
//         }
//       });
//     }
//   } else {
//     next();
//   }
// });
myRouter.afterEach((to) => {
  document.title = to.meta.title || 'H5';
});
export default myRouter;
