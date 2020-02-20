<template>
  <div>
    <tab-bar id="tab-bar">
      <tab-bar-item path="/home">
        <img slot="item-img" src="../../../assets/img/tabbar/home.svg" alt="home">
        <img slot="item-img-active" src="../../../assets/img/tabbar/home_active.svg" alt="home_active">
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-img" src="../../../assets/img/tabbar/category.svg" alt="category">
        <img slot="item-img-active" src="../../../assets/img/tabbar/category_active.svg" alt="category_active">
        <div slot="item-text">导航</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item-img" src="../../../assets/img/tabbar/shopcart.svg" alt="shopcart">
        <img slot="item-img-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="shopcart_active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-img" src="../../../assets/img/tabbar/profile.svg" alt="profile">
        <img slot="item-img-active" src="../../../assets/img/tabbar/profile_active.svg" alt="profile_active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,TabBarItem
  }
}
</script>

<style>
  #tab-bar {
    z-index: 9;
  }
</style>