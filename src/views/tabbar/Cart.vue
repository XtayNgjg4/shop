<!--  -->
<template>
  <div class="container">
    <van-nav-bar
      :title="'购物车'+'( '+shopTotal+' )'"
      :fixed="true"
      :placeholder="true"
      right-text="管理"
      @click-right="onClickRight"
      :loading="true"
    />

    <div class="cartList">
      <div class="cartItem" v-for="(item,index) in cartList" :key="index">
        <input
          type="checkbox"
          name
          id
          true-value="1"
          false-value="0"
          v-model="item.status"
          @click="change(item,$event)"
        />
        <img :src="item.thumb" alt />
        <div class="cartCon">
          <div class="cartTitle">{{item.name}}</div>
          <!-- <div class="cartSelect">
            已选xxx
            <van-icon name="arrow-down" />
          </div>-->
          <div class="cartPrice clearfix">
            <div class="fl">
              <van-stepper v-model="item.num" @plus="plus(item)" @minus="minus(item)" />
            </div>
            <div class="submitTxt fr">
              ￥
              <span class="price">{{item.price}}</span>.00
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="submit-bar">
      <van-checkbox v-model="allChecked" @click="all">全选</van-checkbox>
      <div class="submitTxt" v-show="!ctrl">
        <span>合计：</span>￥
        <span class="price">{{totalPrice}}</span>.00
      </div>
      <button v-show="!ctrl" class="submitBtn" @submit="onSubmit">去结算（{{selectedTotal}}）</button>
      <div class="ctrlBtn" v-show="ctrl">
        <button class="move">移入收藏夹</button>
        <button class="delect" @click="remove">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getCartList,
  removeGoods,
  setCartStatus,
  addCart
} from "@/assets/api/api";
import { Toast } from "vant";
export default {
  data() {
    return {
      totalPrice: 0,
      shopTotal: 0,
      selectedTotal: 0,
      checked: false,
      allChecked: false,
      ctrl: false,
      shopNum: 1,
      cartList: [],
      rmId: []
    };
  },

  components: {},
  created() {
    this._getCartList();
  },
  methods: {
    change(item, e) {
      if (item.status == 1) {
        setCartStatus({
          uid: 5,
          goods_id: item.goods_id,
          status: 0
        });
      } else {
        setCartStatus({
          uid: 5,
          goods_id: item.goods_id,
          status: 1
        });
      }
      this._getCartList();
      // console.log(event.currentTarget);
      // console.log(item.status);
      // console.log(item.goods_id);
    },
    all() {
      this.allChecked = !this.allChecked;
      let allId = "";
      this.cartList.forEach(item => {
        allId = allId + `@${item.goods_id}`;
      });

      if (this.allChecked) {
        setCartStatus({
          uid: 5,
          goods_id: allId,
          status: 1
        }).then(res => {
          this._getCartList();
        });
      } else {
        setCartStatus({
          uid: 5,
          goods_id: allId,
          status: 0
        }).then(res => {
          this._getCartList();
        });
      }
    },
    remove() {
      let allId = "";
      this.cartList.forEach(item => {
        if (item.status == 1) {
          allId = allId + `@${item.goods_id}`;
        }
      });
      removeGoods({
        uid: 5,
        goods_id: allId,
        spec: ""
      }).then(res => {
        console.log(res);
        this._getCartList();
      });
    },
    _getCartList() {
      getCartList({
        uid: 5
      }).then(res => {
        this.totalPrice = 0;
        this.selectedTotal = 0;
        this.cartList = res.data.goods;
        this.shopTotal = res.data.num;
        let cartStatus = [];
        this.cartList.forEach(item => {
          if (item.status == 1) {
            cartStatus.push(item.status);
            this.selectedTotal = this.selectedTotal + parseInt(item.num);
            this.totalPrice = this.totalPrice + parseInt(item.amount);
          }
        });
        if (cartStatus.length == this.cartList.length) {
          this.allChecked = true;
        } else {
          this.allChecked = false;
        }
        console.log(res);
      });
    },
    plus(item) {
      
      let num=1;
      if (item.status == 1) {
        addCart({
          uid: 5,
          goods_id: item.goods_id,
          num: num++
        }).then(res => {
          console.log(res);
           this._getCartList();
        });
      }
    },
    minus(item) {
     
    },
    onClickRight() {
      this.ctrl = !this.ctrl;
    },
    onSubmit() {
      console.log("去结算");
    }
  }
};
</script>
<style lang='scss' scoped>
.cartList {
  padding-bottom: 100px;
}
.cartSelect {
  font-size: 12px;
  background: #f7f7f7;
  margin: 8px 0;
  width: 60px;
}
.cartItem {
  display: flex;
  background: #ffffff;
  padding: 8px;
  img {
    width: 100px;
    height: 100px;
    margin: 0 6px;
  }
  .cartCon {
    flex: 1;
    .cartTitle {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 13px;
    }
  }
}
.ctrlBtn {
  flex: 1;
  text-align: right;
  button {
    border: 1px solid #07c160;
    background-color: transparent;
    color: #000000;
    padding: 0 15px;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-left: 10px;
    border-radius: 100px;
    &:first-child {
      border: 1px solid #ff8b27;
      color: #ff8b27;
    }
    &:last-child {
      border: 1px solid #f2270c;
      color: #f2270c;
    }
  }
}
.submitBtn::before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: #000;
  border: inherit;
  border-color: #000;
  border-radius: inherit;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  content: " ";
}
.submitBtn {
  position: relative;
  background: -webkit-linear-gradient(left, #ff6034, #ee0a24);
  background: linear-gradient(to right, #ff6034, #ee0a24);
  width: 110px;
  height: 40px;
  font-weight: 500;
  line-height: 40px;
  border: none;
  border-radius: 999px;
  padding: 0 10px;
  font-size: 14px;
  color: #fff;
}
.submitTxt {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding-right: 12px;
  text-align: right;
  font-size: 12px;
  color: #ee0a24;
  span {
    color: #323233;
    font-size: 14px;
  }
  .price {
    color: #ee0a24;
    font-size: 20px;
    font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;
  }
}
.submit-bar {
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 50px;
  padding: 0 16px;
  font-size: 14px;
  background: #ffffff;
}
</style>