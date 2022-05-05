<template>
  <!-- 账号管理 -->
  <div class="zhgl">
    <el-button @click="addZh" class="btn" type="primary">添加账号</el-button>
    <el-tabs style="height: 100%" v-model="activeName" type="card">
      <el-tab-pane style="height: 100%" label="管理员信息" name="1">
        <div style="margin: 5px 0">
          <el-input
            style="width: 500px; margin-right: 10px"
            placeholder="请输入姓名或者工号"
            v-model="glyxx"
          ></el-input>
          <el-button @click="searchData('1')" type="primary">搜索</el-button>
        </div>
        <div class="tabsDiv1">
          <el-table :data="tableData" border height="100%" style="width: 100%">
            <el-table-column
              v-for="(header, index) in tableHeader"
              :key="index"
              show-overflow-tooltip
              :prop="header.prop"
              :label="header.label"
            >
            </el-table-column>
            <el-table-column label="操作" width="80">
              <template slot-scope="scope">
                <a class="action" @click="resetMm(scope.row, '1')">重置密码</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane style="height: 100%" label="学生信息" name="2">
        <div style="margin: 5px 0">
          <el-input
            style="width: 500px; margin-right: 10px"
            placeholder="请输入姓名或者学号"
            v-model="xsxx"
          ></el-input>
          <el-button @click="searchData('2')" type="primary">搜索</el-button>
        </div>
        <div class="tabsDiv1">
          <el-table :data="tableData1" border height="100%" style="width: 100%">
            <el-table-column
              v-for="(header, index) in tableHeader1"
              :key="index"
              show-overflow-tooltip
              :prop="header.prop"
              :label="header.label"
            >
            </el-table-column>
            <el-table-column label="操作" width="80">
              <template slot-scope="scope">
                <a class="action" @click="resetMm(scope.row, '2')">重置密码</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="添加账号" :visible.sync="dialogFormVisible" width="900px">
      <el-form
        :inline="true"
        :model="zhForm"
        :rules="rules"
        ref="zhForm"
        label-width="100px"
        label-position="right"
      >
        <el-form-item label="账号" prop="zh">
          <el-input v-model="zhForm.zh" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="mm">
          <el-input
            type="password"
            show-password
            v-model="zhForm.mm"
            style="width: 300px"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="qrmm">
          <el-input
            type="password"
            show-password
            v-model="zhForm.qrmm"
            style="width: 300px"
          ></el-input>
        </el-form-item>
        <el-form-item label="工号">
          <el-input v-model="zhForm.gh" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="zhForm.xb" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="zhForm.lxfs" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="zhForm.sfzh" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="所属学校">
          <el-input v-model="zhForm.ssxx" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="所属学院">
          <el-input v-model="zhForm.ssxy" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="身份">
          <el-select style="width: 300px" v-model="zhForm.sflx" placeholder="请选择">
            <el-option
              v-for="item,index in sflxData"
              :key="index"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTableData('zhForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    var validateZh = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      // const self = this
      if (!value) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.zhForm.mm) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      zhForm: {
        zh: "",
        mm: "",
        qrmm: "",
      },
      sflxData:[
        {label:'学生',value:'0'},
        {label:'管理员',value:'1'},
        {label:'超级管理员',value:'2'},
      ],
      dialogFormVisible: false,
      glyxx: "",
      xsxx: "",
      activeName: "1",
      tableData: [],
      tableData1: [],
      tableHeader: [
        { prop: "gh", label: "工号" },
        { prop: "xm", label: "姓名" },
        { prop: "xb", label: "性别" },
        { prop: "lxfs", label: "联系方式" },
        { prop: "sfzh", label: "身份证号" },
        { prop: "ssxx", label: "所属学校" },
        { prop: "ssxy", label: "所属学院" },
      ],
      tableHeader1: [
        { prop: "gh", label: "工号" },
        { prop: "xm", label: "姓名" },
        { prop: "xb", label: "性别" },
        { prop: "lxfs", label: "联系方式" },
        { prop: "sfzh", label: "身份证号" },
        { prop: "xxmc", label: "学校" },
        { prop: "xymc", label: "学院" },
        { prop: "bj", label: "班级" },
        { prop: "zb", label: "组别" },
      ],
      rules: {
        zh: [{ validator: validateZh, trigger: "blur" }],
        mm: [{ validator: validatePass, trigger: "blur" }],
        qrmm: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  computed: {},
  mounted() {
    this.getTableData(); //获取管理员表格数据
    this.getTable1Data(); // 获取学生信息表格数据
  },
  methods: {
    //获取管理员表格数据
    getTableData() {
      this.$http.post("/api", { gjz: this.glyxx }).then((res) => {
        if (res.code === 0) {
          this.tableData = res.data;
        } else {
          this.$message({
            type: "error",
            message: "获取管理员表格数据失败",
          });
        }
      });
    },
    //获取学生信息表格数据
    getTable1Data() {
      this.$http.post("/api", { gjz: this.xsxx }).then((res) => {
        if (res.code === 0) {
          this.tableData1 = res.data;
        } else {
          this.$message({
            type: "error",
            message: "获取学生信息表格数据失败",
          });
        }
      });
    },
    //添加账号
    addTableData(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post("/api", { ...this.zhForm }).then((res) => {
            if (res.code === 0) {
              this.dialogFormVisible = false;
              this.$message({
                type: "success",
                message: "添加成功",
              });
            }
          });
        }
      });
    },
    // 添加账号 打开账号弹框
    addZh() {
      this.dialogFormVisible = true;
    },
    //重置密码
    resetMm(data, val) {
      if (val === "1") {
        //管理员重置密码
      } else {
        //学生重置密码
      }
      console.log("重置密码");
    },
    // 搜索
    searchData(val) {
      // 1为管理员信息搜索
      if (val === "1") {
        this.getTableData();
      } else {
        this.getTable1Data();
      }
      // 2为学生信息搜索
    },
  },
};
</script>
<style lang='scss' scoped>
::v-deep .el-tabs__content {
  height: calc(100% - 70px);
}
.zhgl {
  position: relative;
  height: 100%;
  .btn {
    position: absolute;
    right: 10px;
    top: 5px;
    z-index: 99999;
  }
}
.tabsDiv1 {
  height: calc(100% - 40px);
  // border: 1px solid;
}
</style>