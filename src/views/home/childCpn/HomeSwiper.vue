<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in cbanners" :key="item.index">
          <a :href="item.link">
            <img :src="item.image" 
                 width="100%"
                 height="150px"
                 @load="imageLoad">
          </a>
        </div>
    </div>
    <!-- 分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'HomeSwiper',
  data() {
    return {
      isLoad: false
    }
  },
  //获取Home中的数据
  props: {
    cbanners: Array
  },
  mounted() {
    const mySwiper = new Swiper ('.swiper-container', {
      //这个bug太牛逼了，loop:true明明是循环播放，我写了没用，注释后竟然有用
      //但是可以自动循环，手动就不能
      // loop: true,   
      //自动播放
      autoplay: {
        //用户操作每个item后依然自动播放
        disableOnInteraction: false,
        //2s切换，默认3s
        delay: 2000,
      }, 
      //强制刷新，解决动态引用数据导致的轮播图不正常显示的bug
      observer: true,
      //分页器，上面的那几个小点点
      pagination: {
        //绑定
        el: '.swiper-pagination',
        //可点击切换
        clickable :true
      }
    })        
  },
  methods: {
    imageLoad() {
      //只传一次
      if(!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = !this.isLoad
      }
    }
  }
}
</script>

<style>
  @import "../../../../node_modules/swiper/css/swiper.css";
</style>