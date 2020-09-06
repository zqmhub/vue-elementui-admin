<template>
  <div class="Message">
    <h3>基础用法</h3>
    <h4>从顶部出现，3 秒后自动消失。</h4>
    <el-button :plain="true" @click="open">打开消息提示</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
    <hr />
    <h3>不同状态</h3>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/Message"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
  methods: {
    open() {
      this.$message("这是一条消息提示");
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode"),
        ]),
      });
    },

    open1() {
      this.$message("这是一条消息提示");
    },
    open2() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },

    open3() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },

    open4() {
      this.$message.error("错了哦，这是一条错误消息");
    },
  },
};
</script>
<style lang="scss" >
.Message {
}
</style>