import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('vue2-animate/dist/vue2-animate.min.css');
import router from './router';
import store from './store';
import Config from './utils/Config';
import pluginGlobalMixins from './plugins/global-mixins';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// http utils
import Http from './utils/HttpUtils';
import UserLogin from '@/utils/UserLogin';
import Tools from './utils/Tools';
import { Indicator, Toast } from '@/components';
Vue.prototype.$userLogin = UserLogin;
Vue.prototype.$config = Config;
window.Config = Config;
const httpIns = new Http();
Vue.prototype.$http = httpIns;
// indicator
Vue.prototype.$indicator = Indicator;
Vue.prototype.$toast = Toast;
Vue.prototype.$store = store;
Vue.prototype.$Tools = Tools;
Vue.use(pluginGlobalMixins);
Vue.config.productionTip = false;

const initApp = async() => {
  NProgress.start();
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  });
  NProgress.done();
};
initApp();
