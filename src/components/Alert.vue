<template>
  <section id="alert">
    <transition-group tag="ul">
      <li v-for="(item, index) in $store.state.alertList" :key="item.id">
        <p>{{ item.content }}</p>
      </li>
    </transition-group>
  </section>
</template>


<script>
export default {
  name: "Alert",
  methods: {}
};
</script>

<style lang="less">
#alert {
  position: absolute;
  bottom: 120px;
  left: 30px;

  ul {
    margin: 0;
    padding: 0;
    width: 260px;
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      background: rgba(cyan, 0.3);
      width: 100%;
      height: 60px;
      margin-bottom: 4px;
      border-radius: 8px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 20px;
        text-shadow: 1px 1px 4px #999;
        margin-left: 18px;
        width: 70%;
        word-wrap: break-word;
        word-break: break-all;
      }
      img {
        margin-bottom: -3px;
        width: 24px;
        height: 24px;
        cursor: pointer;
        margin-right: 12px;
      }
    }
  }
  .v-enter {
    transform: translateY(60px);
    opacity: 0;
  }
  .v-leave-active {
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all ease 1s;
  }
  .v-leave-to {
    transform: translateY(-120px);
    opacity: 0;
  }
  .v-move {
    transition: all ease 1s;
  }
}
</style>
