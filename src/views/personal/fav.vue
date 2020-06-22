<template>
  <div class="container">
    <van-nav-bar title="收藏" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="favList">
      <div class="favItem" v-for="(item,index) in favList" :key="index">
        <van-swipe-cell>
          <van-card
            :price="item.price"
            desc="描述信息"
            :title="item.name"
            class="goods-card"
            :thumb="item.thumb"
          />
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </div>
    </div>
  </div>
</template>

<script>
import { getFavList } from "@/assets/api/api";
export default {
  data() {
    return {
        favList:[]
    };
  },
  created() {
      this._getFavList();
  },
  methods: {
    _getFavList() {
      getFavList({
          uid:this.value
      }).then(res => {
        this.favList=res.data
        console.log( this.favList)
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  computed: {
    value() {
      return this.$store.state.userId;
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>