<template>
  <section id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Alert></Alert>
  </section>
</template>

<script>
import store from "./store.js";
import router from "./router.js";

import Navbar from "./components/Navbar.vue";
import Alert from "./components/Alert.vue";

export default {
  name: "App",
  data() {
    return {
      info: "hello"
    };
  },
  components: {
    Navbar,
    Alert
  },
  methods: {
    event() {}
  },
  store,
  router
};
</script>

<style lang="less">
#app {
  width: 80%;
  min-width: 300px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
