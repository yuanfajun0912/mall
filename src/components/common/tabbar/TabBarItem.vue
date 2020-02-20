<template>
  <div id="tab-bar-item" @click="itemClick">
    <!-- 给插槽加属性，有些属性可能不会正常显示，所以套个div，属性加在div上 -->
    <!-- v-if一定要放在v-else前面 -->
    <div v-if="isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
      // isActive: true
    }
  },
  //接收传进组件的数据
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      //默认值
      default: 'rgb(253, 120, 142)'
    }
  },
  methods: {
    itemClick() {
      //被点击的路由不是出于活跃状态的路由，就完成操作
      if(this.$route.path !== this.path) {
        this.$router.replace(this.path)
      }
    }  
  },
  computed: {
      isActive() {
        return this.$route.path !== this.path
      },
      activeStyle() {
        return this.isActive ? {} : {color: this.activeColor}
      }
    }
}
</script>

<style>
  #tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 10px;
  }
  #tab-bar-item img {
    margin-top: 3px;
    width: 25px;
    height: 25px;
  }
</style>