<template>
  <section id="main">
    <Translate></Translate>
    <Menu></Menu>
  </section>
</template>

<style lang="less">
#main {
  margin-top: 30px;;
}
</style>

<script>
import Translate from "./Translate.vue";
import Menu from "./Menu.vue";

export default {
  name: "Main",
  components: {
    Translate,
    Menu
  }
};
</script>