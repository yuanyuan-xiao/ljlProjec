<template>
  <!-- 查看成绩 -->
  <div class="ckcj">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="项目成绩排名" name="first"></el-tab-pane>
      <el-tab-pane label="班级成绩排名" name="second"></el-tab-pane>
      <el-tab-pane label="个人总分排名" name="third"></el-tab-pane>
    </el-tabs>
    <Cjpm v-show="cjpmShow"></Cjpm>
    <Bjpm v-show="bjpmShow"></Bjpm>
    <Grpm v-show="GrpmShow"></Grpm>
  </div>
</template>
<script>
import Cjpm from "./components/xmcjpm.vue";
import Bjpm from "./components/bjcjpm.vue";
import Grpm from "./components/grpm.vue";
export default {
  name: "ckcj",
  props: {},
  components: { Cjpm, Bjpm, Grpm },
  data() {
    return {
      activeName: "first",
    };
  },
  computed: {
    cjpmShow() {
      return this.activeName === "first";
    },
    bjpmShow() {
      return this.activeName === "second";
    },
    GrpmShow() {
      return this.activeName === "third";
    },
  },
  mounted() {},
  methods: {
    // tabs切换
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang='scss' scoped>
.ckcj {
  margin: 0;
}
</style>