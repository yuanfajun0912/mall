<template>
  <div id="goods-specific">
    <div class="goods-desc">
      <span>{{goodsDesc}}</span>
    </div>
    <div class="goods-image">
      <!-- 拿到整个的item，包含标题和图片两部分 -->
      <div class="goods-image-item"
           v-for="(item, index) in goodsImage" 
           :key="index">
        <div>{{item.key}}</div>
        <!-- 拿到图片中的每一张图片 -->
        <div v-for="(image, cindex) in item.list" :key="cindex">
          <!-- 加http是因为打包后会出问题 -->
          <img v-lazy="'http:' + image" alt="" @load="imageLoad">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {debounce} from 'common/utils/utils.js'
export default {
  name: 'DetailGoodsSpecific',
  props: {
    detailInfo: Object
  },
  computed: {
    goodsDesc() {
      return this.detailInfo.desc
    },
    goodsImage() {
      return this.detailInfo.detailImage
    }
  },
  methods: {
    imageLoad() {
      this.$emit('goodsImageLoad')
    }
  }
}
</script>

<style scoped>
  #goods-specific {
    font-size: 10px;
    padding: 0.5em;
    margin-top: 1em;
  }


  .goods-desc {
    color: rgb(14, 11, 11);
    padding: 2em;
    border: 0.1em solid pink;
  }


  .goods-image {
    margin-top: 2em;
  }
  .goods-image-item {
    font-size: 1.6em;
    color: var(--color-tint);
    margin-top: 1em;
  }
  .goods-image .goods-image-item img {
    width: 100%;
  }
</style>