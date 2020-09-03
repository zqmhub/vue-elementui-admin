<template>
  <el-menu
    class="menu-nav"
    router
    :default-active="currentPath"
    background-color="#20222A"
    text-color="rgba(255,255,255,.8)"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <el-menu-item index="/console">
      <i class="el-icon-location"></i>
      <span slot="title">主页</span>
    </el-menu-item>
    <el-menu-item index="/users">
      <i class="el-icon-menu"></i>
      <span slot="title">用户</span>
    </el-menu-item>
    <el-menu-item index="/articles">
      <i class="el-icon-document"></i>
      <span slot="title">文章</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-s-grid"></i>
        <span>组件库</span>
      </template>
      <el-submenu index="4-1">
        <template slot="title">
          <i class="el-icon-eleme"></i>
          <span>基础组件</span>
        </template>
        <el-menu-item index="/Layout">Layout 布局</el-menu-item>
        <el-menu-item index="/Container">Container 布局容器</el-menu-item>

        <el-menu-item index="/Button">Button 按钮</el-menu-item>
        <el-menu-item index="/Link">Link 文字链接</el-menu-item>
      </el-submenu>
      <el-submenu index="4-2">
        <template slot="title">
          <i class="el-icon-eleme"></i>
          <span>表单组件</span>
        </template>
        <el-menu-item index="/Radio">Radio 单选框</el-menu-item>
        <el-menu-item index="/Checkbox">Checkbox 多选框</el-menu-item>
        <el-menu-item index="/Input">Input 输入框</el-menu-item>
        <el-menu-item index="/InputNumber">InputNumber 计数器</el-menu-item>
        <el-menu-item index="/Select">Select 选择器</el-menu-item>
        <el-menu-item index="/Cascader">Cascader 级联选择器</el-menu-item>
        <el-menu-item index="/Switch">Switch 开关</el-menu-item>
        <el-menu-item index="/Slider">Slider 滑块</el-menu-item>
        <el-menu-item index="/TimePicker">TimePicker 时间选择器</el-menu-item>
        <el-menu-item index="/DatePicker">DatePicker 日期选择器</el-menu-item>
        <el-menu-item index="/DateTimePicker">DateTimePicker 日期时间选择器</el-menu-item>
        <el-menu-item index="/Upload">Upload 上传</el-menu-item>
        <el-menu-item index="/Rate">Rate 评分</el-menu-item>
        <el-menu-item index="/Form">Form 表单</el-menu-item>
      </el-submenu>
      <!-- <el-menu-item index="/password">修改密码 (空)</el-menu-item> -->
    </el-submenu>
    <el-menu-item index="/echarts">
      <i class="el-icon-share"></i>
      <span slot="title">图表</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      currentPath: location.pathname,
    };
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
.menu-nav:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
