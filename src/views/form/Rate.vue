<template>
  <div class="Rate">
    <h3>基础用法</h3>
    <div class="demo-block">
      <div class="source">
        <div class="flex">
          <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <el-rate v-model="value1"></el-rate>
          </div>
          <div class="block">
            <span class="demonstration">区分颜色</span>
            <el-rate v-model="value2" :colors="colors"></el-rate>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h3>带文字的</h3>
    <div class="demo-block">
      <div class="source">
        <div class="flex">
          <el-rate v-model="value3" show-text></el-rate>
        </div>
      </div>
    </div>
    <hr />
    <!-- <h3>其他icon</h3>
    <div class="demo-block">
      <div class="source">
        <div class="flex">
          <el-rate
            v-model="value"
            :icon-classes="iconClasses"
            void-icon-class="icon-rate-face-off"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
          ></el-rate>
        </div>
      </div>
    </div>
    <hr />-->

    <h3>只读</h3>
    <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/Rate"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      value: 3.5,
      iconClasses: ["icon-rate-face-1", "icon-rate-face-2", "icon-rate-face-3"], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
    };
  },
  methods: {},
};
</script>
<style lang="scss" >
.Rate {
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .demo-block .flex {
    display: flex;
  }
  .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    flex: 1;
  }
}
</style>