<template>
  <div class="leftMenu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(187 197 206)"
      text-color="#000"
      active-text-color="#ffd04b"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <span>导航一</span>
        </template>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="2">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <!-- <i class="el-icon-document"></i> -->
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang='less' scoped>
.leftMenu {
  width: 300px;
//   border: 1px solid #666;
  background-color: rgb(187 197 206);
  overflow: auto;
  .el-menu-vertical-demo {
  }
}
</style>