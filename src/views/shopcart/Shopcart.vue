<template>
  <div>
    <nav-bar class="cart-nav-bar"><div slot="center">购物车({{goodsNumber}})</div></nav-bar>
    <!-- 商品区 -->
    <shop-cart-list></shop-cart-list>
    <!-- 控制区 -->
    <shop-cart-control></shop-cart-control>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import ShopCartList from './childCpn/ShopCartList'
import ShopCartControl from './childCpn/ShopCartControl'

export default {
  name: 'Shopcart',
  components: {
    NavBar,
    ShopCartList,
    ShopCartControl
  },
  data() {
    return {
      
    }
  },
  computed: {
    goodsNumber() {
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style scoped>
  .cart-nav-bar {
    background-color: var(--color-tint);
    color: white;
    position: relative;
    z-index: 9
  }
</style>