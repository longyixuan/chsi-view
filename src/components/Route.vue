<template>
	<div class="demo-model">
	    <h1>路由实例</h1>
      <div class="demo-warp">{{ $route.path}}</div>
	</div>
  </div>
</template>
<script>
export default {
  name: 'Route'
}
</script>
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
  pre {
    font-size: 14px;
    line-height: 24px;
  }
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
