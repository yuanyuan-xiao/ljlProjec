<template>
  <!-- 赛程提醒 -->
  <div class="sctx">
    <div class="header">
      <el-select v-model="ydhmc" clearable placeholder="请选择">
        <el-option
          v-for="item in ydhOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="tableDiv">
      <el-table :data="tableData" height="100%">
        <el-table-column
          v-for="(item, index) in tableHeader"
          :prop="item.prop"
          :label="item.label"
          :key="index"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "赛程提醒",
  props: {},
  components: {},
  data() {
    return {
      ydhOptions: [],
      ydhmc: "",
      tableData: [],
      tableHeader: [
        { label: "赛程编号", prop: "scbh" },
        { label: "项目名称", prop: "xmmc" },
        { label: "开始时间", prop: "startTime" },
        { label: "结束时间", prop: "endTime" },
        { label: "赛程地点", prop: "address" },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
.sctx {
  height: 100%;
  .header{
    height: 40px;
    // border: 1px solid;
    margin-bottom: 10px;

  }
  .tableDiv{
    height: calc(100% - 50px);
  }
}
</style>