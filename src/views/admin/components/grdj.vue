<template>
  <!-- 登记成绩 -->
  <div class="djcj">
    <el-input v-model="query" style="width: 300px; margin-right: 30px">
      <i slot="prefix" class="el-input__icon el-icon-search"></i
    ></el-input>
    <el-button type="primary" @click="getQuery">查询</el-button>
    <!--  -->
    <el-table :data="tableData" height="450px">
      <el-table-column prop="id" label="选手"> </el-table-column>
      <el-table-column prop="xuehao" label="学号"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column label="操作">
        <el-button type="text" @click="cjdjDia">成绩登记</el-button>
        <el-button type="text" @click="cklhDia">查看历史</el-button>
      </el-table-column>
    </el-table>
    <!--  -->
    <!--  -->
    <el-dialog
      title="成绩登记"
      :visible.sync="djcjShow"
      width="50%"
      :before-close="handleClose"
    >
      <el-form
        label-position="right"
        :model="form"
        label-width="100px"
        :rules="djcjRules"
        ref="djcjForm"
      >
        <el-form-item label="运动会" prop="ydh">
          <el-input v-model="form.ydh"></el-input>
        </el-form-item>
        <el-form-item label="赛程" prop="sc">
          <el-input v-model="form.sc"></el-input>
        </el-form-item>
        <el-form-item label="成绩" prop="score">
          <el-input v-model="form.score"></el-input>
        </el-form-item>
        <el-form-item label="获得时间" prop="time">
          <el-input v-model="form.time"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDia">关闭</el-button>
        <el-button type="primary" @click="djcjBtn('djcjForm', 'once')"
          >登记</el-button
        >
        <el-button type="primary" @click="djcjBtn('djcjForm', 'keep')"
          >继续登记</el-button
        >
      </div>
    </el-dialog>
    <!--  -->
    <!--  -->
    <el-dialog title="历史登记" :visible.sync="cklhShow" width="70%">
      <el-table :data="hisTableData" height="450px">
        <el-table-column prop="ydh" label="运动会"> </el-table-column>
        <el-table-column prop="sc" label="赛程"> </el-table-column>
        <el-table-column prop="score" label="成绩"> </el-table-column>
        <el-table-column prop="getTime" label="获得时间"> </el-table-column>
        <el-table-column label="操作">
          <el-button type="text" @click="delItem">删除</el-button>
          <el-button type="text" @click="updataItem">修改</el-button>
        </el-table-column>
      </el-table>
      <el-dialog
        title="修改成绩"
        :visible.sync="updataDia"
        width="50%"
        append-to-body
      >
        <el-form
          label-position="right"
          :model="form"
          label-width="100px"
          :rules="djcjRules"
          ref="xgcjForm"
        >
          <el-form-item label="运动会" prop="ydh">
            <el-input v-model="form.ydh"></el-input>
          </el-form-item>
          <el-form-item label="赛程" prop="sc">
            <el-input v-model="form.sc"></el-input>
          </el-form-item>
          <el-form-item label="成绩" prop="score">
            <el-input v-model="form.score"></el-input>
          </el-form-item>
          <el-form-item label="获得时间" prop="time">
            <el-input v-model="form.time"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeUpdataDia">关闭</el-button>
          <el-button type="primary" @click="updatajBtn('xgcjForm')"
            >修改</el-button
          >
        </div>
      </el-dialog>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "xmdj",
  props: {},
  components: {},
  data() {
    return {
      query: "",
      djcjShow: false,
      cklhShow: false,
      updataDia: false,
      form: {
        ydh: "",
        sc: "",
        score: "",
        time: "",
      },
      djcjRules: {
        ydh: [{ required: true, message: "请输入运动会", trigger: "blur" }],
        sc: [{ required: true, message: "请输入赛程", trigger: "blur" }],
        score: [
          {
            required: true,
            message: "请输入成绩",
            trigger: "blur",
          },
        ],
        time: [
          {
            required: true,
            message: "请选择时间",
            trigger: "blur",
          },
        ],
      },
      tableData: [
        {
          id: "1",
          xuehao: "5120183075",
          name: "xyy",
        },
      ],
      hisTableData: [
        {
          ydh: "第三届运动会",
          sc: "男子100米",
          score: "100",
          getTime: "2022-03-03 15:20",
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    // 查询
    getQuery() {
      console.log(this.query);
    },
    cjdjDia() {
      this.djcjShow = true;
    },
    cklhDia() {
      this.cklhShow = true;
    },
    async djcjBtn(formName, model) {
      const valid = await this.$refs[formName].validate();
      if (valid) {
        console.log("添加成功");
        if (model === "keep") {
          this.$refs["djcjForm"].resetFields();
          return;
        }
        this.closeDia();
      }
    },
    closeDia() {
      this.djcjShow = false;
      this.$refs["djcjForm"].resetFields();
    },
    handleClose() {
      this.closeDia();
    },
    // 删除 记录
    delItem() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 修改数据
    updataItem() {
      this.updataDia = true;
    },
    closeUpdataDia() {
      this.updataDia = false;
      this.$refs["xgcjForm"].resetFields();
    },
    async updatajBtn(formName) {
      const valid = await this.$refs[formName].validate();
      if (valid) {
        this.$confirm("是否确认修改此数据", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            console.log("添加成功");
            this.closeUpdataDia();
            this.$message({
              type: "success",
              message: "修改成功!",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消修改",
            });
          });
      }
    },
  },
};
</script>
<style lang='scss' scoped>
</style>