<template>
  <div class="layout" id="app">
    <div class="header">
      <div class="logo">
        Chsi-View
      </div>
      <div class="nav">
        <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
          <mu-tab value="tab1" title="语法样例"/>
          <mu-tab value="tab2" title="组件实例"/>
          <mu-tab value="tab3" title="路由实例"/>
        </mu-tabs>
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
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val;
      if(val==="tab1"){
        this.$router.push('/');
      }
      if(val==="tab2"){
        this.$router.push({ name: 'ChsiView' });
      }
      if(val==="tab3"){
        this.$router.push({ name: 'Route' });
      }
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