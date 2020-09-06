<template>
  <div class="Timeline">
    <h3>基础用法</h3>
    <el-calendar v-model="value"></el-calendar>

    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/Timeline"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      value: new Date(),
    };
  },
  methods: {},
};
</script>
<style lang="scss" >
.Timeline .radio {
  padding: 10px 0;
}
</style>