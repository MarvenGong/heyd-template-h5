<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {}
};
</script>

<style lang="scss">
  #app {
    position: relative;
    width: 100%;
    max-width: px2rem(750);
    height: 100%;
    .cube-btn{
      padding: 14px 16px;
      border-radius: 4px;
    }
    .ads-slide .cube-slide-item>a, .cube-slide-item>a>img{
      width: 100%;
    }
    .v-enter-active, .v-leave-active { transition: all 0.3s; }
    .v-enter, .v-leave-to { transform: translateX(100%); }
  }
</style>
