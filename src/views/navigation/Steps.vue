<template>
  <div class="steps">
    <h3>基础用法</h3>
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>

    <hr />
    <h3>基础用法</h3>
    <div style="height: 300px;">
      <el-steps direction="vertical" :active="1">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </div>

    <hr />

    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/steps"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      active: 0,
      active_v: 1,
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
  },
};
</script>
<style lang="scss" >
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>