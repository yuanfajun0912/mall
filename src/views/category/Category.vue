<template>
  <div id="category">
    <nav-bar class="category-nav"><template v-slot:center>商品分类</template></nav-bar>
    <!-- 左侧选择区     -->
    <category-menu class="category-menu" :menuList="menuList"></category-menu>
    <!-- 右侧内容区 -->
    <category-content :menuList="menuList"></category-content>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CategoryMenu from './childCpn/CategoryMenu'
import CategoryContent from './childCpn/CategoryContent'

import {getCategory} from 'network/category.js'

export default {
  name: 'Category',
  components: {
    NavBar,
    CategoryMenu,
    CategoryContent 
  },
  data() {
    return {
      // CategoryMenu的标题
      menuList: [],
    }
  },
  methods: {
    getCategory_methods() {
      getCategory().then(res => {
        this.menuList = res.data.category.list
      })
    }
  },
  created() {
    this.getCategory_methods()
  },
}
</script>

<style scoped>
  #category {
    padding-top: 44px;
    display: flex;
  }

  .category-nav {
    background-color: var(--color-tint);
    color: white;
    /* 让catefory-nav一直在页面顶部 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 5;
  }
</style>