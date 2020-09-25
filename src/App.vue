<template>
  <div id="app">
   <mintabbar></mintabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import mintabbar from'./components/content/mintabbar.vue'
export default {
  name: 'App',
  components: {
    mintabbar
  }
}
</script>

<style>
	@import url("./assets/css/base.css");
</style>
