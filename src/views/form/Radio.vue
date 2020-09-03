<template>
  <div class="Radio">
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>

    <hr />
    <h3>禁用状态</h3>
    <template>
      <el-radio disabled v-model="radio0" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="radio0" label="选中且禁用">选中且禁用</el-radio>
    </template>
    <hr />
    <h3>按钮样式</h3>
    <div>
      <el-radio-group v-model="radio1">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio2" size="medium">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio3" size="small">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京" disabled></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio4" disabled size="mini">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <h3>带有边框</h3>
    <template>
      <div>
        <el-radio v-model="radio5" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio5" label="2" border>备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio v-model="radio6" label="1" border size="medium">备选项1</el-radio>
        <el-radio v-model="radio6" label="2" border size="medium">备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio7" size="small">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border disabled>备选项2</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio8" size="mini" disabled>
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </div>
    </template>

    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/radio"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      radio: "1",
      radio0: "选中且禁用",
      radio1: "上海",
      radio2: "上海",
      radio3: "上海",
      radio4: "上海",
      radio5: "1",
      radio6: "1",
      radio7: "1",
      radio8: "1",
    };
  },
};
</script>
<style lang="scss" scoped>
</style>