<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      placeholder
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
import QS from "qs";
import { ApiAccess } from "@/assets/api/interceptor";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      const params = {username:this.username,password:this.password};
      axios.post(ApiAccess + "login", QS.stringify(params)).then(res => {
         this.$store.commit("SetUserId",res.data.id)
         this.$store.commit("SetLoginSuccess",true)
         Toast.success('登录成功,3秒后跳转...');
          setTimeout(() => {
            this.$router.push({
                name:'Personal'
            })
          }, 2000);
           console.log(res)
      }).catch(err=>{
        console.log(err.data)
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>