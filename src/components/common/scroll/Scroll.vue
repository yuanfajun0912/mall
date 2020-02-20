<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  //组件被创建之后
  mounted() {
    //创建BScroll对象
     this.scroll = new BScroll(this.$refs.wrapper,{
       click: true,  //使better-scroll内部的元素还是可被点击的
       probeType: this.probeType,  //probeType为3时才监听滚动事件
       pullUpLoad: this.pullUpLoad   //为true时才能进行上拉加载事件
     })
     //监听滚动事件并获得position
     this.scroll.on('scroll',position => {
       this.$emit('getPosition', position);
     })
     //监听上拉加载事件
     this.scroll.on('pullingUp',() => {
       this.$emit('pullUpLoad')
     })
  },
  methods: {
    //返回0，0处，时间为1s
    scrollTo(x, y, time=1000) {
      this.scroll.scrollTo(x, y, time); 
    },
    refresh() {
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>
</style>