<template>
  <div id="app">
    <div class="zyjm">
      <Header></Header>
      <div class="zyjm2">
        <Menu></Menu>
        <router-view class="routerView"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./components/menu.vue";
import Header from "./components/header.vue";
export default {
  data() {
    return {};
  },
  components: { Menu, Header },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.zyjm {
  width: 100%;
  height: 100%;
  .zyjm2 {
    height: calc(100% - 50px);
    display: flex;
    .routerView {
      border: 1px solid;
      padding: 10px;
    }
  }
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
