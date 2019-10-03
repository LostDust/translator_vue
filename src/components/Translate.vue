<template>
  <section id="translate">
    <textarea rows="4" v-model="$store.state.input"></textarea>
    <div id="form-group">
      <div>
        <span>From：</span>
        <select>
          <option>英文</option>
          <option>其他</option>
        </select>
      </div>
      <div>
        <span>To：</span>
        <select>
          <option>中文</option>
          <option>英文</option>
        </select>
      </div>
      <div>
        <button @click="translation">翻译</button>
      </div>
    </div>
    <textarea rows="4" v-model="$store.state.output" v-show="$store.state.output"></textarea>
  </section>
</template>

<script>
export default {
  name: "Translate",
  data() {
    return {
      fromType: "英文",
      toType: "中文"
    };
  },
  methods: {
    ctrlDown(e) {
      if (e.keyCode != 17) return;
      document.addEventListener("keydown", this.enterDown, false);
      setTimeout(() => {
        document.removeEventListener("keydown", this.enterDown);
      }, 500);
    },
    enterDown(e) {
      if (e.keyCode != 13) return;
      this.translation();
    },
    translation() {
      if (!this.$store.state.input) return;
      let from = this.fromType;
      let to = this.toType;
      switch (from) {
        case "英文":
          from = "en";
          break;
        case "其他":
          from = "auto";
      }
      switch (to) {
        case "中文":
          to = "zh";
          break;
        case "英文":
          to = "en";
      }

      fetch(
        `http://203.195.141.131:3100/api?q=${this.$store.state.input}&from=${from}&to=${to}`
      )
        .then(res => res.text())
        .then(msg => (this.$store.state.output = msg));

      this.$store.commit("query");
    }
  },
  created() {
    // document.addEventListener("keydown", this.ctrlDown, false);
  },
  beforeDestroy() {
    // document.removeEventListener("keydown", this.ctrlDown);
  }
};
</script>

<style lang="less">
@media (max-width: 560px) {
  #translate {
    flex-direction: column;

    textarea {
      width: 94%;
      margin: 0 auto;
    }
    #form-group {
      width: 94%;
      margin: 0px auto;
    }
  }
}
@media (min-width: 560px) {
  #translate {
    flex-direction: row;

    textarea {
      width: 65%;
      margin: 0 6px;
    }
    #form-group {
      width: 25%;
      margin: 0 6px;
    }
  }
}
#translate {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  textarea {
    resize: none;
    border-radius: 6px;
    font-size: 22px;
    outline: none;
    padding: 4px 8px;
    box-shadow: 1px 1px 3px 0 #999;

    &:focus {
      border: 1px violet solid;
    }
    &:last-child {
      margin-top: 4px;
      width: 94%;
    }
  }

  #form-group {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-width: 110px;
    min-height: 106px;

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    span {
      font-size: 18px;
      text-shadow: 1px 1px 3px #999;
    }
    select {
      font-size: 14px;
      padding: 4px 8px 7px;
      border-radius: 6px;
      box-shadow: 1px 1px 3px 0 #999;
      outline: none;
    }
    button {
      width: 95%;
      font-size: 16px;
      padding: 4px 12px 6px;
      border-radius: 6px;
      background: rgba(cyan, 0.8);
      outline: none;
      cursor: pointer;
      border: none;
      box-shadow: 1px 1px 3px 0 #999;

      &:hover {
        background: cyan;
      }
      &:active {
        background: rgb(15, 179, 179);
        color: #eee;
      }
    }
  }
}
</style>
