<template>
  <Header />
  <router-view />
</template>
<script>
import Header from '@/components/HeaderComponentView.vue'

export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss">
@import '@/assets/css/reset.css';

#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
  a {
    color: #2c3e50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>