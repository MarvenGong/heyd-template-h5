<template>
  <section id="err-404">
    <div class="content_404">
      <div class="img-404">
        <img src="/images/404.gif"/>
      </div>
    </div>
    <h2>您访问的页面没找到哦~</h2>
    <div class="err-btn-group">
      <cube-button :outline="true" @click="toReturn"><i class="cubeic-back"></i>上一页</cube-button>
      <cube-button @click="toIndex"><i class="cubeic-back"></i>首页</cube-button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'notFound',
  data() {
    return {};
  },
  methods: {
    toReturn() {
      this.$router.go(-1);
    },
    toIndex() {
      this.$router.push({
        name: 'wqdHome'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  #err-404 {
    width: 100%;
    height:100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .err-btn-group {
      margin-top: px2rem(80);
      width: 100%;
      padding: 0 px2rem(30);
      .cube-btn {
        margin-bottom: 20px;
        & :last-of-type{
          margin-bottom: 0;
        }
      }
    }
    &>h2 {
      text-align: center;
      font-size: px2rem(32);
      color: #343646;
      padding: px2rem(30) 0;
    }
    .content_404 {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      width: px2rem(375);
      overflow: hidden;
      margin: 0 auto;
      position: relative;
      .img-404 {
        width: 100%;
        display: inline-block;
        position: relative;
        padding-top: 45.83%;
        img {
          display: block;
          position: absolute;
          top:0;
          left:0;
          width: 100%;
          height:100%;
        }
      }
    }
  }
</style>