<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view v-if="isRouteAlive"//>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
