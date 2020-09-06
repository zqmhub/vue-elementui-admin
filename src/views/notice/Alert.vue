<template>
  <div class="alert">
    <h3>基础用法</h3>
    <el-alert title="成功提示的文案" type="success"></el-alert>
    <el-alert title="消息提示的文案" type="info"></el-alert>
    <el-alert title="警告提示的文案" type="warning"></el-alert>
    <el-alert title="错误提示的文案" type="error"></el-alert>
    <hr />
    <h3>自定义关闭按钮</h3>
    <el-alert title="不可关闭的 alert" type="success" :closable="false"></el-alert>
    <el-alert title="自定义 close-text" type="info" close-text="知道了"></el-alert>
    <el-alert title="设置了回调的 alert" type="warning" @close="hello"></el-alert>
    <hr />
    <h3>带图标</h3>
    <el-alert title="成功提示的文案" type="success" show-icon></el-alert>
    <el-alert title="消息提示的文案" type="info" show-icon></el-alert>
    <el-alert title="警告提示的文案" type="warning" show-icon></el-alert>
    <el-alert title="错误提示的文案" type="error" show-icon></el-alert>
    <hr />
    <h3>文字居中</h3>
    <el-alert title="成功提示的文案" type="success" center show-icon></el-alert>
    <el-alert title="消息提示的文案" type="info" center show-icon></el-alert>
    <el-alert title="警告提示的文案" type="warning" center show-icon></el-alert>
    <el-alert title="错误提示的文案" type="error" center show-icon></el-alert>
    <hr />
    <h3>有图标和附带说明</h3>
    <el-alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
    <el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
    <el-alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
    <el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
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
    return {};
  },
};
</script>
<style lang="scss" >
.alert .el-alert {
  margin-bottom: 15px;
}
</style>