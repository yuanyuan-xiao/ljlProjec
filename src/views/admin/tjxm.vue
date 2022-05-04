<template>
  <!-- 学院管理 -->
  <div class="xygl">
    <div class="header">
      <el-button @click="tjxxClick('1')" type="primary">添加项目类别</el-button>
      <el-button @click="tjxyClick('2')" type="primary">添加项目</el-button>
    </div>
    <div class="content">
      <div class="tableTop">
        <span>已添加项目类别</span>
        <span>已添加项目</span>
      </div>
      <div class="tableDiv">
        <div class="xxTable" style="margin-right: 10px">
          <el-table :data="tableData1" border height="100%" style="width: 100%">
            <!-- <el-table-column type="index" label="序号" width="50">
            </el-table-column> -->
            <el-table-column prop="xmlbbh" label="项目类别编号">
            </el-table-column>
            <el-table-column prop="xmlbmc" label="项目类别名称">
            </el-table-column>
            <!-- <el-table-column prop="xxqyh" label="学校区域号"> </el-table-column> -->
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <a
                  class="action"
                  style="margin-right: 5px"
                  @click="viewData(scope.row, '1')"
                  >查看</a
                >
                <a class="action" @click="deleteData(scope.row, '2')">删除</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="xxTable">
          <el-table :data="tableData2" border height="100%" style="width: 100%">
            <!-- <el-table-column type="index" label="序号" width="50">
            </el-table-column> -->
            <el-table-column prop="xmbh" label="项目编号"> </el-table-column>
            <el-table-column prop="xmmc" label="项目名称"> </el-table-column>
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <a
                  class="action"
                  style="margin-right: 5px"
                  @click="viewData(scope.row, '2')"
                  >查看</a
                >
                <a class="action" @click="deleteData(scope.row, '2')">删除</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <el-dialog
      :title="addTitle === '1' ? '添加项目类别' : '添加项目'"
      :visible.sync="dialogFormVisible"
      width="500px"
    >
      <el-form :model="xyForm" label-width="100px" label-position="right">
        <el-form-item :label="addTitle === '1' ? '项目类别名称' : '项目名称'">
          <el-input v-model="xyForm.xmlbmc" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item :label="addTitle === '1' ? '项目类别编号' : '项目编号'">
          <el-input v-model="xyForm.xmlbbh" style="width: 300px"></el-input>
        </el-form-item>
        <!-- <el-form-item :label="addTitle === '1' ? '学校区域号' : '所属学校'">
          <el-input v-model="xyForm.xxqyh" style="width: 300px"></el-input>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTableData">确 定</el-button>
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
    return {
      addTitle: "",
      xyForm: {},
      dialogFormVisible: false,
      tableData1: [
        {
          xmlbmc: "教工男子青年组",
          xmlbbh: "1",
        },
        {
          xmlbmc: "教工女子青年组",
          xmlbbh: "2",
        },
        {
          xmlbmc: "学生女子组",
          xmlbbh: "3",
        },
      ],
      tableData2: [
        {
          xmbh: "3",
          xmmc: "女子一百米",
        },
        {
          xmbh: "5",
          xmmc: "男子四百米",
        },
      ],
    };
  },
  computed: {},
  mounted() {
    this.getYtdxmlb(); // 获取已添加项目类别
    this.getYtdxm(); // 获取已添加项目
  },
  methods: {
    // 获取已添加项目类别
    getYtdxmlb() {
      this.$http.post("/api", {}).then((res) => {
        if (res.code === 0) {
          this.tableData1 = res.data;
        } else {
          this.$message({
            type: "error",
            message: "获取已添加项目类别失败",
          });
        }
      });
    },
    // 获取已添加项目
    getYtdxm() {
      this.$http.post("/api", {}).then((res) => {
        if (res.code === 0) {
          this.tableData2 = res.data;
        } else {
          this.$message({
            type: "error",
            message: "获取已添加项目失败",
          });
        }
      });
    },
    // 删除表格数据
    deleteData(data, val) {
      this.$confirm("是否删除该数据?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$message({
          type: "success",
          message: "删除成功!",
        });
      });
      console.log(data);
    },
    // 查看
    viewData(data, val) {
      console.log(data);
      this.addTitle = val;
      if (val === "1") {
        this.xyForm = { ...data };
      } else {
        this.xyForm.xmlbmc = data.xmmc;
        this.xyForm.xmlbbh = data.xmbh;
      }
      this.dialogFormVisible = true;
    },
    tjxxClick(val) {
      this.xyForm = {};
      this.addTitle = val;
      this.dialogFormVisible = true;
    },
    tjxyClick(val) {
      this.xyForm = {};
      this.addTitle = val;
      this.dialogFormVisible = true;
    },
    addTableData() {
      if (this.addTitle === "1") {
        // this.tableData1.push({
        //   xmlbmc: this.xyForm.xmlbmc,
        //   xmlbbh: this.xyForm.xmlbbh,
        // });
        const obj = {
          xmlbmc: this.xyForm.xmlbmc,
          xmlbbh: this.xyForm.xmlbbh,
        };
        this.$http.post("/api", obj).then((res) => {
          if (res.code === 0) {
            this.getYtdxmlb();
            this.dialogFormVisible = false;
            this.xyForm = {};
            this.$message({
              type: "success",
              message: "操作成功",
            });
          } else {
            this.$message({
              type: "error",
              message: "操作失败",
            });
          }
        });
      } else {
        // this.tableData2.push({
        //   xmbh: this.xyForm.xmlbbh,
        //   xmmc: this.xyForm.xmlbmc,
        // });
        const obj = {
          xmmc: this.xyForm.xmlbmc,
          xmbh: this.xyForm.xmlbbh,
        };
        this.$http.post("/api", obj).then((res) => {
          if (res.code === 0) {
            this.getYtdxm();
            this.dialogFormVisible = false;
            this.xyForm = {};
            this.$message({
              type: "success",
              message: "操作成功",
            });
          } else {
            this.$message({
              type: "error",
              message: "操作失败",
            });
          }
        });
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.xygl {
  .action {
    color: blue;
  }
  height: 100%;
  // border: 1px solid;
  .content {
    height: calc(100% - 50px);
    border: 1px solid #ebeef5;
    .tableTop {
      height: 40px;
      border-bottom: 1px solid #ebeef5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20%;
      span {
        font-size: 20px;
      }
    }
    .tableDiv {
      display: flex;
      height: calc(100% - 40px);
      .xxTable {
        width: 50%;
        height: 100%;
        padding: 10px;
      }
    }
  }
  .header {
    height: 50px;
  }
}
</style>