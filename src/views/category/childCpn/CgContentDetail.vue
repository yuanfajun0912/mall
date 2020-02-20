<template>
  <div>
    <goods-list :goods="goods"></goods-list>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'

export default {
  name: 'CgContentDetail',
  components: {
    GoodsList
  },
  props: {
    goods: Array
  },
  data() {
    return {
    }
  },
  methods: {
    
  },
  created() {
    
  }
}
</script>

<style scoped>
</style>