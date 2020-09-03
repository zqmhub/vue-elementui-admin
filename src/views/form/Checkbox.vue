<template>
  <div class="Checkbox">
    <h3>基础用法</h3>
    <!-- `checked` 为 true 或 false -->
    <el-checkbox v-model="checked">备选项</el-checkbox>
    <hr />
    <h3>禁用状态</h3>

    <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
    <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
    <hr />
    <h3>多选框组</h3>

    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <hr />
    <h3>全选效果，部分选择</h3>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
    >全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <hr />

    <h3>可选项目数量的限制</h3>
    <div class="color999999 padding_bottom_10px">使用 min 和 max 属性能够限制可以被勾选的项目的数量。</div>
    <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/checkbox"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checked: true,
      checked1: false,
      checked2: true,
      checkList: ["选中且禁用", "复选框 B"],
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>
<style lang="scss" scoped>
.padding_bottom_10px {
  padding-bottom: 10px;
}
.color999999 {
  color: #999999;
}
</style>