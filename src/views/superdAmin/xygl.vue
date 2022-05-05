<template>
  <!-- 学院管理 -->
  <div class="xygl">
    <div class="header">
      <el-button @click="tjxxClick('1')" type="primary">添加学校</el-button>
      <el-button @click="tjxyClick('2')" type="primary">添加学院</el-button>
    </div>
    <div class="content">
      <div class="tableTop">
        <span>已添加学校</span>
        <span>已添加学院</span>
      </div>
      <div class="tableDiv">
        <div class="xxTable" style="margin-right: 10px">
          <el-table :data="tableData1" border height="100%" style="width: 100%">
            <el-table-column type="index" label="序号" width="50">
            </el-table-column>
            <el-table-column prop="xxmc" label="学校名称"> </el-table-column>
            <el-table-column prop="xxdz" label="学校地址"> </el-table-column>
            <el-table-column prop="xxqyh" label="学校区域号"> </el-table-column>
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
            <el-table-column type="index" label="序号" width="50">
            </el-table-column>
            <el-table-column prop="xymc" label="学院名称"> </el-table-column>
            <el-table-column prop="ssxx" label="所属学校"> </el-table-column>
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
      :title="addTitle === '1' ? '添加学校' : '添加学院'"
      :visible.sync="dialogFormVisible"
      width="500px"
    >
      <el-form :model="xyForm" label-width="100px" label-position="right">
        <el-form-item :label="addTitle === '1' ? '学校名称' : '学院名称'">
          <el-input v-model="xyForm.xxmc" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item v-if="addTitle === '1'" label="学校地址">
          <el-input v-model="xyForm.xxdz" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item :label="addTitle === '1' ? '学校区域号' : '所属学校'">
          <el-input v-model="xyForm.xxqyh" style="width: 300px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTableData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex';
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
          xxmc: "西南科技大学",
          xxqyh: "60000",
          xxdz: "绵阳市青羊村",
          id: "1231313",
        },
        {
          xxmc: "四川师范大学",
          xxqyh: "854621",
          xxdz: "绵阳市青羊村",
          id: "1231313",
        },
      ],
      tableData2: [
        {
          xymc: "计算机科学与技术学院",
          ssxx: "西南科技大学",
          id: "56457567",
        },
        {
          xymc: "材料学院",
          ssxx: "西南科技大学",
          id: "897885664",
        },
      ],
    };
  },
  computed: {
    ...mapState(['GETUSER'])
  },
  mounted() {
    console.log('first',this.$store.state)
    this.getYtjxx(); // 查询已添加学校
    this.getYtjxy(); // 查询已添加学院
  },
  methods: {
    // 查询已添加学校

    getYtjxx() {
      this.$http.post("/api", {}).then((res) => {
        if (res.code === 0) {
          this.tableData1 = res.data;
        } else {
          this.$message({
            type: "error",
            message: "获取已添加学校数据失败!",
          });
        }
      });
    },
    //获取已添加学院
    getYtjxy() {
      this.$http.post("/api", {}).then((res) => {
        if (res.code === 0) {
          this.tableData2 = res.data;
        } else {
          this.$message({
            type: "error",
            message: "获取已添加学院数据失败!",
          });
        }
      });
    },
    //删除表格数据
    deleteData(data, val) {
      this.$confirm("是否删除该数据?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        if (val === "1") {
          // 学校删除
          this.$http.post("/api", { id: data.id }).then((res) => {
            if (res.code === 0) {
              this.getYtjxx();
              this.$message({
                type: "success",
                message: "删除成功!",
              });
            } else {
              this.$message({
                type: "error",
                message: "删除失败!",
              });
            }
          });
        } else {
          //学院删除
          this.$http.post("/api", { id: data.id }).then((res) => {
            if (res.code === 0) {
              this.getYtjxy();
              this.$message({
                type: "success",
                message: "删除成功!",
              });
            } else {
              this.$message({
                type: "error",
                message: "删除失败!",
              });
            }
          });
        }
      });
      console.log(data);
    },
    //查看 （修改就在查看里面）
    viewData(data, val) {
      console.log(data);
      this.addTitle = val;
      if (val === "1") {
        this.xyForm = { ...data };
      } else {
        this.xyForm.xxmc = data.xymc;
        this.xyForm.xxqyh = data.ssxx;
        this.xyForm.id = data.id; //如果id存在则是修改
      }
      this.dialogFormVisible = true;
    },
    tjxxClick(val) {
      this.addTitle = val;
      this.dialogFormVisible = true;
    },
    tjxyClick(val) {
      this.addTitle = val;
      this.dialogFormVisible = true;
    },
    addTableData() {
      if (this.addTitle === "1") {
        // this.tableData1.push({
        //   xxmc: this.xyForm.xxmc,
        //   xxqyh: this.xyForm.xxqyh,
        // });
        const obj = {
          xxmc: this.xyForm.xxmc,
          xxdz: this.xyForm.xxdz,
          xxqyh: this.xyForm.xxqyh,
          id: this.xyForm.id,
        };
        this.$http.post("/api", obj).then((res) => {
          if (res.code === 0) {
            this.getYtjxx();
            this.dialogFormVisible = false;
            this.xyForm = {};
          } else {
            this.$message({
              type: "error",
              message: "操作失败!",
            });
          }
        });
      } else {
        // this.tableData2.push({
        //   xymc: this.xyForm.xxmc,
        //   ssxx: this.xyForm.xxqyh,
        // });
        const obj = {
          xymc: this.xyForm.xxmc,
          ssxx: this.xyForm.xxqyh,
          id: this.xyForm.id,
        };
        this.$http.post("/api", obj).then((res) => {
          if (res.code === 0) {
            this.getYtjxy();
            this.dialogFormVisible = false;
            this.xyForm = {};
          } else {
            this.$message({
              type: "error",
              message: "操作失败!",
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