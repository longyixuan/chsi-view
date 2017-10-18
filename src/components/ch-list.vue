<template>
    <div class="list">
        <slot text="hello from child"></slot>
        <div class="demo-warp">
        <h2>组件效果</h2>
        <ul class="kskm-list" :data-class='[typeClass]'>
            <li v-for="(item,index) in checkList">
                <span class="layui-inline">
                    <label class="layui-form-label">{{ListItemName1}}：</label>
                    <input type="text" class="demo-input" name="ksname" :value="item.ksname" />
                </span>
                <span class="layui-inline">
                    <label class="layui-form-label">{{ListItemName2}}：</label>
                    <input  type="text" class="demo-input" name="mfz" :value="item.mfz" />
                </span>
                <span class="layui-inline">
                     <input type="button" class="demo-input demo-input-btn" value="删除" @click="removeListItem(item,index)" />
                </span>
            </li>
            <li>
                <span class="layui-inline">
                    <label class="layui-form-label">{{ListItemName1}}：</label>
                    <input type="text" class="demo-input" name="ksname" v-model="checkListItem.ksname" />
                </span>
                <span class="layui-inline">
                    <label class="layui-form-label">{{ListItemName2}}：</label>
                    <input type="text" class="demo-input" name="mfz" v-model="checkListItem.mfz" />
                </span>
                <span class="layui-inline">
                	<input type="button" value="添加" @click="addListItem" class="demo-input demo-input-btn">
                </span>
            </li>
          </ul>
          </div>
      </div>
</template>
<script>
    export default{
        name: 'List',
        data () {
            return {
                checkList: [],
                checkListItem: {}
            }
        },
        props: ['inputdata','ListItemName1','ListItemName2'],
        methods: {
            removeListItem: function(item,index) {
                this.checkList.splice(index, 1);
            },
            addListItem: function(){
                this.checkList.push(this.checkListItem);
                this.checkListItem = {};
            }
        },
        created: function() {
            this.checkList = this.inputdata;
        },
        computed: {
            typeClass() {
            return `el-alert-${this.ListItemName1}`;
        }
         }
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
}
.demo-input {
  height: 36px;
  line-height: 36px;
  border: 1px solid #ccc;
  padding: 0 10px;
  outline: none;
  color: #666;
}
.demo-input-btn {
	box-sizing: border-box;
	color: #fff;
	background: #7e57c2;
	border: transparent;
	border-radius: 2px;
	&:hover {
		background: darken(#7e57c2, 5%);
		cursor: pointer;
	} 
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px;
  list-style: none;
}

a {
  color: #42b983;
}
</style>
