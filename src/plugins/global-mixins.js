import Vue from 'vue';
import { mapGetters } from 'vuex';
export default {
  install() {
    Vue.mixin({
      methods: {
        scrollTop() {
          this.$nextTick(() => {
            $('.wqd-main').animate({ scrollTop: '0px' }, 200);
          });
        },
        goBack() {
          this.$router.go(-1);
        },
        /**
         * @param {String} routeName 跳转的路由名字
         */
        goTo(routeName) {
          this.$router.push({
            name: routeName
          });
        },
        getEnumSelect(field) {
          const filters = this.$store.state.enumSelectData.filter(item => {
            return item.field === field;
          });
          if (filters.length === 0) {
            return [];
          } else {
            return filters[0].items.map(item => {
              return {
                text: item.itemName,
                value: item.itemCode
              };
            });
          }
        },
        initAddressPicker(onSelect) {
          return this.$createCascadePicker({
            title: '请选择地址',
            data: this.addressPickerData,
            alias: { text: 'areaName', value: 'areaNo' },
            onSelect
          });
        }
      },
      computed: {
        ...mapGetters([
          'addressPickerData'
        ])
      }
    });
  }
};

