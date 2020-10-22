<template>
  <div class="Tableinput">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.name"
            placeholder="请输入内容"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.age" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="180">
        <template slot-scope="scope">
          <el-radio v-model="scope.row.sex" label="1">男</el-radio>
          <el-radio v-model="scope.row.sex" label="2">女</el-radio>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div>
      <el-button @click="consoleData">log 数据</el-button>
    </div>

    <div>
      <pre >
        {{showCode}}
      </pre>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showCode:"",
      tableData: [
        {
          date: "2016-05-02",
          name: "",
          age: "",
          sex:'1',
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "",
          age: "",
            sex: '1',
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "",
          age: "",
            sex: '1',
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "",
          age: "",
            sex: '1',
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  created() {
    this.showCode = `
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.name"
            placeholder="请输入内容"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.age" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="180">
        <template slot-scope="scope">
          <el-radio v-model="scope.row.sex" label="1">男</el-radio>
          <el-radio v-model="scope.row.sex" label="2">女</el-radio>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    tableData: [
        {
          date: "2016-05-02",
          name: "",
          age: "",
          sex:'1',
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "",
          age: "",
            sex: '1',
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "",
          age: "",
            sex: '1',
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "",
          age: "",
            sex: '1',
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    
    `



    
  },
  methods: {
    consoleData() {
      console.log(this.tableData);
    },
  },
};
</script>
<style lang="scss" >
</style>