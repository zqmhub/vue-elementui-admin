<template>
  <div class="Button">
    <h3>基础用法</h3>
    <div>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>
    <hr />
    <h3>禁用</h3>

    <div>
      <el-link disabled>默认链接</el-link>
      <el-link type="primary" disabled>主要链接</el-link>
      <el-link type="success" disabled>成功链接</el-link>
      <el-link type="warning" disabled>警告链接</el-link>
      <el-link type="danger" disabled>危险链接</el-link>
      <el-link type="info" disabled>信息链接</el-link>
    </div>
    <hr />
    <h3>下划线</h3>
    <div>
      <el-link :underline="false">无下划线</el-link>
      <el-link>有下划线</el-link>
    </div>
    <hr />
    <h3>有图标</h3>
    <div>
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link>
        查看
        <i class="el-icon-view el-icon--right"></i>
      </el-link>
    </div>
    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/link"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" >
.Button {
  h3 {
    padding: 30px 0;
  }
  .el-row {
    margin-bottom: 10px;
  }
}
</style>
