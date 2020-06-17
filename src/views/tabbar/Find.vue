<!--  -->
<template>
  <div class="container">
    <div class="search">
      <div class="searchBtn">
        <van-icon name="search" class="searchIcon" color="#cccccc" size="20" />
        <span>商品搜索：请输入关键字</span>
      </div>
    </div>
    <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
      <template #content>
        <div v-if="active === 0">1</div>
        <div v-if="active === 1">2</div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [{ text: "手机" }, { text: "商品" }]
    };
  },

  components: {},

  methods: {
    onClickLeft() {
      console.log(1);
    }
  }
};
</script>
<style lang='scss' scoped>
.van-tree-select__content {
  padding: 10px 10px 50px 10px;
}
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.search {
  background: #ffffff;
  padding: 10px 0;
  border-bottom: 1px solid #cccccc;
  width: 100%;
  .searchBtn {
    background: #f7f7f7;
    border-radius: 100px;
    height: 30px;
    padding: 5px 15px;
    width: 80%;
    margin: auto;
    span {
      color: #cccccc;
      vertical-align: middle;
      font-size: 12px;
    }
    .searchIcon {
      vertical-align: middle;
      margin-right: 20px;
    }
  }
}
</style>