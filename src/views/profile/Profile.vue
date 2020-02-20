<template>
  <div>
    <!-- nav-bar -->
    <nav-bar class="nav"><template v-slot:center>个人中心</template></nav-bar>
    <!-- 头像、登陆、注册 -->
    <div class="top">
      <img class="man-img" src="~assets/img/profile/man.jpg" alt="">
      <div class="login">
        <div>登陆/注册</div>
        <div>
          <img class="login-img" src="~assets/img/profile/phone.png" alt="">
          暂未绑定手机号
        </div>
      </div>
    </div>
    <!-- 个人具体信息 -->
    <div class="center">
      <div>
        <h2>0.00</h2>
        <p>我的余额</p>
      </div>
      <div>
        <h2>0</h2>
        <p>我的优惠</p>
      </div>
      <div>
        <h2>0</h2>
        <p>我的积分</p>
      </div>
      <div>
        <h2>0</h2>
        <p>店铺关注</p>
      </div>
      <div>
        <h2>0</h2>
        <p>商品收藏</p>
      </div>
    </div>
    <!-- 详细设置 -->
    <div class="bottom">
      <div>
        <img src="~assets/img/profile/message.png" alt="">
        我的消息
      </div>
      <div>
        <img src="~assets/img/profile/mall.png" alt="">
        积分商城
      </div>
      <div>
        <img src="~assets/img/profile/user.png" alt="">
        会员中心
      </div>
      <div>
        <img src="~assets/img/profile/shopcart.png" alt="">
        我的购物车
      </div>
      <div>
        <img src="~assets/img/profile/config.png" alt="">
        我的设置
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'Profile',
  components: {
    NavBar
  },
  //弹窗警示
  activated() {
    this.$toast('该页面还未实现相应功能', 1500)
  }
}
</script>

<style scoped>
  .nav {
    color: white;
    background-color: var(--color-tint);
  }

  .top {
    background-color: var(--color-tint);
    padding: 10px 10px 12px 10px;
    display: flex;
    color: white;
    font-size: 15px;
  }
  .top .man-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .top .login {
    padding: 10px;
  }
  .top .login .login-img {
    position: relative;
    top: 8px;
  }

  .center {
    display: flex;
  }
  .center div {
    text-align: center;
    flex: 1;
    border-right: 1px solid rgb(223, 221, 221);
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 10px solid rgb(223, 221, 221);
  }
  .center h2 {
    color: red;
    margin-bottom: 5px;
  }
  .center p {
    font-size: 10px;
  }

  .bottom div {
    padding: 5px 5px 5px 5px;
    border-bottom: 1px solid rgb(223, 221, 221);
  }
  .bottom img {
    width: 25px;
    height: 25px;
    position: relative;
    top: 6px;
  }
</style>