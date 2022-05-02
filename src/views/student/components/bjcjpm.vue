<template>
  <!-- table -->
  <div class="ckpm">
    <div class="container">
      <div class="right-container">
        <el-select
          v-model="selectValue"
          placeholder="请选择"
          style="width: 20%; margin-right: 30px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input v-model="query" style="width: 300px; margin-right: 30px">
          <i slot="prefix" class="el-input__icon el-icon-search"></i
        ></el-input>
        <el-button type="primary" @click="getQuery">查询</el-button>
        <el-table :data="tableData" height="450px">
          <el-table-column
            v-for="(item, index) in tableHead"
            :prop="item.prop"
            :label="item.label"
            :key="index"
          >
          </el-table-column>
        </el-table>
        <div class="pagination" style="margin-top: 20px">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="page.total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Bjpm",
  components: {},
  data() {
    return {
      page: {
        total: 100
      },
      selectValue: "",
      query: "",
      tableData: [
        {
          id: "0001",
          mc: "第一名",
          name: "杨冲",
          zubie: "李乐",
          banji: "软件1805",
          score: "5分12秒",
        },
        {
          id: "0001",
          mc: "第一名",
          name: "杨冲",
          zubie: "李乐",
          banji: "软件1805",
          score: "5分12秒",
        },
        {
          id: "0001",
          mc: "第一名",
          name: "杨冲",
          zubie: "李乐",
          banji: "软件1805",
          score: "5分12秒",
        },
        {
          id: "0001",
          mc: "第一名",
          name: "杨冲",
          zubie: "李乐",
          banji: "软件1805",
          score: "5分12秒",
        },
        {
          id: "0001",
          mc: "第一名",
          name: "杨冲",
          zubie: "李乐",
          banji: "软件1805",
          score: "5分12秒",
        },
        {
          id: "0001",
          mc: "第一名",
          name: "杨冲",
          zubie: "李乐",
          banji: "软件1805",
          score: "5分12秒",
        },
        {
          id: "0001",
          mc: "第一名",
          name: "杨冲",
          zubie: "李乐",
          banji: "软件1805",
          score: "5分12秒",
        },
        {
          id: "0001",
          mc: "第一名",
          name: "杨冲",
          zubie: "李乐",
          banji: "软件1805",
          score: "5分12秒",
        },
        {
          id: "0001",
          mc: "第一名",
          name: "杨冲",
          zubie: "李乐",
          banji: "软件1805",
          score: "5分12秒",
        },
        {
          id: "0001",
          mc: "第一名",
          name: "杨冲",
          zubie: "李乐",
          banji: "软件1805",
          score: "5分12秒",
        },
        {
          id: "0001",
          mc: "第一名",
          name: "杨冲",
          zubie: "李乐",
          banji: "软件1805",
          score: "5分12秒",
        },
        {
          id: "0001",
          mc: "第一名",
          name: "杨冲",
          zubie: "李乐",
          banji: "软件1805",
          score: "5分12秒",
        },
      ],
      tableHead: [
        { label: "序号", prop: "id" },
        { label: "名次", prop: "mc" },
        { label: "组别", prop: "zubie" },
        { label: "班级", prop: "banji" },
        { label: "得分", prop: "score" },
      ],
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
    };
  },
  computed: {},
  mounted() {},
  methods: {
    // 查询按钮
    getQuery() {
      console.log(this.query);
    },
    // tree click
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>
<style lang='scss' scoped>
.ckpm {
  .container {
    width: 100%;
    height: calc(100% - 30px);
    display: flex;
  }
  .left-container {
    width: 300px;
    margin-right: 30px;
    border: 1px solid #ccc;
  }
  .right-container {
    flex: 1;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>