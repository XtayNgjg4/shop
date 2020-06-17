<!--  -->
<template>
  <div class="container">
    <van-nav-bar
      title="个人设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="settingList">
        <van-cell title="单元格" is-link />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    onClickLeft() {
       this.$router.go(-1);
    },
  }
};
</script>
<style lang='scss' scoped>
</style>