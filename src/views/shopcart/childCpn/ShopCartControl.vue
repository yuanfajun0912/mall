<template>
  <div id="control">
    <div class="button" @click="selectAll">
      <div class="container" :class="{check: this.isChecked}"><img src="~assets/img/cart/tick.svg" alt=""></div>
      <div>全选</div>
    </div>
    <div class="price">合计: ￥{{totalPrice}}</div>
    <div class="pay" @click="toBuy">
      去结算({{totalCheck}})
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCartControl',
  data() {
    return {
      
    }
  },
  computed: {
    // 统计总价格
    totalPrice() {
      let price = 0
      for(let item of this.$store.state.cartList) {
        if(item.check) {
          price += parseFloat(item.realPrice) * item.counter
        }
      }
      return price.toFixed(2)
    },
    //统计总的被选中的商品
    totalCheck() {
      let sum = 0
      for(let item of this.$store.state.cartList) {
        if(item.check) {
          sum += 1
        }
      }
      return sum
    },
    // 全选按钮的状态
    isChecked (){
      // 购物车为空时,按钮不选中
      if(this.$store.state.cartList.length === 0) {
        return false
      }
      return !(this.$store.state.cartList.filter(item => !item.check).length)
    }
  },
  methods: {
    // 决定所有商品的选中与否
    selectAll() {
      if(this.isChecked) {
        for(let item of this.$store.state.cartList) {
          item.check = false
        }
      }else {
        for(let item of this.$store.state.cartList) {
          item.check = true
        }
      }
    },
    toBuy() {
      this.$toast('对不起,还未开发此功能',2000)
    }
  }
}
</script>

<style scoped>
  #control {
    display: flex;
    justify-content: space-between;

    height: 40px;
    background-color: rgb(223, 223, 223);
    font-size: 14px;
  }

  .button {
    width: 5em;
    display: flex;
    line-height: 40px;
  }
  .button .container {
    border: 1px solid rgb(197, 197, 197);
    border-radius: 50%;
    /* 缩短圆圈高度 */
    margin: 0.7em 0.3em 0.7em 0.5em;
    /* 使得里面的图片垂直居中 */
    display: flex;
    justify-items: center;
  }
  .check {
    background-color: var(--color-high-text);
  }
  .button .container img {
    position: relative;
    top: 0.1em;
    left: 0.1em;
  }

  .price {
    line-height: 40px;
  }

  .pay {
    color: white;
    background-color: rgb(255, 52, 1);
    width: 7em;
    /* 文字垂直居中 */
    line-height: 40px;
    text-align: center;
  }
</style>