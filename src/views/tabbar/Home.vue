<template>
  <div class="container">
    <div class="header">
      <div class="search">
        <div class="searchBtn">
          <van-icon name="search" class="searchIcon" color="#cccccc" size="20" />
          <span>商品搜索：请输入关键字</span>
        </div>
        <van-icon name="manager-o" class="sicon" color="#cccccc" size="30" />
      </div>
    </div>
    <div class="content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :loop="true">
          <van-swipe-item>
            <img src="../../assets/banner/b1.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/banner/b2.jpg" alt />
          </van-swipe-item>
        </van-swipe>

        <div class="tab">
          <div class="tabItem">
            <img src="../../assets/tab/m1.png" alt />
            <div class="tabTxt">推荐</div>
          </div>
          <div class="tabItem">
            <img src="../../assets/tab/m2.png" alt />
            <div class="tabTxt">上新</div>
          </div>
          <div class="tabItem">
            <img src="../../assets/tab/m3.png" alt />
            <div class="tabTxt">热卖</div>
          </div>
          <div class="tabItem">
            <img src="../../assets/tab/m4.png" alt />
            <div class="tabTxt">精品</div>
          </div>
        </div>

        <van-notice-bar
          :scrollable="true"
          color="#1989fa"
          background="#ecf9ff"
          left-icon="volume-o"
        >通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容</van-notice-bar>
        <van-skeleton title avatar :row="3" :loading="skeleton">
          <div class="shopList">
            <div class="shopListTitle">
              <img src="../../assets/home/tjpic.png" alt />
            </div>
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="_getShopList"
            >
              <div class="shopItem" v-for="list in shopList" :key="list.item_id">
                <router-link
                  class="shopLink"
                  :to="{name:'shopDetail',params:{shopid:list.goods_id}}"
                >
                  <img :src="list.path" alt />
                  <div class="shopCon">
                    <div class="shopTitle">{{list.item_name}}</div>
                    <div class="shopTag">
                      <span>满99减50</span>
                    </div>
                    <div class="shopPrice">
                      ￥
                      <span>{{list.unit_price_web}}</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </van-list>
          </div>
        </van-skeleton>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { getShopList, getCartList } from "@/assets/api/api";
export default {
  name: "Home",
  data() {
    return {
      count: 0,
      isLoading: false,
      shopList: [],
      loading: false,
      finished: false,
      page: 1,
      refreshing: false,
      curPageData: [],
      curPageLen: 0,
      pageSize: 10,
      skeleton: true
    };
  },
  created() {
    this._getShopList();
    // this._getCartList();
  },
  methods: {
    _getCartList() {
      getCartList({
        uid: 5
      }).then(res => {
        this.$store.commit("SetCarTotal", res.data.num);
      });
    },
    _getShopList() {
      if (this.page * this.pageSize < this.count) {
        this.page++;
      }
      getShopList({
        page:this.page
      }).then(res => {
        console.log(res)

        this.curPageData = res.data.info;
        this.curPageLen = this.curPageData.length;

        this.count = res.data.total;
        if (this.page == 1) {
          this.shopList = [];
        }

        this.shopList = this.shopList.concat(this.curPageData);
        this.loading = false;

        if (this.shopList.length >= this.count) {
          this.finished = true;
        }
        this.skeleton= false
      });
    },
    onRefresh() {
      getShopList({ page: 1 }).then(res => {
        this.page = 1;
        this.finished = false;
        this.shopList = res.data.info;
        this.isLoading = false;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container{background: #ffffff;}
.shopPrice {
  font-size: 12px;
  color: #f23030;
  span {
    font-size: 16px;
  }
}
.shopTag {
  margin: 10px 0;
  span {
    display: inline-block;
    vertical-align: middle;
    font-size: 10px;
    border: 1px solid #f23030;
    color: #f23030;
    padding: 0 4px;
  }
}
.van-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
}
.shopCon {
  padding: 8px;
}
.shopItem {
  flex: 0 0 50%;
  border-radius: 10px;
  margin-top: 10px;
  padding: 0 5px;
  a {
    display: block;
    background: #ffffff;
    border-radius: 5px;
    img {
      max-width: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    .shopTitle {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 13px;
    }
  }
}
.shopListTitle {
  padding: 0 10px;
}
.shopListTitle img {
  width: 100%;
}
.van-notice-bar {
  margin: 20px 10px;
  border-radius: 100px;
}
.tab {
  display: flex;
  padding: 0 10px;
  margin: 10px 0;
}
.my-swipe{padding: 10px 0;}
.tabItem {
  flex: 1;
  text-align: center;
  img {
    width: 54px;
    height: 54px;
  }
  .tabTxt {
    font-size: 12px;
  }
}

.van-swipe__indicators .van-swipe__indicator--active {
  width: 12px;
  border-radius: 100px;
}
.van-swipe .van-swipe-item {
  text-align: center;
}
.van-swipe .van-swipe-item img {
  width: 96%;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
.search {
  padding: 10px;
  display: flex;
  align-items: center;
}
.searchBtn {
  flex: 1;
  background: #f5f5f5;
  border-radius: 100px;
  width: 80%;
  padding: 5px 15px;
  margin-right: 5px;
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

.sicon {
  vertical-align: middle;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background: #ffffff;
}
.content {
  padding: 50px 0;
}
</style>
