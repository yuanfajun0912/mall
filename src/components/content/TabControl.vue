<template>
  <div id="tabcontrol">
    <!-- 实现动态控制被点击的item的样式   -->
    <div id="tabcontrol-item" 
      v-for="(item,index) in text" :key="item.index"
      :class="{active:index === activeIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.activeIndex = index;
      //利用tabClick事件将index传给父组件
      this.$emit('tabClick',index);
    }
  },
  props: {
    text: Array
  }
}
</script>

<style>
  #tabcontrol {
    display: flex;
    padding: 5px;
    /* 暂实现吸顶作用 */
    /* position: sticky;
    top: 44px;
    background-color: white;
    z-index: 3; */
  }
  #tabcontrol-item {
    flex: 1;
    text-align: center;
    font-size: 15px;
    
  }
  #tabcontrol-item span {
    padding: 5px;
  }
  /* 实现动态控制被点击的item的样式 */
  .active span{
    border-bottom: 2px solid var(--color-high-text);
    color: var(--color-high-text);
  }
</style>