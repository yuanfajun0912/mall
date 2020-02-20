<template>
    <div id="cart-list">
      <scroll class="wrapper" ref="scroll">
        <shop-cart-list-item v-for="(item, index) in cartList" 
                            :key="index"
                            :index="index"
                            :cartItem="item"
                            @removeItem="removeItem(index)">
        </shop-cart-list-item>
      </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import ShopCartListItem from './ShopCartListItem'

export default {
  name: 'ShopCartList',
  components: {
    Scroll,
    ShopCartListItem
  },
  computed: {
    // 计算属性的特殊写法，这样写才能改变计算属性的值，
    // 一般写法只能调用值不能改变值
    cartList: {
      get() {
        return this.$store.state.cartList
      },
      set() {
        
      }
    }
  },
  methods: {
    removeItem(index) {
      // splice方法删除指定项
      this.cartList.splice(index, 1) 
    }
  },
  // 组件处于活跃状态时重新计算content高度
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  /* 确定cartList的高度 */
  #cart-list {
    height: calc(100vh - 44px - 49px - 40px);
  }
  /* 确定cartList中scroll的高度 */
  .wrapper {
    height: 100%;
    /* 保证超出的内容不会影响布局 */
    overflow: hidden;
  }
</style>