
<!--  -->
<template>
  <div class="container">
    <van-nav-bar title="个人中心" :placeholder="true" />
    <div class="meTop">
      <div v-if="loginState" class="metopbox">
        <img src="../../assets/home/s1.jpg" alt />
        <div class="meTopCon">
          <div class="name">违规用户7884897446</div>
          <div class="tag">
            <van-tag type="warning" color="#ff976a" round>标签</van-tag>
          </div>
        </div>
        <router-link :to="{name:'setting'}">
          <van-icon name="arrow" size="30" color="#ffffff" />
        </router-link>
      </div>

      <router-link :to="{name:'login'}" v-if="!loginState">请登录</router-link>
    </div>
    <div class="order">
      <van-grid :clickable="true">
        <van-grid-item icon="paid" badge="18" text="待付款" />
        <van-grid-item icon="logistics" badge="186" text="待收货" />
        <van-grid-item icon="comment-o" badge="0" text="待评价" />
        <van-grid-item icon="refund-o" badge="0" text="售后" />
      </van-grid>
    </div>

    <div class="look">
      <van-grid :clickable="true" :column-num="3">
        <van-grid-item icon="paid" badge="998" text="收藏夹" />
        <van-grid-item icon="paid" badge="168" text="足迹" />
        <van-grid-item icon="paid" badge="18" text="红包卡券" />
        <van-grid-item icon="paid" text="待付款" />
        <van-grid-item icon="paid" text="待付款" />
        <van-grid-item icon="paid" text="待付款" />
        <van-grid-item icon="paid" text="待付款" />
        <van-grid-item icon="paid" text="待付款" />
        <van-grid-item icon="paid" text="待付款" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  components: {},

  methods: {
    out() {
      this.$router.push({
        path: "/user/login",
        query: {
          act: "logout"
        }
      });
    }
  },
  computed: {
    value() {
      return this.$store.state.userId;
    },
    loginState() {
      return this.$store.state.loginSuccess;
    }
  }
};
</script>
<style lang='scss' scoped>
.look {
  margin: 10px 0;
}
.meTop {
  background: linear-gradient(to right, rgb(75, 176, 255), rgb(97, 73, 246));
  padding: 15px 10px;

  .metopbox {
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .meTopCon {
    flex: 1;
    margin: 0 8px;
    .name {
      font-size: 14px;
      margin-bottom: 4px;
      color: #ffffff;
    }
  }
}
</style>