<template>
  <div class="container">
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      placeholder
    />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.img" />
      </van-swipe-item>
    </van-swipe>

    <div class="shopView">
      <div class="detailCon">
        <div class="shopTitle">{{shopName}}</div>
        <div class="shopPriceBox">
          <div>
            ￥
            <span class="price">{{shopPrice}}</span>
          </div>
          <div>{{value}}</div>
        </div>
      </div>
      <div class="shopSelect">
        <van-cell title="优惠券" is-link />
        <van-cell title="规格" is-link @click="show=true" />
      </div>
    </div>

    <van-goods-action safe-area-inset-bottom>
      <van-goods-action-icon icon="chat-o" text="收藏" />
      <van-goods-action-icon icon="shop-o" text="购物车" />
      <van-goods-action-button color="#7232dd" type="warning" text="加入购物车" @click="_addCart" />
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
    </van-goods-action>

    <van-action-sheet v-model="show" title=" ">
      <div class="content"></div>
    </van-action-sheet>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getShopMsg, addCart,getCartList } from "@/assets/api/api";
export default {
  data() {
    return {
      images: [],
      shopid: 0,
      show: false,
      shopName: "",
      shopPrice: 0,
      gid: ""
    };
  },
  mounted() {
    this.shopid = this.$route.params.shopid;
    this._getShopMsg(this.shopid);
  },
  methods: {
    _getShopMsg(id) {
      getShopMsg({
        goods_id: id,
        uid: "",
        is_goods_attr: 1,
        is_goods_spec: 1,
        is_service: 1,
        is_details: 1,
        is_specs: 1,
        is_imgs: 1,
        is_team: 0
      }).then(res => {
        console.log(res);
        this.images = res.data.imgs;
        this.shopName = res.data.name;
        this.shopPrice = res.data.price;
        this.gid = res.data.goods_id;
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    _addCart() {
      addCart({
        goods_id: this.gid,
        num: 1,
        uid: 5,
        cart_id: 5,
        total: "",
        spec: "",
        total: "",
        direct: 0
      }).then(res => {
        Toast.success("加入购物车成功");
        getCartList({
          uid: 5
        }).then(res => {
          this.$store.commit("SetCarTotal", res.data.num);
        });
        console.log(res);
      });
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
.content {
  padding: 16px 16px 160px;
}
.shopView {
  padding-bottom: 60px;
}
.detailCon {
  padding: 15px;
  background: #ffffff;
  margin-bottom: 10px;
}
.shopTitle {
  font-size: 14px;
}
</style>