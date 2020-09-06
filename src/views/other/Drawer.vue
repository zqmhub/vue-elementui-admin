<template>
  <div class="Timeline">
    <h3>基础用法</h3>
    <el-radio-group v-model="direction">
      <el-radio label="ltr">从左往右开</el-radio>
      <el-radio label="rtl">从右往左开</el-radio>
      <el-radio label="ttb">从上往下开</el-radio>
      <el-radio label="btt">从下往上开</el-radio>
    </el-radio-group>

    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</el-button>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer>
    <hr />

    <h3>多层嵌套</h3>
    <el-button @click="drawer1 = true" type="primary" style="margin-left: 16px;">点我打开</el-button>

    <el-drawer title="我是外面的 Drawer" :visible.sync="drawer1" size="50%">
      <div>
        <el-button @click="innerDrawer = true">打开里面的!</el-button>
        <el-drawer
          title="我是里面的"
          :append-to-body="true"
          :before-close="handleClose"
          :visible.sync="innerDrawer"
        >
          <p>_(:зゝ∠)_</p>
        </el-drawer>
      </div>
    </el-drawer>
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
      drawer: false,
      direction: "rtl",

      drawer1: false,
      innerDrawer: false,
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
.Timeline .radio {
  padding: 10px 0;
}
</style>