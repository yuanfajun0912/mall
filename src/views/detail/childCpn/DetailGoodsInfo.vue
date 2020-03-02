<template>
  <!-- 若对象为空则不渲染下列内容 -->
  <!-- 解决能获得数据，但是报错0、1未被定义的问题 -->
  <!-- 因为数据还未请求到，此时的对象还是空对象，
  所以找不到下面的columns[0]，会报错，
  但是数据请求下来后，可以正常显示，但错已经报了 -->
  <div v-if="Object.keys(goods).length !== 0" class="info">
    <!-- part1 -->
    <div class="info-title"><b>{{goods.title}}</b></div>
    <!-- part2 -->
    <div class="info-price">
      <span class="new">{{goods.newPrice}}</span>
      <span class="old">{{goods.oldPrice}}</span>
      <span class="discount" :style="'background-color: '+goods.discountBgColor">{{goods.discount}}</span>
    </div>
    <!-- part3 -->
    <div class="info-base">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <!-- part4 -->
    <div class="info-services">
      <span class="info-services-item"
            v-for="index in goods.services.length-1"
            :key="index">
        <img :src="'http:' + goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    goods: {
      type: Object,
      default() {
        {}
      }
    }
  }
}
</script>

<style scoped>
  .info {
    margin-top: 0.8em;
    font-size: 10px;
    padding: 0.5em 0.5em 2em 0.5em;
    /* 分割线 */
    border-bottom: 0.4em solid #f7f7f7;
  }


  .info-title {
    font-size: 1.5em;
  }

  .info-price {
    margin-top: 1.1em;
  }
  .info-price .new {
    font-size: 2.1em;
    color: var(--color-high-text);
  }
  .info-price .old {
    /*删除线*/
    text-decoration: line-through;
    margin: 0 0.4em 0 0.2em;
  }
  .info-price .discount {
    color: white;
    border-radius: 0.3em;
    padding: 0.2em;
    /* 使元素上浮一些 */
    position: relative;
    top: -0.5em;
  }


  .info-base {
    display: flex;
    justify-content: space-between;
    color: #9b9999;
    margin-top: 1.9em;
    padding-bottom: 1em;
    /* 分割线 */
    border-bottom: 1px solid #dadada;
  }


  .info-services {
    margin-top: 2em;
    display: flex;
    justify-content: space-between;
  }
  .info-services .info-services-item img{
    width: 1em;
    height: 1em;
  }
</style>