<template>
  <div class="back-top">
    <img src="~assets/img/common/backtop.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'backTop',
}
</script>

<style scoped>
  .back-top {
    position: fixed;
    bottom: 60px;
    right: 6px;
  }
  .back-top img {
    width: 45px;
    height: 45px;
  }
</style>