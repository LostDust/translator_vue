<template>
  <section id="app">
    <p>{{ info }}</p>
  </section>
</template>

<script>
import store from "./store.js";
import router from "./router.js";

export default {
  name: "App",
  data() {
    return {
      info: "Hello!"
    };
  },
  components: {},
  store,
  router
};
</script>

<style lang="less">
</style>
