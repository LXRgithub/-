<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view v-if="isRouteAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
      return{
          reload: this.reload
      }
  },
  data(){
    return{
      isRouteAlive: true
    }
  },
  methods:{
    reload(){
        this.isRouteAlive = false;
        this.$nextTick(() =>{
            this.isRouteAlive = true;
        })
    }
  },
}
</script>

<style>
</style>
