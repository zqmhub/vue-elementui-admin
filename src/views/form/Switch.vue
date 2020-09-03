<template>
  <div class="Switch">
    <h3>基础用法</h3>
    <div class="padding_bottom_15px">
      <el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"></el-switch>
    </div>

    <el-switch
      style="display: block"
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    ></el-switch>
    <hr />

    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/Switch"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
    };
  },
  methods: {},
};
</script>
<style lang="scss" >
.Switch {
  .el-switch {
  }
}
</style>