<template>
  <div class="Notification">
    <h3>基本用法</h3>
    <el-button plain @click="open0">可自动关闭</el-button>
    <el-button plain @click="open01">不会自动关闭</el-button>
    <hr />
    <h3>不同状态</h3>
    <el-button plain @click="open11">成功</el-button>
    <el-button plain @click="open22">警告</el-button>
    <el-button plain @click="open33">消息</el-button>
    <el-button plain @click="open44">错误</el-button>
    <hr />
    <h3>自定义弹出位置</h3>
    <el-button plain @click="open1">右上角</el-button>
    <el-button plain @click="open2">右下角</el-button>
    <el-button plain @click="open3">左下角</el-button>
    <el-button plain @click="open4">左上角</el-button>
    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/Notification"
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
    open0() {
      const h = this.$createElement;

      this.$notify({
        title: "标题名称",
        message: h(
          "i",
          { style: "color: teal" },
          "这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案"
        ),
      });
    },

    open01() {
      this.$notify({
        title: "提示",
        message: "这是一条不会自动关闭的消息",
        duration: 0,
      });
    },

    open11() {
      this.$notify({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success",
      });
    },

    open22() {
      this.$notify({
        title: "警告",
        message: "这是一条警告的提示消息",
        type: "warning",
      });
    },

    open33() {
      this.$notify.info({
        title: "消息",
        message: "这是一条消息的提示消息",
      });
    },

    open44() {
      this.$notify.error({
        title: "错误",
        message: "这是一条错误的提示消息",
      });
    },

    open1() {
      this.$notify({
        title: "自定义位置",
        message: "右上角弹出的消息",
      });
    },

    open2() {
      this.$notify({
        title: "自定义位置",
        message: "右下角弹出的消息",
        position: "bottom-right",
      });
    },

    open3() {
      this.$notify({
        title: "自定义位置",
        message: "左下角弹出的消息",
        position: "bottom-left",
      });
    },

    open4() {
      this.$notify({
        title: "自定义位置",
        message: "左上角弹出的消息",
        position: "top-left",
      });
    },
  },
};
</script>
<style lang="scss" >
.Notification {
}
</style>