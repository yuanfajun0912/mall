<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center>购物街</template></nav-bar>
    <tab-control :text="['流行','新款','精选']"
                  @tabClick="tabClick"
                  ref="tabControl_1"
                  class="tab-control"
                  v-show="isTabControlShow"
    ></tab-control>
    <scroll class="wrapper" 
            ref="scroll" 
            :probeType="3" 
            @getPosition="showBackTop" 
            :pullUpLoad="true"
            @pullUpLoad="pullUpLoad">
      <!-- 轮播图 -->
      <home-swiper :cbanners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <!-- 广告 -->
      <home-recommend :crecommends="recommends"></home-recommend>
      <!-- 推荐 -->
      <home-feature></home-feature>
      <!-- 分页标签控制 -->
      <tab-control :text="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl_2"
      ></tab-control>
      <!-- 商品 -->
      <goods-list :goods="goods[showtype].list"></goods-list>
    </scroll>
    <!-- .native使得组件可以使用原生事件，就是这儿的click -->
    <back-top @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import {getHomeMultidata, getHomeGoods} from 'network/home'

import HomeSwiper from './childCpn/HomeSwiper'
import HomeRecommend from './childCpn/HomeRecommend'
import HomeFeature from './childCpn/HomeFeature'

import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/common/backtop/BackTop'

import {debounce} from 'common/utils/utils.js'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      //轮播图的数据
      banners: null,
      //广告的数据
      recommends: null,
      //商品的数据
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      showtype: 'pop',
      isShow: false,
      tabControlOffsetTop: 0,
      isTabControlShow: false,
      rememberPositionY: 0
    }
  },
  //将created里面的方法都放到methods里面封装一遍，便于管理
  created() {
    //
    this.getHomeMultidata_methods();
    //拿到流行、新款、精选的数据
    this.getHomeGoods_methods('pop');
    this.getHomeGoods_methods('new');
    this.getHomeGoods_methods('sell');
  },
  mounted() {
    //等图片加载完后重新计算滚动高度
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.rememberPositionY, 1)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.rememberPositionY = this.$refs.scroll.scroll.y
  },

  methods: {
    // 业务逻辑
    tabClick(index) {
      switch(index){
        case 0:
          this.showtype = 'pop';
          break;
        case 1:
          this.showtype = 'new';
          break;
        case 2:
          this.showtype = 'sell';
          break;
      }
      //使两个tab-control保持一致
      this.$refs.tabControl_1.activeIndex = index;
      this.$refs.tabControl_2.activeIndex = index;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    showBackTop(position) {
      this.isShow = -position.y > 1000;
      //决定第一个tab-control的显示
      this.isTabControlShow = -position.y > this.tabControlOffsetTop;
    },
    pullUpLoad() {
      this.getHomeGoods_methods(this.showtype);
    },
    swiperImageLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl_2.$el.offsetTop;
    },

    // 数据操作
    getHomeMultidata_methods() {
      //组件被创建时就获取主页轮播图，推荐数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods_methods(type) {
      //获取主页商品数据
      let page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //能进行多次上拉加载
        this.$refs.scroll.scroll.finishPullUp();
      })
    }
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    /* 让homenav一直在页面顶部 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 5;
  }
  #home {
    padding-top: 44px; 
  }

  .wrapper {
    /* 通过定位的方式确定wrapper的高度 */
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 49px;
    right: 0;
  }

  .tab-control {
    position: relative;
    z-index: 3;
    background-color: white;
  }
</style>
