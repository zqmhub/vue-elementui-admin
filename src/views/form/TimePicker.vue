<template>
  <div class="TimePicker">
    <h3>固定时间点</h3>
    <el-time-select
      v-model="value"
      :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
      placeholder="选择时间"
    ></el-time-select>
    <hr />
    <h3>任意时间点</h3>
    <div class="picker_block">
      <el-time-picker
        v-model="value1"
        :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
        placeholder="任意时间点"
      ></el-time-picker>
      <el-time-picker
        arrow-control
        v-model="value2"
        :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
        placeholder="任意时间点"
      ></el-time-picker>
    </div>

    <h3>固定时间范围</h3>

    <div class="picker_block">
      <el-time-select
        placeholder="起始时间"
        v-model="startTime"
        :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
      ></el-time-select>
      <el-time-select
        placeholder="结束时间"
        v-model="endTime"
        :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }"
      ></el-time-select>
    </div>

    <hr />
    <h3>任意时间范围</h3>

    <div class="picker_block">
      <el-time-picker
        is-range
        v-model="value3"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      ></el-time-picker>
      <el-time-picker
        is-range
        arrow-control
        v-model="value4"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      ></el-time-picker>
    </div>

    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/TimePicker"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      value: "",
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
      startTime: "",
      endTime: "",
      value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
    };
  },
  methods: {},
};
</script>
<style lang="scss" >
.TimePicker {
  .picker_block {
    .el-date-editor + .el-date-editor {
      margin-left: 10px;
    }
  }
}
</style>