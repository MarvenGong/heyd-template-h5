import Vuex from 'vuex';
import Vue from 'vue';
import actions from './actions';
import mutations from './mutations';
import usercenter from './modules/usercenter';
import wqd from './modules/wqd';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    global: {
      username: ''
    },
    addressData: [],
    enumSelectData: null,
    repayAdvanceData: {}
  },
  modules: {
    usercenter,
    wqd
  },
  actions,
  mutations,
  getters: {
    getrepayAdvanceData(state) {
      return state.repayAdvanceData;
    },
    addressPickerData(state) {
      return state.addressData.map(item => {
        const cityAryTemp = item.citys.map(c => {
          c.children = c.areas;
          return c;
        });
        item.children = cityAryTemp;
        return item;
      });
    }
  }
});
