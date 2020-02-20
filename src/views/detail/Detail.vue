<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" 
                    @navItemClick="navItemClick" 
                    ref="navbar"
                    ></detail-nav-bar>
    <scroll class="wrapper" ref="scroll" @getPosition="getPosition" :probeType="3">
      <detail-swiper :swiperImage="swiperImage"></detail-swiper>
      <!-- 商品信息 -->
      <detail-goods-info :goods="goods"></detail-goods-info>
      <!-- 商家信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- 商品详细信息 -->
      <detail-goods-specific :detailInfo="detailInfo" 
                             @goodsImageLoad="goodsImageLoad">
      </detail-goods-specific>
      <!-- 商品参数信息 -->
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
      <!-- 评论区信息 -->
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <!-- 推荐区信息 -->
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
    <!-- 底部工具栏 -->
    <detail-bottom-bar @addToCart="addCart"></detail-bottom-bar>
    <!-- backtop按钮 -->
    <back-top @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import DetailNavBar from './childCpn/DetailNavBar'
import Scroll from 'components/common/scroll/Scroll.vue'

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail.js'

import DetailSwiper from  './childCpn/DetailSwiper'
import DetailGoodsInfo from './childCpn/DetailGoodsInfo'
import DetailShopInfo from './childCpn/DetailShopInfo'
import DetailGoodsSpecific from './childCpn/DetailGoodsSpecific'
import DetailParamInfo from './childCpn/DetailParamInfo'
import DetailCommentInfo from './childCpn/DetailCommentInfo'
import DetailBottomBar from './childCpn/DetailBottomBar'
import GoodsList from 'components/content/goods/GoodsList'

import BackTop from 'components/common/backtop/BackTop'

import {debounce} from 'common/utils/utils.js'

export default {
  name: 'Detail',
  data() {
    return {
      swiperImage: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      //每一部分（参数、评论、推荐）的y值
      partsY: [0],
      getPartsY: null,
      currentIndex: 0,
      isShow: false,
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailGoodsSpecific,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
    BackTop
  },
  computed: {
    itemId() {
      return this.$route.params.id
    }
  },
  methods: {
    getDetail_methods() {
      return getDetail(this.itemId).then(res => {
        console.log(res)
        const data = res.result
        //拿到轮播图的数据
        this.swiperImage = data.itemInfo.topImages
        //商品基本信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //商家基本信息
        this.shop = new Shop(data.shopInfo)
        //商品详细信息(因为都在detaiInfo里面，所以拿到detaiInfo就行了)
        this.detailInfo = data.detailInfo
        //获取商品参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //获取评论区信息（有些没有评论）
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      })
    },
    //拿到推荐的数据
    getRecommend_methods() {
      return getRecommend().then(res => {
        this.recommend = res.data.list 
      })
    },
    goodsImageLoad() {
      this.$refs.scroll.refresh()
      //真正的获取各部分位置
      this.getPartsY()
    },
    navItemClick(index) {
      //解决点击商品时向上弹出44px的空白部分的bug
      if(index == 0) {
        this.$refs.scroll.scrollTo(0, 0)
      }else {
        //-44是为了对齐全,传入的必须是负值
        this.$refs.scroll.scrollTo(0, -(this.partsY[index]-44))
      }
    },
    //滚动事件
    getPosition(position) {
      const scrollPosY = -position.y
      if(this.currentIndex !== 0 && scrollPosY >= 0 && scrollPosY < (this.partsY[1]-44)) {
        this.currentIndex = 0
        this.$refs.navbar.activeIndex = 0
      }
      if(this.currentIndex !== 1 && scrollPosY >= (this.partsY[1]-44) && scrollPosY < (this.partsY[2]-44)) {
        this.currentIndex = 1
        this.$refs.navbar.activeIndex = 1
      }
      if(this.currentIndex !== 2 && scrollPosY >= (this.partsY[2]-44) && scrollPosY < (this.partsY[3]-44)) {
        this.currentIndex = 2
        this.$refs.navbar.activeIndex = 2
      }
      if(this.currentIndex !== 3 && scrollPosY >= (this.partsY[3]-44)) {
        this.currentIndex = 3
        this.$refs.navbar.activeIndex = 3
      } 
      //决定backTop的显示
      this.isShow = scrollPosY > 1000
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    //加入购物车
    addCart() {
      //当前商品需要传给购物车的信息总和
      const addGood = {};
      addGood.id = this.itemId
      addGood.title = this.goods.title
      addGood.desc = this.goods.desc
      addGood.realPrice = this.goods.realPrice
      addGood.image = this.swiperImage[0]
      addGood.counter = 1

      //上传到actions中并完成后续操作
      this.$store.dispatch('addToCart', addGood).then(res => {
        this.$toast(res, 1500)
      })
    }
  },
  created() {
    this.getDetail_methods()
    this.getRecommend_methods()
    //对获取位置做一层防抖封装
    this.getPartsY = debounce(() => {
      this.partsY = []
      this.partsY.push(0)
      this.partsY.push(this.$refs.param.$el.offsetTop)
      this.partsY.push(this.$refs.comment.$el.offsetTop)
      this.partsY.push(this.$refs.recommend.$el.offsetTop)
    })
      
      
  }
}
</script>

<style scoped>
  #detail {
    /* 将底部的tabbar隐藏 */
    position: relative;
    z-index: 10;
    background-color: white;
  }
  .nav-bar {
    position: relative;
    z-index: 11;
    background-color: white;
  }
  .wrapper {
    /* 100vh：页面可见部分的高度 */
    height: calc(100vh - 44px - 58px);
  }
</style>