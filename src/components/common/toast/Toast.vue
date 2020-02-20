<template>
  <transition name="demo">
      <div class="toast" v-show="theToast">
          {{msg}}
      </div>
  </transition>
</template>

<script>
  export default {
      name: 'Toast',
      data() {
          return {
              theToast: false,
              msg: ""
          };
      }
  };
</script>

<style scoped>
  .toast {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2vw;
      width: 40vw;
      font-size: 4.5vw;
      color: #fff;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.75);
      border-radius: 5vw;
      z-index: 999;
  }
    
  .demo-enter-active,
  .demo-leave-active {
      transition: 0.3s ease-out;
  }
    
  .demo-enter {
      opacity: 0;
      transform: scale(1.2);
  }
    
  .demo-leave-to {
      opacity: 0;
      transform: scale(0.8);
  }
</style>