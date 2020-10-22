<template>
  <div class="closetip">
    <p class="title">elementui时间选择器输出时间格式</p>
    <el-date-picker
      @change="changeDate"
      format="yyyy年MM月dd日"
      value-format="yyyy:MM:dd"
      v-model="date"
      type="date"
      placeholder="选择日期"
    ></el-date-picker>
    <div>date:{{ date }}</div>


    <div>
      <pre>
        {{showCode}}
      </pre>
    </div>

   
  </div>
</template>
<script>
export default {
  name: "closetip",
  data() {
    return {
      date: "",
      showCode: "",
    };
  },

  created() {
    this.showCode = ` 
    <el-date-picker
      @change="changeDate"
      format="yyyy年MM月dd日" 
      value-format="yy:MM:dd"
      v-model="date"
      type="date"
      placeholder="选择日期"
    ></el-date-picker>`
  },

  mounted() {},
  methods: {
    changeDate(e) {
      console.log("切换时间", e);
    },
    changeDate1(e) {
      console.log("切换时间1", e);
    },
  },
};
</script>

