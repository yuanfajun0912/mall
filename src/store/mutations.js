export default {
  addItemCounter(state, oldCartList) {
    oldCartList.counter += 1
  },
  addToCart(state, addGood) {
    //添加check属性，用来控制商品是否被选中
    addGood.check = true
    state.cartList.push(addGood)
  },
  changeCheck(state, index) {
    state.cartList[index].check = !state.cartList[index].check
  }
}