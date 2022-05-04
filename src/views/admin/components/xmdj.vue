<template>
  <!-- 登记成绩 -->
  <div class="djcj">
    <el-select
      v-model="selectValue"
      placeholder="请选择"
      style="width: 25%; margin-right: 30px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <!--  -->
    <el-table :data="tableData" height="450px">
      <el-table-column prop="scbh" label="赛程编号"> </el-table-column>
      <el-table-column prop="xmmc" label="项目名称"> </el-table-column>
      <el-table-column prop="startTime" label="开始时间"> </el-table-column>
      <el-table-column prop="endTime" label="结束时间"> </el-table-column>
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
        <el-form-item label="学号" prop="id">
          <el-input v-model="form.id"></el-input>
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
        <el-table-column prop="id" label="学号"> </el-table-column>
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
          <el-form-item label="学号" prop="id">
            <el-input v-model="form.id"></el-input>
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
      selectValue: "",
      djcjShow: false,
      cklhShow: false,
      updataDia: false,
      form: {
        id: "",
        score: "",
        time: "",
      },
      djcjRules: {
        id: [{ required: true, message: "请输入学号", trigger: "blur" }],
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
      options: [
        {
          value: "选项1",
          label: "计算机科学与技术学院第三届院运会",
        },
        {
          value: "选项2",
          label: "计算机科学与技术学院第三届院运会",
        },
        {
          value: "选项3",
          label: "计算机科学与技术学院第三届院运会",
        },
      ],
      tableData: [
        {
          scbh: "1",
          xmmc: "学生组男子100米",
          startTime: "2022-03-03 15:20",
          endTime: "2022-03-03 15:40",
        },
      ],
      hisTableData: [
        {
          id: "5120183075",
          score: "100",
          getTime: "2022-03-03 15:20",
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
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