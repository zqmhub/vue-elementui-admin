<template>
  <div class="card">
    <h3>基础用法</h3>
    <el-row>
      <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <!-- <el-button type="text" class="button">操作按钮</el-button> -->
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <hr />

    <h3>卡片阴影</h3>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always">总是显示</el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">鼠标悬浮时显示</el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">从不显示</el-card>
      </el-col>
    </el-row>
    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/card"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {},
};
</script>
<style lang="scss" >
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>