<template>
  <div class="Input">
    <h3>可清空</h3>
    <div class="demo-input-suffix">
      <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
    </div>
    <hr />
    <h3>密码框</h3>
    <div class="demo-input-suffix">
      <el-input placeholder="请输入密码" v-model="psw" show-password></el-input>
    </div>
    <hr />
    <h3>带图标的输入框</h3>
    <div class="demo-input-suffix">
      属性方式：
      <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1"></el-input>
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
    </div>
    <div class="demo-input-suffix">
      slot 方式：
      <el-input placeholder="请选择日期" v-model="input3">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <el-input placeholder="请输入内容" v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>

    <hr />
    <h3>多行文本/文本域</h3>
    <div class="demo-input-suffix">
      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
    </div>
    <hr />
    <h3>复合型</h3>
    <div>
      <el-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input2">
        <template slot="append">.com</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <hr />

    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/Input"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      psw: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      textarea: "",
      select: "",
    };
  },
  methods: {},
};
</script>
<style lang="scss" >
.Input {
  .demo-input-suffix .el-input {
    margin-right: 15px;
    width: 180px;
  }
  .demo-input-suffix {
    margin-bottom: 15px;
    .el-textarea {
      width: 180px;
    }
  }
  // .el-input {
  //   width: 200px;
  // }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
}
</style>