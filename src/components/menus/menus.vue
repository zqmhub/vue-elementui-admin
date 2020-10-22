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
      <el-submenu index="4-3">
        <template slot="title">
          <i class="el-icon-eleme"></i>
          <span>数据展示</span>
        </template>
        <el-menu-item index="/Table">Table 表格</el-menu-item>
        <el-menu-item index="/Progress">Progress 进度条</el-menu-item>
        <el-menu-item index="/Tree">Tree 树形控件</el-menu-item>
        <el-menu-item index="/Pagination">Pagination 分页</el-menu-item>
        <el-menu-item index="/Badge">Badge 标记</el-menu-item>
      </el-submenu>

      <el-submenu index="4-4">
        <template slot="title">
          <i class="el-icon-eleme"></i>
          <span>弹框</span>
        </template>
        <el-menu-item index="/Alert">Alert 警告</el-menu-item>
        <el-menu-item index="/Message">Message 消息提示</el-menu-item>
        <el-menu-item index="/MessageBox">MessageBox 弹框</el-menu-item>
        <el-menu-item index="/Notification">Notification 通知</el-menu-item>
      </el-submenu>
      <el-submenu index="4-5">
        <template slot="title">
          <i class="el-icon-eleme"></i>
          <span>导航</span>
        </template>
        <el-menu-item index="/NavMenu">NavMenu 导航菜单</el-menu-item>
        <el-menu-item index="/Tabs">Tabs 标签页</el-menu-item>
        <el-menu-item index="/Dropdown">Dropdown 下拉菜单</el-menu-item>
        <el-menu-item index="/Steps">Steps 步骤条</el-menu-item>
      </el-submenu>
      <el-submenu index="4-6">
        <template slot="title">
          <i class="el-icon-eleme"></i>
          <span>其他</span>
        </template>
        <el-menu-item index="/Dialog">Dialog 对话框</el-menu-item>
        <el-menu-item index="/Tooltip">Tooltip 文字提示</el-menu-item>
        <el-menu-item index="/Popover">Popover 弹出框</el-menu-item>
        <el-menu-item index="/Card">Card 卡片</el-menu-item>
        <el-menu-item index="/Carousel">Carousel 走马灯</el-menu-item>
        <el-menu-item index="/Timeline">Timeline 时间线</el-menu-item>
        <el-menu-item index="/Calendar">Calendar 日历</el-menu-item>
        <el-menu-item index="/Drawer">Drawer 抽屉</el-menu-item>
      </el-submenu>
      <!-- <el-menu-item index="/password">修改密码 (空)</el-menu-item> -->
    </el-submenu>
    <el-submenu index="5-1">
      <template slot="title">
        <i class="el-icon-eleme"></i>
        <span>常用方法</span>
      </template>
      <el-menu-item index="/Highlight">搜索高亮</el-menu-item>
      <el-menu-item index="/TableInput">表格嵌套表单</el-menu-item>
      <el-menu-item index="/DiyDashBoard">自定义仪表盘</el-menu-item>
      <el-menu-item index="/CloseTip">页面关闭提示</el-menu-item>
      <el-menu-item index="/Date">时间格式问题</el-menu-item>
      <el-menu-item index="/Ueditor">集成百度编辑器</el-menu-item>
    </el-submenu>
    <!-- <el-menu-item index="/password">修改密码 (空)</el-menu-item> -->

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
