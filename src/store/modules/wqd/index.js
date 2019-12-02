export default {
  state: {
    pageTitle: '首页',
    creditStatus: null
  },
  mutations: {
    updateCreditStatus(state, creditInfo) {
      state.creditStatus = creditInfo;
    }
  },
  actions: {
    updateCreditStatus({ commit }, creditInfo) {
      commit('updateCreditStatus', creditInfo);
    }
  },
  getters: {
    wqdPageTitle(state) {
      return state.pageTitle;
    }
  }
};
