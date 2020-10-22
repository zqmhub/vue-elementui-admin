<template>
  <div class="Timeline">
    <h3>高亮</h3>
    <div style="margin-top: 15px">
      <el-input
        placeholder="请输入内容"
        v-model="input3"
        class="input-with-select"
      >
        <el-button
          @click="search"
          slot="append"
          icon="el-icon-search"
        ></el-button>
      </el-input>
    </div>

    <div
      class="list_item"
      v-for="(item, index) in list"
      :key="index"
      v-html="item.text"
    ></div>

    <div>
      <pre>
        <div>js代码</div>
        <code>
        /**
        *第一参数：源字符串
        *第二参数：替换的字符
        */
      textHightlight(source_str, txt) {
        if (txt != "") {
          return source_str.replace(
            txt,
            "&lt;span class='hightlight'&gt;"+txt+"&lt;/span&gt;"
          );
        } else {
          return source_str;
        }
      }
      </code>
      <div>css代码</div>
      <code>
        .hightlight {
          color: red;
        }

      </code>
      </pre>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input3: "",
      list: [
        { text: "我爱中国" },
        { text: "我爱你中国" },
        { text: "爱我中华" },
      ],
      listBak: [],
    };
  },
  created() {
    this.listBak = JSON.parse(JSON.stringify(this.list));
  },
  methods: {
    /*
     *
     *textHightlight('源字符串','需要高亮的字词')
     *给code设颜色即可
     *数据需要用v-html渲染
     **/
    textHightlight(source_str, txt) {
      if (txt != "") {
        return source_str.replace(
          txt,
          "<span class='hightlight'>" + txt + "</span>"
        );
      } else {
        return source_str;
      }
    },
    search() {
      let list = JSON.parse(JSON.stringify(this.listBak));
      this.list = list.map((item) => {
        item.text = this.textHightlight(item.text, this.input3);
        return item;
      });
    },
  },
};
</script>
<style lang="scss" >
.hightlight {
  color: red;
}

.list_item {
  padding: 10px 0;
  font-size: 14px;
}
</style>