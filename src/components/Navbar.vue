<template>
  <section id="navbar" @selectstart.prevent>
    <ul>
      <li>
        <router-link to="/main">翻译</router-link>
      </li>
      <li>
        <span>收藏夹</span>
        <ul>
          <li>
            <router-link to="/table?store=public">public</router-link>
          </li>
          <li>
            <router-link to="/table?store=local">local</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>


<script>
export default {
  name: "Navbar"
};
</script>

<style lang="less">
#navbar {
  background: rgba(cyan, 0.5);
  border-radius: 16px;
  box-shadow: 2px 2px 6px 0 #666;
  padding-left: 36px;
  margin-top: 30px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      display: inline-block;
      position: relative;
      font-size: 20px;
      text-shadow: 1px 1px 4px #999;

      a,
      span {
        text-decoration: none;
        color: #333;
        line-height: 50px;
        padding: 0 18px;
        display: block;
        transition: all ease 0.3s;
        text-align: center;
        cursor: pointer;
      }
      ul {
        width: 100%;
        position: absolute;
        opacity: 0;
        visibility: hidden;
        background: cyan;
        border-radius: 0 0 16px 0;
        box-shadow: 2px 2px 6px 0 #666;
        transition: all ease 0.2s;

        li {
          width: 100%;
        }
        li + li {
          border-top: 1px #aaa solid;
        }
      }
    }
    li:hover > a,
    li:hover > span {
      background: rgba(#999, 0.2);
    }
    li:hover ul {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
