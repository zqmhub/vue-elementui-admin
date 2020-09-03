<template>
  <div class="InputNumber">
    <h3>基础用法</h3>
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    <hr />
    <h3>禁用</h3>
    <el-input-number v-model="num" :disabled="true"></el-input-number>
    <hr />
    <h3>精度</h3>
    <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
    <hr />
    <h3>按钮位置</h3>
    <el-input-number
      v-model="num"
      controls-position="right"
      @change="handleChange"
      :min="1"
      :max="10"
    ></el-input-number>
    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/InputNumber"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    handleChange() {},
  },
};
</script>
<style lang="scss" scoped>
</style>