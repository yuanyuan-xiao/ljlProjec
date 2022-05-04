<template>
  <!-- 学院管理 -->
  <div class="xygl">
    <div class="header">
      <el-button @click="tjxxClick('1')" type="primary">添加运动会</el-button>
      <el-button @click="tjxyClick('2')" type="primary">添加赛程</el-button>
    </div>
    <div class="content">
      <div class="tableTop">
        <span>已添加运动会</span>
        <span>已添加赛程</span>
      </div>
      <div class="tableDiv">
        <div class="xxTable" style="margin-right: 10px">
          <el-table :data="tableData1" border height="100%" style="width: 100%">
            <!-- <el-table-column type="index" label="序号" width="50">
            </el-table-column> -->
            <el-table-column prop="ydhbm" label="运动会编码"> </el-table-column>
            <el-table-column
              show-overflow-tooltip
              prop="ydhmc"
              label="运动会名称"
            >
            </el-table-column>

            <el-table-column
              prop="ydhkssj"
              label="运动会开始时间"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="ydhjssj"
              label="运动会开始时间"
              show-overflow-tooltip
            >
            </el-table-column>
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
            <el-table-column prop="scbh" label="赛程编号"> </el-table-column>
            <el-table-column prop="scmc" show-overflow-tooltip label="赛程名称"> </el-table-column>
            <el-table-column
              prop="sckssj"
              label="赛程开始时间"
              
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="scjssj"
              label="赛程开始时间"
              show-overflow-tooltip
            >
            </el-table-column>
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
      :title="addTitle === '1' ? '添加运动会' : '添加赛程'"
      :visible.sync="dialogFormVisible"
      width="500px"
    >
      <el-form :model="xyForm" label-width="100px" label-position="right">
        <el-form-item :label="addTitle === '1' ? '运动会名称' : '赛程名称'">
          <el-input v-model="xyForm.ydhmc" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item :label="addTitle === '1' ? '运动会编号' : '赛程编号'">
          <el-input v-model="xyForm.ydhbm" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="xyForm.kssj"
            type="date"
            value-format="yyyy-MM-dd"
            format="yyyy-MM-dd"
            style="width: 300px"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            v-model="xyForm.jssj"
            type="date"
            value-format="yyyy-MM-dd"
            format="yyyy-MM-dd"
            style="width: 300px"
            placeholder="选择日期"
          >
          </el-date-picker>
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
          ydhbm: "1",
          ydhmc: "计算机科学与技术学院第三届运动会",
          ydhkssj: "2022-04-05",
          ydhjssj: "2022-05-20",
        },
        {
          ydhbm: "2",
          ydhmc: "计算机科学与技术学院第二届运动会",
          ydhkssj: "2022-04-05",
          ydhjssj: "2022-05-20",
        },
        {
          ydhbm: "3",
          ydhmc: "计算机科学与技术学院第一届运动会",
          ydhkssj: "2022-04-05",
          ydhjssj: "2022-05-20",
        },
      ],
      tableData2: [
        {
          scbh: "3",
          scmc: "学生男子组一百米",
          sckssj: "2022-05-10",
          scjssj: "2022-05-30",
        },
        {
          scbh: "5",
          scmc: "男子四百米",
          sckssj: "2022-05-10",
          scjssj: "2022-05-30",
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
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
    viewData(data, val) {
      console.log(data);
      this.addTitle = val;
      if (val === "1") {
        this.xyForm = { ...data };
        this.xyForm.kssj = data.ydhkssj;
        this.xyForm.jssj = data.ydhkssj;
      } else {
        this.xyForm.ydhbm = data.scbh;
        this.xyForm.ydhmc = data.scmc;
        this.xyForm.kssj = data.sckssj;
        this.xyForm.jssj = data.scjssj;
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
      console.log(this.xyForm)
      if (this.addTitle === "1") {
        this.tableData1.push({
          ydhbm: this.xyForm.ydhbm,
          ydhmc: this.xyForm.ydhmc,
          ydhkssj: this.xyForm.kssj,
          ydhjssj: this.xyForm.jssj,
        });
        this.dialogFormVisible = false;
        this.xyForm = {};
      } else {
        this.tableData2.push({
          scmc: this.xyForm.ydhmc,
          scbh: this.xyForm.ydhbm,
          sckssj: this.xyForm.kssj,
          scjssj: this.xyForm.jssj,
        });
        this.dialogFormVisible = false;
        this.xyForm = {};
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