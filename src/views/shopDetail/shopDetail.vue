<template>
  <div class="container">
    <div class="topbar" style="height:46px;">
      <div class="topbarView">
        <van-icon name="arrow-left" @click="onClickLeft" />
        <div v-for="(item,index) in topbarItem" :key="index" :class="activeFun(item)">{{item.name}}</div>
      </div>
    </div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.img" class="swipePic" />
      </van-swipe-item>
    </van-swipe>

    <div class="shopView" ref="shopView">
      <div class="detailCon">
        <div class="shopTitle">{{shopName}}</div>
        <div class="shopPriceBox">
          <div>
            ￥
            <span class="price">{{shopPrice}}</span>
          </div>
          <div></div>
        </div>
      </div>
      <div class="shopSelect">
        <van-cell title="优惠券" is-link />
        <van-cell title="规格" is-link @click="show=true" />
      </div>
    </div>

    <div class="shopCon" ref="shopCon">
      <img src="//s3.mogucdn.com/mlcdn/c45406/180811_47jbl66876b75385bb6f47ffdbe96_751x819.jpg" alt />
      <img src="//s3.mogucdn.com/mlcdn/c45406/180811_47jbl66876b75385bb6f47ffdbe96_751x819.jpg" alt />
      <img src="//s3.mogucdn.com/mlcdn/c45406/180811_47jbl66876b75385bb6f47ffdbe96_751x819.jpg" alt />
      <img src="//s3.mogucdn.com/mlcdn/c45406/180811_47jbl66876b75385bb6f47ffdbe96_751x819.jpg" alt />
      <img src="//s3.mogucdn.com/mlcdn/c45406/180811_47jbl66876b75385bb6f47ffdbe96_751x819.jpg" alt />
    </div>
    <div class="shopCom" style="height:200px;background:#ffffff;" ref="shopCom">评论</div>
    <div class="shopTj" style="height:200px;background:#ffffff;" ref="shopTj">推荐</div>

    <van-goods-action safe-area-inset-bottom>
      <van-goods-action-icon :icon="flag?'star':'star-o'" text="收藏" @click="_addFav" />
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
import {
  getShopMsg,
  addCart,
  getCartList,
  addfav,
  getFavList,
} from "@/assets/api/api";
export default {
  data() {
    return {
      images: [],
      shopid: 0,
      show: false,
      shopName: "",
      shopPrice: 0,
      gid: "",
      topbarItem: [
        { id: 1, name: "主图" },
        { id: 2, name: "详情" },
        { id: 3, name: "评价" },
        { id: 4, name: "推荐" }
      ],
      current: 1,
      number: 0,
      view: 0,
      detail: 0,
      pl: 0,
      tj: 0,
      flag: false
    };
  },
  created() {
    this.shopid = this.$route.params.shopid;
    this._getShopMsg(this.shopid);
    this._getFavList();
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.topTab);
      this.view = this.$refs.shopView.getBoundingClientRect().top;
      this.detail = this.$refs.shopCon.getBoundingClientRect().top;
      this.pl = this.$refs.shopCom.getBoundingClientRect().top;
      this.tj = this.$refs.shopTj.getBoundingClientRect().top;
    });
  },

  methods: {
    _addFav() {
      this.flag = !this.flag;
      if (this.flag) {
        addfav({
          uid: this.value,
          goods_id: this.gid,
          act_type: "addfav"
        }).then(res => {
          Toast.success("成功加入收藏夹");
        });
      } else {
        addfav({
          uid: this.value,
          goods_id: this.gid,
          act_type: "del_fav"
        }).then(res => {
          Toast.success("已取消加入收藏夹");
        });
      }
    },
    _getFavList() {
      getFavList({
        uid: this.value
      }).then(res => {
        for (let index = 0; index < res.data.length; index++) {
          if (res.data[index].goods_id == this.$route.params.shopid) {
            this.flag = true;
          }
        }
      });
    },
    activeFun(item) {
      if (item.id == this.current) {
        return "active";
      }
    },
    topTab() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop - this.number < 0) {
      } else {
        if (scrollTop > this.view) {
          this.current = 1;
        }
        if (scrollTop > this.detail) {
          this.current = 2;
        }
        if (scrollTop > this.pl) {
          this.current = 3;
        }
        if (scrollTop > this.tj) {
          this.current = 4;
        }
      }
    },
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
  },

  destroyed() {
    window.removeEventListener("scroll", this.topTab);
  }
};
</script>

<style lang="scss" scoped>
.swipePic {
  width: 100%;
  height: 100%;
}
.shopCon img {
  width: 100%;
  height: 100%;
}
.topbarView {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  height: 46px;
  line-height: 46px;
  padding: 0 30px;
  z-index: 99;
  & > div {
    font-size: 16px;
  }
  & > div.active {
    color: red;
    border-bottom: 1px solid red;
  }
}

.content {
  padding: 16px 16px 160px;
}
.shopSelect {
  margin: 10px 0;
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