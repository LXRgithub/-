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
    changeDemo(){
      this.demo =  ++this.aa ;
      localStorage.setItem('demo',this.demo);
      this.$router.push('/productThree');
    },
    goFirstDemo(){
      this.$router.push('/one');
    },
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
