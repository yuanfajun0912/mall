export default {
  addToCart(context, addGood) { 
    return new Promise((resolve, reject) => {
      let oldCartList = null
      for(let item of context.state.cartList) {
        if(addGood.id === item.id) {
          //将购物车中已有的那个商品赋值给oldCartList
          //改变oldCartList也意味着改变购物车中已有的那个商品
          oldCartList = item
        }
      }
      //分情况调用对应的mutations方法
      if(oldCartList) {
        // 商品数量+1
        context.commit('addItemCounter', oldCartList)
        resolve('商品数量+1')
      }else {
        // 添加新的商品
        context.commit('addToCart', addGood)
        resolve('已添加该商品进购物车')
      }
      })
  }
}