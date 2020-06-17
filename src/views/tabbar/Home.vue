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
            <img src="../../assets/tab/t1.png" alt />
            <div class="tabTxt">商品</div>
          </div>
          <div class="tabItem">
            <img src="../../assets/tab/t1.png" alt />
            <div class="tabTxt">商品</div>
          </div>
          <div class="tabItem">
            <img src="../../assets/tab/t1.png" alt />
            <div class="tabTxt">商品</div>
          </div>
          <div class="tabItem">
            <img src="../../assets/tab/t1.png" alt />
            <div class="tabTxt">商品</div>
          </div>
          <div class="tabItem">
            <img src="../../assets/tab/t1.png" alt />
            <div class="tabTxt">商品</div>
          </div>
        </div>

        <van-notice-bar
          :scrollable="true"
          color="#1989fa"
          background="#ecf9ff"
          left-icon="volume-o"
        >通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容</van-notice-bar>

        <div class="shopList">
          <div class="shopListTitle">
            <img src="../../assets/home/tjpic.png" alt />
          </div>
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="shopItem" v-for="(list , index) in shopList" :key="index">
              <router-link class="shopLink" :to="{name:'shopDetail',params:{shopid:list.goods_id}}">
                <img :src="list.img" alt />
                <div class="shopCon">
                  <div class="shopTitle">{{list.name}}</div>
                  <div class="shopTag">
                    <span>满99减50</span>
                  </div>
                  <div class="shopPrice">
                    ￥
                    <span>{{list.price}}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </van-list>
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { getShopList,getCartList } from '@/assets/api/api';
export default {
  name: "Home",
  data() {
    return {
      count: 0,
      isLoading: false,
      shopList: [],
      loading: false,
      finished: false,
      refreshing: false,
      page:1
    };
  },
  created(){
    this._getShopList();
    this._getCartList();
  },
  methods: {
    _getShopList(){
      getShopList({page:this.page,num:6,word :'',sort :'',cid :''}).then(res=>{
        this.shopList= res.data;
      })
    },
    _getCartList() {
      getCartList({
        uid:5
      }).then(res => {
        this.$store.commit("SetCarTotal",res.data.num)
      });
    },
    onRefresh() {
      setTimeout(() => {
        this.$Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.shopList = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 4; i++) {
          this.shopList.push(this.shopList[1]);
        }
        this.loading = false;

        if (this.shopList.length >= 20) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>
<style lang="scss" scoped>
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
}
.searchBtn {
  flex: 1;
  background: #ffffff;
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
