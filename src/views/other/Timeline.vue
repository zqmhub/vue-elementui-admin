<template>
  <div class="Timeline">
    <h3>基础用法</h3>
    <div class="block">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >{{activity.content}}</el-timeline-item>
      </el-timeline>
    </div>

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
      reverse: true,
      activities: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          size: "large",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" >
.Timeline .radio {
  padding: 10px 0;
}
</style>