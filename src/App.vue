<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterView />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterView from '@/components/FooterView.vue'

export default {
  components: {
    NavBar,
    FooterView,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*   text-align: center; */
  color: #2c3e50;
  margin-bottom: 70px !important;
}
</style>
