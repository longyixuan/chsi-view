<template>
  <div class="demo-model">
    <h1>简单实例</h1>
    <div class="demo-warp">
      <h2>双向绑定</h2>
      <input v-model="message" class="demo-input">
      <p>{{ message }}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: '这是一个双向数据绑定实例'
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
