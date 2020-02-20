<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImage" alt="">
    <div class="introduction">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <img src="~assets/img/common/collect.jpg" alt="" @load="imageLoad">
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: Object
  },
  computed: {
    showImage() {
      //哪一个后加进来哪一个就放前面
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img 
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      //动态路由
      if(this.goodsItem.iid) {
        this.$router.push('/detail/'+ this.goodsItem.iid)
      }  
    }
  }
}
</script>

<style scoped>
  .goods-list-item {
    font-size: 10px;
    text-align: center;
    width: 48%;
    position: relative;
    padding-top: 0.5em; 
    padding-bottom: 3em;
  }
  .goods-list-item>img {
    width: 100%;
    border-radius: 0.5em;
  }


  .introduction {
    /* 使得introduction始终在item底部，不会随着图片跑 */
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .introduction p {
    /* 避免重叠现象 */
    overflow: hidden;
    /* 多行文本只按一行显示，超出文本省略号 */
    text-overflow: ellipsis;
    /* 禁止自动换行 */
    white-space: nowrap;
  }
  .introduction .price {
    color: var(--color-high-text);
  }
  .introduction img{
    width: 1.1em;
    height: 1.1em;
    margin-left: 1em; 
  }
</style>