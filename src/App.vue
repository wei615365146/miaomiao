<template>
<div id="app">
     <router-view v-if="isRouterAlive"></router-view>
</div>



</template>
<script>
  export default {
    name: 'App',
    // 提供reload方法
    provide () {
      return {
        reload: this.reload
      }
    },
    // isRouterAlive控制显示
    data(){
      return {
        isRouterAlive: true
      }
    },
    methods: {
      // 刷新方法
      reload: function () {
        this.isRouterAlive = false;
        // 该方法会在dom更新后执行
        this.$nextTick(function () { this.isRouterAlive = true })
      }
    }
  }
</script>


