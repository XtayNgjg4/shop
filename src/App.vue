<template>
  <div id="app">
    <router-view />
    <van-tabbar
      route
      v-model="active"
      active-color="#07c160"
      :fixed="true"
      inactive-color="#000"
      :placeholder="true"
      :safe-area-inset-bottom="true"
      v-if="$route.meta.showTab"
    >
      <van-tabbar-item icon="home-o" to="/Home">商城首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/Find">商城分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :badge="value" to="/Cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/Personal">会员中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  computed: {
    value() {
      return this.$store.state.carTotal;
    }
  }
};
</script>

<style lang="scss">
#app,
body,
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: #f5f5f5;
}
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
* {
  box-sizing: border-box;
}
.van-list__error-text,
.van-list__finished-text,
.van-list__loading {
  width: 100%;
}
</style>
