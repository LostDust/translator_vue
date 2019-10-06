<template>
  <section id="table">
    <table cellspacing="0">
      <thead>
        <tr>
          <td>No</td>
          <td>From</td>
          <td>To</td>
          <td>Menu</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.from">
          <td>{{ index + 1 }}</td>
          <td>{{ item.from }}</td>
          <td>{{ item.to }}</td>
          <td>
            <audio
              :src="`http://203.195.141.131:3100/src/media/${item.from}.mp3`"
              @error="notFind(index)"
            ></audio>
            <img
              src="http://203.195.141.131:3100/src/png/play-circle.png"
              alt="play-circle"
              @click="play(index)"
            />
            <img
              src="http://203.195.141.131:3100/src/png/close-circle.png"
              alt="close-circle"
              @click="$store.commit('removeItem', [$route.query.store, index])"
            />
            <img
              src="http://203.195.141.131:3100/src/png/tool.png"
              alt="message"
              @click="alertText"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "Table",
  methods: {
    play(index) {
      document.querySelector(`tbody tr:nth-child(${index + 1}) audio`).play();
    },
    notFind(index) {
      document.querySelector(
        `tbody tr:nth-child(${index + 1}) [alt=play-circle]`
      ).style.visibility = "hidden";
    },
    alertText() {
      alert("Test");
    }
  },
  computed: {
    list() {
      return this.$store.state.data[this.$route.query.store];
    }
  }
};
</script>

<style lang="less">
#table {
  width: 90%;
  min-width: 500px;
  margin: 32px auto;

  table {
    box-shadow: 2px 2px 6px 0 #666;
    border-radius: 6px;
    table-layout: fixed;
    width: 100%;
    overflow: hidden;

    tr {
      td {
        padding: 10px 14px;

        img {
          margin-bottom: -3px;
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
      }
      td:nth-child(1) {
        width: 10%;
      }
      td:nth-child(2),
      td:nth-child(3) {
        width: 25%;
      }
      td:nth-child(4) {
        width: 18%;
      }
    }
    thead tr,
    tbody tr:nth-child(even) {
      background: rgba(cyan, 0.2);
    }
    thead td {
      font-weight: bold;
    }
  }
}
</style>
