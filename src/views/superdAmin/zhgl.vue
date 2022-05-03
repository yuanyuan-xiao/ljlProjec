<template>
  <!-- 账号管理 -->
  <div class="zhgl">
    <el-tabs
      style="height: 100%"
      v-model="activeName"
      type="card"
      @tab-click="handleClick"
    >
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
          <el-button  @click="searchData('2')" type="primary">搜索</el-button>
        </div>
        <div class="tabsDiv1">
          <el-table :data="tableData" border height="100%" style="width: 100%">
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
  </div>
</template>
<script>
export default {
  name: "账号管理",
  props: {},
  components: {},
  data() {
    return {
      glyxx:'',
      xsxx:'',
      activeName: "1",
      tableData: [],
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
    };
  },
  computed: {},
  mounted() {},
  methods: {
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
    searchData(val){
      // 1为管理员信息搜索
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
  height: 100%;
}
.tabsDiv1 {
  height: calc(100% - 40px);
  // border: 1px solid;
}
</style>