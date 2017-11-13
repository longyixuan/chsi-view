<template>
  <div class="login-warp">
    <h2>登录</h2>
    <div class="login-content">
      <div class="login-content-item">
        <mu-text-field title="用户名" label="用户名" v-model="username" hintText="请输入用户名" type="text" labelFloat/>
      </div>
      <div>
        <mu-text-field title="密码" label="密码" v-model="password" hintText="请输入密码" type="password" labelFloat/>
      </div>
      <div class="button-warp">
        <mu-raised-button label="登录" class="demo-raised-button" @click='login' primary/>
        <mu-raised-button label="注册" class="demo-raised-button" @click='register' primary/>
      </div>
    </div>
  </div>
</template>
<script>
  import * as types from './store/types'
  export default {
    name: 'Login',
    data() {
      return {
        message: '',
        token: '',
        username: '',
        password: ''
      }
    },
    mounted(){
      this.$store.commit(types.TITLE, 'Login');
    },
    methods: {
      login() {
        if(this.token) {
          let redirect = decodeURIComponent(this.$route.query.redirect || '/'); //转码地址
          this.$router.push({
            path: redirect
          })
        } else {
          let postobj = {
            username: this.username,
            password: this.password
          };
          let that = this;
          this.$axios.post('http://localhost:3000/login', postobj).then(function(res){
             if(res.data.success) {
              let redirect = decodeURIComponent(that.$route.query.redirect || '/'); //转码地址
              that.$store.commit(types.LOGIN, res.data);
              that.$router.push({path: redirect})
             } else {
               alert('请输入正确的用户名和密码！！！');
             } 
          });
        }
      },
      register() {
         this.$router.push({ name: 'Register' });
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