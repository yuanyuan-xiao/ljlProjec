<template>
  <!-- 查看赛程 -->
  <div class="cksc">
    <el-select
      v-model="selectValue"
      placeholder="请选择"
      style="width: 30%; margin-right: 30px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-table :data="tableData" height="300px">
      <el-table-column
        v-for="(item, index) in tableHead"
        :prop="item.prop"
        :label="item.label"
        :key="index"
      >
      </el-table-column>
    </el-table>
    <div class="bottom">
      <h3>赛程提醒</h3>
      <el-table :data="warnTableData" height="200px">
        <el-table-column prop="id" label="序号" width="200"> </el-table-column>
        <el-table-column prop="warn" label="提醒"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "cksc",
  props: {},
  components: {},
  data() {
    return {
      selectValue: "",
      warnTableData: [
        {
          id: "1",
          warn: "计算机与技术学院第三届院运会提醒你,2022-03-03 15:00有一场男子100m决赛",
        },
        {
          id: "2",
          warn: "计算机与技术学院第三届院运会提醒你,2022-03-03 15:00有一场男子100m决赛",
        },
        {
          id: "3",
          warn: "计算机与技术学院第三届院运会提醒你,2022-03-03 15:00有一场男子100m决赛",
        },
      ],
      tableData: [
        {
          id: "1",
          xmmc: "学生男子组100米",
          startTime: "2022-2-13 15:00",
          endTime: "2022-2-13 15:30",
          address: "东区体育场",
        },
        {
          id: "1",
          xmmc: "学生男子组100米",
          startTime: "2022-2-13 15:00",
          endTime: "2022-2-13 15:30",
          address: "东区体育场",
        },
        {
          id: "1",
          xmmc: "学生男子组100米",
          startTime: "2022-2-13 15:00",
          endTime: "2022-2-13 15:30",
          address: "东区体育场",
        },
        {
          id: "1",
          xmmc: "学生男子组100米",
          startTime: "2022-2-13 15:00",
          endTime: "2022-2-13 15:30",
          address: "东区体育场",
        },
        {
          id: "1",
          xmmc: "学生男子组100米",
          startTime: "2022-2-13 15:00",
          endTime: "2022-2-13 15:30",
          address: "东区体育场",
        },
        {
          id: "1",
          xmmc: "学生男子组100米",
          startTime: "2022-2-13 15:00",
          endTime: "2022-2-13 15:30",
          address: "东区体育场",
        },
        {
          id: "1",
          xmmc: "学生男子组100米",
          startTime: "2022-2-13 15:00",
          endTime: "2022-2-13 15:30",
          address: "东区体育场",
        },
        {
          id: "1",
          xmmc: "学生男子组100米",
          startTime: "2022-2-13 15:00",
          endTime: "2022-2-13 15:30",
          address: "东区体育场",
        },
        {
          id: "1",
          xmmc: "学生男子组100米",
          startTime: "2022-2-13 15:00",
          endTime: "2022-2-13 15:30",
          address: "东区体育场",
        },
      ],
      tableHead: [
        { label: "赛程编码", prop: "id" },
        { label: "项目名称", prop: "xmmc" },
        { label: "开始时间", prop: "startTime" },
        { label: "结束时间", prop: "endTime" },
        { label: "赛程地点", prop: "address" },
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
  methods: {},
};
</script>
<style lang='scss' scoped>
.cksc {
  .bottom {
    margin: 20px;
  }
}
</style>