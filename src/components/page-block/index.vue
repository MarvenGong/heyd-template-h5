<template>
  <section class="page-block">
    <h3 class="b-title">{{title}}</h3>
    <div class="b-body">
      <slot></slot>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {};
    },
    props: {
      title: {
        default: '标题',
        required: false,
        type: String
      }
    }
  };
</script>
<style lang="scss">
  .page-block{
    background-color: #fff;
    margin-top: 10px;
    padding: px2rem(20) 0 0;
    h3.b-title{
      height: px2rem(40);
      line-height: px2rem(40);
      font-size: px2rem(32);
      border-left: 3px solid #f61513;
      padding-left: px2rem(24);
    }
    .b-body{
      padding: px2rem(24);
    }
  }
</style>
