<template>
	<div class="demo-model">
	    <h1>拖拽实例</h1>
      <div class="demo-warp">
        <ch-drag :list='list'></ch-drag>
      </div>
	</div>
  </div>
</template>
<script>
import chDrag from '@/components/ch-drag'
export default {
  name: 'Route',
  components: { chDrag },
  data () {
    return {
      list: [
        {
          "name": "例子1",
          "order": 1,
          "fixed": true,
          "html": "<a href='###'>修改</a><a href='###'>新增</a><a href='###'>删除</a>"
        },
        {
          "name": "例子2",
          "order": 2,
          "fixed": false,
          "html": "<a href='###'>修改</a>"
        },
        {
          "name": "例子3",
          "order": 3,
          "fixed": false,
          "html": "<a href='###'>修改</a>"
        },
        {
          "name": "例子4",
          "order": 4,
          "fixed": false,
          "html": "<a href='###'>修改</a>"
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.drag-target {
  height: 40px;
  line-height: 40px;
  border: 1px dashed #ddd;
  margin-top: -1px;
  &:hover {
    cursor: move;
  }
}
h1, h2 {
  font-weight: normal;
}
h1 {
  text-align: center;
  font-size: 24px;
  height: 60px;
  line-height: 60px; 
  border-bottom: 1px solid #ddd;
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
