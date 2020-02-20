<template>
  <div id="">
    <nav-bar>
      <div slot="left" class="left" @click="backHome">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item, index) in titles" 
             :key="index"
             class="center-item"
             :class="{active: index === activeIndex}"
             @click="itemClick(index)"
             >{{item}}    
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  props: {

  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      activeIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.activeIndex = index
      this.$emit('navItemClick', index)
    },
    backHome() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .left img {
    margin-top: 12px;
  }

  .center {
    display: flex;
    font-size: 14px;
  }
  .center-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text)
  }
</style>