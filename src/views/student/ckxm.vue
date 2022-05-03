<template>
  <!-- 查看项目 -->
  <div class="ckxm">
    <el-tabs v-model="activeName">
      <el-tab-pane label="查看项目" name="first"></el-tab-pane>
    </el-tabs>
    <el-form ref="form" :model="form" :inline="true">
      <el-form-item style="margin-right: 40px">
        <el-input v-model="form.query" style="width: 300px;">
          <i slot="prefix" class="el-input__icon el-icon-search"></i
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getQuery">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" height="450px">
      <el-table-column prop="id" label="序号" width="200"> </el-table-column>
      <el-table-column prop="xmmc" label="项目名称"> </el-table-column>
      <el-table-column prop="higthScore" label="最高得分"> </el-table-column>
      <el-table-column prop="time" label="获得时间"> </el-table-column>
    </el-table>
    <div class="pagination" style="margin-top: 20px">
      <el-pagination background layout="prev, pager, next" :total="page.total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "ckxm",
  props: {},
  components: {},
  data() {
    return {
      activeName: "first",
      form: {
        query: "",
      },
      page: {
        total: 100,
      },
      tableData: [
        {
          id: "1",
          xmmc: "青年组100米",
          higthScore: "5分15秒",
          time: "2022/05/12",
        },
        {
          id: "2",
          xmmc: "青年组100米",
          higthScore: "5分15秒",
          time: "2022/05/12",
        },
        {
          id: "1",
          xmmc: "青年组100米",
          higthScore: "5分15秒",
          time: "2022/05/12",
        },
        {
          id: "3",
          xmmc: "青年组100米",
          higthScore: "5分15秒",
          time: "2022/05/12",
        },
        {
          id: "4",
          xmmc: "青年组100米",
          higthScore: "5分15秒",
          time: "2022/05/12",
        },
        {
          id: "4",
          xmmc: "青年组100米",
          higthScore: "5分15秒",
          time: "2022/05/12",
        },
        {
          id: "4",
          xmmc: "青年组100米",
          higthScore: "5分15秒",
          time: "2022/05/12",
        },
        {
          id: "4",
          xmmc: "青年组100米",
          higthScore: "5分15秒",
          time: "2022/05/12",
        },
        {
          id: "4",
          xmmc: "青年组100米",
          higthScore: "5分15秒",
          time: "2022/05/12",
        },
        {
          id: "4",
          xmmc: "青年组100米",
          higthScore: "5分15秒",
          time: "2022/05/12",
        },
        {
          id: "4",
          xmmc: "青年组100米",
          higthScore: "5分15秒",
          time: "2022/05/12",
        },
        {
          id: "4",
          xmmc: "青年组100米",
          higthScore: "5分15秒",
          time: "2022/05/12",
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getQuery() {
      console.log("query");
    },
  },
};
</script>
<style lang='scss' scoped>
.ckxm {
  :deep(.el-form-item) {
    margin-right: 20px;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>