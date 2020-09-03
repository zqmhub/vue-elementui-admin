<template>
  <div class="DateTimePicker">
    <h3>固定时间点</h3>
    <div class="demo-block">
      <div class="source">
        <div class="flex">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
              v-model="value2"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">设置默认时间</span>
            <el-date-picker
              v-model="value3"
              type="datetime"
              placeholder="选择日期时间"
              default-time="12:00:00"
            ></el-date-picker>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/datetime-picker"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      value3: "",
    };
  },
  methods: {},
};
</script>
<style lang="scss" >
.DateTimePicker {
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .demo-block .flex {
    display: flex;
  }
  .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    flex: 1;
  }
}
</style>