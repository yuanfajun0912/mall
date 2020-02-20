<template>
  <div id="category-content">
    <scroll class="wrapper" ref="scroll" :probeType="3" @getPosition="getPosition">
      <!-- 顶部链接区 -->
      <cg-content-top></cg-content-top>
      <!-- 中部控制区 -->
      <tab-control :text="['综合','新品','销量']" @tabClick="itemClick"></tab-control>
      <!-- 底部商品详情区 -->
      <cg-content-detail :goods="goods[showType].list"></cg-content-detail>
    </scroll>
    <!-- 回到顶部 -->
    <back-top v-show="isShow" @click.native="backTop"></back-top>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/TabControl'

import CgContentTop from './CgContentTop'
import CgContentDetail from './CgContentDetail'

import {getCategoryDetail} from 'network/category'
import BackTop from 'components/common/backtop/BackTop'

export default {
  name: 'CategoryContent',
  components: {
    CgContentTop,
    Scroll,
    TabControl,
    CgContentDetail,
    BackTop
  },
  props: {
    
  },
  data() {
    return {
      //对CgContentDetail中的商品数据初始化
      goods: {
        'pop': {list: []},
        'new': {list: []},
        'sell': {list: []}
      },
      showType: 'pop',
      //backtop按钮的显示与否
      isShow: false
    }
  },
  methods: {
    // 根据传出的index确定showType
    itemClick(index) {      
      switch(index) {
        case 0:
          this.showType = 'pop'
          break;
        case 1:
          this.showType = 'new'
          break;
        case 2:
          this.showType = 'sell'
          break;
      }
    },

    getCategoryDetail_methods(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then(res => {
        //做个判断，防止持续添加,...结构语法
        if(this.goods[type].list.length === 0) {
          this.goods[type].list.push(...res)
        }else {
          this.goods[type].list = [],
          this.goods[type].list.push(...res)
        }
      })
    },
    //控制backtop按钮的显示
    getPosition(position) {
      if(-position.y > 1000) {
        this.isShow = true
      }else {
        this.isShow = false
      }
    },
    // 点击回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  },
  created() {
    // 将menu中第一个item对应的数据存进去，保证点击分类页就有商品显示
    this.getCategoryDetail_methods(10062603, 'pop')
    this.getCategoryDetail_methods(10062603, 'new')
    this.getCategoryDetail_methods(10062603, 'sell')

    this.$bus.$on('getMiniWallKey',(miniWallKey) => {
      //将三类商品的数据都请求下来
      this.getCategoryDetail_methods(miniWallKey, 'pop')
      this.getCategoryDetail_methods(miniWallKey, 'new')
      this.getCategoryDetail_methods(miniWallKey, 'sell')
    })
  }
}
</script>

<style scoped>
  #category-content {
    /* 左侧固定,右侧自适应宽度 */
    flex: 1;
    height: calc(100vh - 44px - 49px)
  }

  .wrapper {
    height: 100%;
    overflow: hidden;
  }
</style>