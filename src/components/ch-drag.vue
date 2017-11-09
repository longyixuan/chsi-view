<template>
  <div class="ch-drag">
  <draggable :list="list" @start="dragging=true" @end="dragging=false" @update="datadragEnd">
      <transition-group>
        <div v-for="element in list" :key="element.name" v-html="element.name+element.html" class="drag-target"></div>
      </transition-group>
  </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  data () {
    return {
      listData: {}
    }
  },
  props: ['list'],
  methods: {
    datadragEnd:function(evt){
        console.log('拖动前的索引：'+evt.oldIndex);
        console.log('拖动后的索引：'+evt.newIndex);
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
