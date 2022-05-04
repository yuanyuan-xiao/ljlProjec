<template>
  <!-- 登记成绩 -->
  <div class="djcj">
    <el-tabs v-model="activeName">
      <el-tab-pane label="按项目登记" name="first"></el-tab-pane>
      <el-tab-pane label="按个人登记" name="second"></el-tab-pane>
    </el-tabs>
  <Xmdj v-if="xmdjShow"></Xmdj>
  <Grdj v-else></Grdj>
  </div>
</template>
<script>
import Xmdj from './components/xmdj.vue'
import Grdj from './components/grdj.vue'
export default {
  name: "djcj",
  props: {},
  components: {Xmdj,Grdj},
  data() {
    return {
      activeName: 'first'
    };
  },
  computed: {
    xmdjShow() {
      return this.activeName === 'first'
    }
  },
  mounted() {},
  methods: {
  },
};
</script>
<style lang='scss' scoped>
</style>