<template>
  <div class="main-login">
    <div class="login-box">
      <h3 class="topic">学院运动会管理系统</h3>
      <el-form
        ref="user"
        :model="user"
        label-width="60px"
        label-position="right"
        :rules="rules"
      >
        <el-form-item label="账号：" prop="account">
          <el-input v-model="user.account"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            show-password
            type="password"
            v-model="user.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio v-model="user.power" label="1">系统管理员</el-radio>
          <el-radio v-model="user.power" label="2">管理员</el-radio>
          <el-radio v-model="user.power" label="3">运动员</el-radio>
        </el-form-item>
        <el-form-item >
          <el-button style="float:right" @click="goSign('user')">登录</el-button>
          <!-- <el-button>注册</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  name: "login",
  data() {
    var checkAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      } else {
        callback();
      }
    };
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      user: {
        account: "5120180434",
        password: "12345",
        power: "3",
      },
      rules: {
        account: [{ validator: checkAccount, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    goSign(formName) {
      this.$http.post(api.login,{dwbm:'980000',rybm:'456789'})
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/xygl");
          this.$message({
            type: "success",
            message: "登录成功!",
          });
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .el-form-item__error {
  top: unset;
  // padding-top: 0;
}
::v-deep .el-form-item__label {
  margin-bottom: 20px;
}
.main-login {
  background: url("~@/assets/images/bc.jpg") no-repeat center;
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