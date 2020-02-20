<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  .navbar {
    display: flex;
    height: 44px;
    /* 居中显示 */
    line-height: 44px;
    text-align: center;
  }
  .left {
    width: 60px;
  }
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>