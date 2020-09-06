<template>
  <div class="MessageBox">
    <h3>确认消息</h3>
    <h4>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</h4>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
    <hr />
    <h3>使用 HTML 片段</h3>
    <h4>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</h4>
    <el-button type="text" @click="open1">点击打开 Message Box</el-button>
    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/MessageBox"
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
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    open1() {
      this.$alert("<strong>这是 <i>HTML</i> 片段</strong>", "HTML 片段", {
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>
<style lang="scss" >
.MessageBox {
}
</style>