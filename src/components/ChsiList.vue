<template>
	<div class="demo-model">
	    <h1>组件实例</h1>
        <list :inputdata='[{"ksname":"美术学类","mfz":1304},{"ksname":"美术学","mfz":130401},{"ksname":"绘画","mfz":130402},{"ksname":"雕塑","mfz":130403},{"ksname":"摄影","mfz":130404}]' list-item-name1="名称" list-item-name2="分值">
        	<div class="demo-warp">
        		<h2>源代码</h2>
        		<pre>&lt;list :inputdata='[{"ksname":"美术学类","mfz":1304},{"ksname":"美术学","mfz":130401},{"ksname":"绘画","mfz":130402},{"ksname":"雕塑","mfz":130403},{"ksname":"摄影","mfz":130404}]' list-item-name1="名称" list-item-name2="分值"&gt;&lt;/list&gt;</pre>
        	</div>
        </list>
	</div>
  </div>
</template>
<script>
import List from '@/components/ch-list'
export default {
  name: 'ChsiList',
  components: { List }
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
