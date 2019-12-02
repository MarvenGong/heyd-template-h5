export default {
  setUserName({ state }, username) {
    state.global.username = username;
  },
  setEnumSelectData(state, data) {
    state.enumSelectData = data;
  },
  setAddressData(state, data) {
    state.addressData = data;
  },
  setRepayAdvanceData(state, data) {
    state.repayAdvanceData = data;
  }
};
