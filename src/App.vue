<template>
  <div class="layout" id="app">
    <div class="header">
      <div class="logo">
        Chsi-View
      </div>
      <div class="nav">
        <ul>
          <li><router-link to="/">语法样例</router-link></li>
          <li><router-link to="/chsi-view/">组件样式</router-link></li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="body">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      Chsi-View ©2017 Created by yinxl
    </div>

  </div>
</template>
<script>
export default {
  name: "app",
  data () {
    return {
      
    }
  }
}
</script>
<style scoped lang="less">
.layout{
  background-color: rgb(236, 236, 236);
}

.header{
  background-color: #7e57c2;
  height: 48px;
}

.logo{
  font-size: 24px;
  height: 48px;
  line-height: 48px;
  color: white;
  display: inline-block;
  padding: 0 20px;
}

.nav{
  display: inline-block;
  float: right;
  margin-right: 20px;
  ul {
    margin: 0;
  }
  li {
    list-style: none;
    float: left;
    a {
      display: block;
      height: 48px;
      line-height: 48px;
      padding: 0 20px;
      color: #fff;
      &.router-link-exact-active {
        background: darken(#7e57c2, 5%)
      }
    }
  }
}

.tab{
  margin: 0 auto;
  width: 300px;
  background-color: rgba(0, 0, 0, 0);
}

.content{
  width: 98%;
  margin: 20px auto 0;
}

.breadcrumb{
  margin: 10px 0;
}

.body{
  background-color: white;
  border-radius: 5px;
  min-height: 500px;
  padding-bottom: 20px;
}

.footer{
  padding: 20px 0;
  text-align: center;
}
</style>