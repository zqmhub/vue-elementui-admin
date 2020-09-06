<template>
  <div class="badge">
    <h3>基础用法</h3>
    <el-badge :value="12" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>
    <el-badge :value="1" class="item" type="primary">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="2" class="item" type="warning">
      <el-button size="small">回复</el-button>
    </el-badge>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        点我查看
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix">
          评论
          <el-badge class="mark" :value="12" />
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          回复
          <el-badge class="mark" :value="3" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <hr />

    <h3>最大值</h3>
    <el-badge :value="200" :max="99" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="100" :max="10" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>
    <hr />
    <h3>自定义内容</h3>
    <el-badge value="new" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge value="hot" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>
    <hr />
    <h3>小红点</h3>
    <el-badge is-dot class="item">数据查询</el-badge>
    <el-badge is-dot class="item">
      <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
    </el-badge>
    <hr />
    <el-link
      target="_blank"
      href="https://element.eleme.cn/#/zh-CN/component/badge"
      type="primary"
    >查看详细文档</el-link>
  </div>
</template>
 
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
};
</script>
<style lang="scss">
.badge {
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
}
</style>