<template>
  <div id="cg-content-top">
    <div v-for="(item, index) in linkList" :key="index" class="item-container">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
import {getSubcategory} from 'network/category'

export default {
  name: 'CgContentTop',
  data() {
    return {
      //各个链接的总和
      linkList: []
    }
  },
  created() {
    //一开始就拿到第一个item的数据
    this.getSubcategory_methods(3627)
    // 使用事件总线拿到maitkey
    this.$bus.$on('getMaitKey',(maitkey) => {
      this.getSubcategory_methods(maitkey)
    })
  },
  methods: {
    //拿到CgContentTop的数据
    getSubcategory_methods(maitkey) {
      getSubcategory(maitkey).then(res => {
        this.linkList = res.data.list   
      })
    }
  }
}
</script>

<style scoped>
  #cg-content-top {
    overflow: hidden;
    font-size: 10px;
    /* flex布局,可换行 */
    display: flex;
    flex-wrap: wrap;
    padding: 1.7em 1em 1.7em 1em;
  }

  .item-container {
    text-align: center;
    font-size: 1.1em;
    margin-right: 1.15em;
    margin-bottom: 1.1em;
  }
  .item-container img {
    width: 4.3em;
    height: 4.3em;
  }
  .item-container p {
    margin-top: 1.3em;
    /* 当p中文字变多时，使其不会影响整个div的宽度 */
    max-width: 4.3em;
  }
</style>