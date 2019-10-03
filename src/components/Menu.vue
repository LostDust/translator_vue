<template>
  <section id="menu" @selectstart.prevent>
    <ul>
      <li>
        <span>收藏到</span>
      </li>
      <li>
        <select v-model="$store.state.store" @change="$store.commit('query')">
          <option>public</option>
          <option>local</option>
        </select>
      </li>
      <li>
        <img
          :src="`http://203.195.141.131:3100/src/png/star${$store.state.has?'-active':''}.png`"
          @click="addItem"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import store from "../store.js";

export default {
  name: "Menu",
  methods: {
    addItem() {
      if (this.$store.state.output == "") return;
      if (this.$store.state.has) return;
      this.$store.commit("addItem");
    }
  }
};
</script>
<style lang="less">
#menu {
  background: rgba(cyan, 0.5);
  border-radius: 16px;
  box-shadow: 2px 2px 6px 0 #666;
  padding-left: 16px;
  margin-top: 30px;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      font-size: 20px;
      text-shadow: 1px 1px 4px #999;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        color: #333;
        line-height: 50px;
        padding: 0 18px;
        transition: all ease 0.3s;
      }
      select {
        font-size: 18px;
        padding: 6px 12px 4px;
        margin: 4px auto;
        border-radius: 6px;
        box-shadow: 1px 1px 3px 0 #999;
        outline: none;
      }
      img {
        margin-left: 16px;
        margin-bottom: -3px;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
