<template>
  <div class="header">
    <span class="content">学院运动会管理系统</span>
    <div class="header_right">
      <i class="el-icon-user-solid"></i>
      <span class="spn">欢迎您，{{ dlbm }}</span>
      <i title="退出" @click="logOut" class="el-icon-switch-button"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      dlbm: "超级管理员",
    };
  },
  computed: {},
  mounted() {},
  methods: {
    //退出登录
    logOut() {
      this.$confirm("是否退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$router.push('/')
        this.$message({
          type: "success",
          message: "退出成功!",
        });
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.header {
  height: 70px;
  text-shadow: 5px 3px 0.75rem #40505f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #0d588c;
  .header_right {
    display: flex;
    align-items: center;
    .spn {
      font-size: 18px;
      margin: 0 20px 0 5px;
    }
    .el-icon-switch-button {
      font-size: 25px;
      &:hover {
        cursor: pointer;
      }
    }
    .el-icon-user-solid {
      font-size: 25px;
    }
  }
  .content {
    font-size: 30px;
    font-weight: 600;
  }
}
</style>