<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in crecommends" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    crecommends: Array
  }
}
</script>

<style>
  .recommend {
    display: flex;
    font-size: 12px;
    border-bottom: 8px solid #eee;
    padding: 10px 10px 20px 10px;
  }
  .recommend-item {
    flex: 1;
    text-align: center;
  }
  .recommend img {
    width: 70px;
    height: 70px;
  }
</style>