<template>
  <div class="main-login">
    <div class="login-box">
      <h3 class="topic">学院运动会管理系统</h3>
      <el-form
        ref="user"
        :model="user"
        label-width="60px"
        label-position="right"
      >
        <el-form-item label="账号：">
          <el-input v-model="user.account" size="mini" label="1"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input
            show-password
            type="password"
            v-model="user.password"
            size="mini"
            label="1"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio v-model="user.power" label="1">系统管理员</el-radio>
          <el-radio v-model="user.power" label="2">管理员</el-radio>
          <el-radio v-model="user.power" label="3">运动员</el-radio>
        </el-form-item>
        <!-- <button class="loginBtn">登录</button><br />
        <button class="loginBtn">注册</button> -->
        <el-form-item>
          <el-button @click="goSign">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        account: "",
        password: "",
        power: "-1",
      },
    };
  },
  methods: {
    goSign() {
      console.log(31231)
    }
  },
};
</script>

<style scoped lang="less">
.main-login {
  background: url(../../assets/images/001.jpg) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #ccc;
  text-align: center;
  .login-box {
    font-weight: 600;
    width: 500px;
    background-color: rgba(84, 122, 169, 0.6);
    padding: 40px;
    h3 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    .el-form {
      margin: 0 auto;
      width: 400px;
      .el-form-item {
        margin-bottom: 1px;
      }
      .el-button {
        width: 150px;
      }
    }
  }
}
// .loginBtn {
//   width: 200px;
//   height: 40px;
//   margin-bottom: 20px;
//   font-size: 18px;
// }
</style>