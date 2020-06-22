<!--  -->
<template>
  <div class="container">
    <div class="search">
      <div class="searchBtn">
        <van-icon name="search" class="searchIcon" color="#cccccc" size="20" />
        <span>商品搜索：请输入关键字</span>
      </div>
    </div>
    <van-tree-select
      height="100%"
      :items="items"
      :main-active-index.sync="items.activeId"
      @click-nav="onNavClick"
    >
      <template #content>
        <div class="shopList">
          <div class="shopItem" v-for="(shop,index) in shopList" :key="index">
            <router-link :to="{name:'shopDetail',params:{shopid:shop.goods_id}}">
              <img :src="shop.img" alt />
              <div class="shopItemName">{{shop.name}}</div>
            </router-link>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { getCats, getShopList } from "@/assets/api/api";
export default {
  data() {
    return {
      active: 0,
      items: [],
      shopList:[],
      cid:[]
    };
  },

  components: {},
  created() {
    this._getCats();
    this._getShopList(1);
  },
  methods: {
    _getCats() {
      getCats().then(res => {
        this.cid=res.data.id;
        for (let index = 0; index < res.data.length; index++) {
          this.items.push({
            activeId: res.data[index].id,
            text: res.data[index].name
          });
        }
      });
    },
    _getShopList(id) {
      getShopList({ cid: id }).then(res => {
        this.shopList = res.data
      });
    },
    onClickLeft() {
      
    },
    onNavClick(index) {
      let cid = this.items[index].activeId;
      this._getShopList(cid);
    }
  }
};
</script>
<style lang='scss' scoped>
.shopList{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .shopItem{
    width: 49%;
    margin-bottom: 15px;
    img{
      width: 100%;
      
    }
    .shopItemName{
      font-size: 12px;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
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