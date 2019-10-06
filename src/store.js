import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const local = Object.keys(localStorage).map(item => {
  return {
    from: item,
    to: localStorage.getItem(item)
  };
});

const store = new Vuex.Store({
  state: {
    input: "hello",
    output: "",
    store: "public",
    has: false,
    data: { local },
    alertList: []
  },
  mutations: {
    save(state) {
      fetch(`http://203.195.141.131:3100/save/`, {
        method: "POST",
        body: JSON.stringify(state.data.public),
        headers: { "content-type": "application/json" }
      })
        .then(res => res.text())
        .then(msg => {
          console.log(msg);
        });
    },
    alertMessage(state, msg) {
      const id = new Date().getTime();
      state.alertList.push({ content: msg, id });
      setTimeout(() => {
        state.alertList.shift();
      }, 2000);
    },
    query(state) {
      const result = state.data[state.store].some(item => {
        return item.from == state.input;
      });
      if (result) state.has = true;
      else state.has = false;
    },
    addItem(state) {
      state.data[state.store].push({
        from: state.input,
        to: state.output
      });
      if (state.store === "local")
        localStorage.setItem(state.input, state.output);
      else this.commit("save");
      state.has = true;
      this.commit("alertMessage", "收藏成功");
    },
    removeItem(state, [store, index]) {
      const newData = Object.assign({}, state.data);
      const item = newData[store].splice(index, 1);
      state.data = newData;
      if (store === "local") localStorage.removeItem(item[0].from);
      else this.commit("save");
      this.commit("alertMessage", "删除成功");
    },
    update(state, content) {
      state.data.public = content;
    }
  }
});

fetch(`http://203.195.141.131:3100/database/`)
  .then(res => res.json())
  .then(msg => {
    store.commit("update", msg);
  });

export default store;
