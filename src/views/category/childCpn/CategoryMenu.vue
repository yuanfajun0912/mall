<template>
  <div id="category-menu">
    <scroll class="wrapper">
      <!-- @click那里一定要把参数传完整 -->
      <div v-for="(item, index) in this.menuList"
           :key="index"
           class="item"
           :class="{click: index === activeIndex}"
           @click="itemClick(item, index)">{{item.title}}
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
  name: 'CategoryMenu',
  components: {
    Scroll
  },
  props: {
    menuList: Array
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    itemClick(item, index) {
      // 使用事件总线将maitKey传出
      this.$bus.$emit('getMaitKey', item.maitKey)
      // 使用事件总线将miniWallkey传出
      this.$bus.$emit('getMiniWallKey', item.miniWallkey)
      this.activeIndex = index
    }
  }
}
</script>

<style scoped>
  /* 先确定整体的高度 */
  #category-menu {
    width: 31%;
    height: calc(100vh - 44px - 49px);
    font-size: 10px;
  }
  /* 再确定里面的scroll的高度 */
  .wrapper {
    height: 100%;
    overflow: hidden;
  }
  .item {
    font-size: 1.5em;
    padding: 0.75em 0.85em 0.75em 0.85em;
    text-align: center;
    background-color: rgb(238, 237, 237);
  }
  /* 被点击的样式 */
  .item.click {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
</style>