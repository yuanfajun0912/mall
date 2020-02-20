<template>
  <div id="goods-list">
    <goods-list-item v-for="item in goods" :key="item.index" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    goods: Array
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
  #goods-list {
    display: flex;
    flex-wrap: wrap;
    /* 均匀分布 */
    justify-content: space-around;
  }
</style>