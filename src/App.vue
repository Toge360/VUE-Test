<template>
  <div id="app">
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/hellopage'">Hello Page</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: { // add a watcher https://dev.to/webhookrelay/a-simple-way-to-keep-your-vue-page-title-in-sync-with-the-router-ec0
    '$route' (to, from) {
      document.title = to.meta.title || 'Your Website'
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
