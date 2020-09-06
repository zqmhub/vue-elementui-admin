<template>
  <div class="alert">
    <h3>基础用法</h3>
    <el-tooltip placement="top">
      <div slot="content">
        多行信息
        <br />第二行信息
      </div>
      <el-button>Top center</el-button>
    </el-tooltip>

    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/alert"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style lang="scss" >
.alert .el-alert {
  margin-bottom: 15px;
}
</style>