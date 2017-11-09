<template>
  <div class="demo-model">
    <h1>简单实例</h1>
    <div class="demo-warp">
      <h2>登录</h2>
      <div>
        <mu-text-field title="用户名" label="用户名" v-model="username" hintText="请输入用户名" type="text" labelFloat/>
      </div>
      <div>
        <mu-text-field title="密码" label="密码" v-model="password" hintText="请输入密码" type="password" labelFloat/>
      </div>
      <div>
        <mu-raised-button label="登录" class="demo-raised-button" @click='axios' primary/>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    axios () {
      let that = this;
      this.$axios.post('http://localhost:3000/login.json',{
        username: that.username,
        password: that.password
      }).then(function (res) {
        console.log(res.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
h1 {
  text-align: center;
  font-size: 24px;
  height: 60px;
  line-height: 60px; 
  border-bottom: 1px solid #eee;
  margin: 0 20px; 
}
.demo-warp {
  margin: 0 20px; 
}
.demo-input {
  height: 36px;
  line-height: 36px;
  border: 1px solid #ccc;
  padding: 0 10px;
  outline: none;
  color: #666;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
