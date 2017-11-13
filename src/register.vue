<template>
  <div class="login-warp">
    <h2>注册</h2>
    <div class="login-content">
      <div class="login-content-item">
        <mu-text-field title="请用户名" label="用户名" v-model="username" hintText="请输入用户名" type="text" labelFloat/>
      </div>
      <div>
        <mu-text-field title="密码" label="密码" v-model="password" hintText="请输入密码" type="password" labelFloat/>
      </div>
      <div>
        <mu-text-field title="密码" label="密码" v-model="password2" hintText="请再次输入密码" type="password" labelFloat/>
      </div>
      <div class="button-warp">
        <mu-raised-button label="注册" class="demo-raised-button" @click='register' primary/>
        <mu-raised-button label="返回" class="demo-raised-button" @click='back'/>
      </div>
    </div>
  </div>
</template>
<script>
  import * as types from './store/types';
  export default {
    name: 'register',
    data() {
      return {
        message: '',
        token: '',
        username: '',
        password: '',
        password2: ''
      }
    },
    methods: {
      register () {
          let postobj = {
            username: this.username,
            password: this.password
          };
          this.$axios.post('http://localhost:3000/register', postobj).then(function(res){
            console.log(res.data)
          });
      },
      back () {

      }
    }
  }
</script>
<style scoped lang="less">
  .login-warp {
    width: 260px;
    margin: 0 auto;
    padding: 20px 0;
  }
  h2 {
    margin: 0;
    text-align: center;
  }
  .button-warp {
    .demo-raised-button {
      margin-left: 24px;
    }
  }
</style>