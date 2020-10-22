<template>
  <div class="closetip">
    <p class="title">实现如图提示：</p>
    <div class="imgBOx">
      <img :src="img" alt="" />
    </div>

    <div>
      <pre>
        {{ showCode }}
      </pre>
    </div>

    <div>
      <p class="title">javascript:</p>
      <code>
        <pre>
          let _this = this;
          window.onbeforeunload = function (e) {
            if (_this.$route.name == "CloseTip") {
              e = e || window.event;
              // 兼容IE8和Firefox 4之前的版本
              if (e) {
                e.returnValue = "关闭提示1111";
              }
              // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
              return "关闭提示222";
            } else {
              window.onbeforeunload = null;
            }
          };  
        </pre>
      </code>
    </div>
  </div>
</template>
<script>
import img from "@/assets/closetip.png";
export default {
  name: "closetip",
  data() {
    return {
      percent: 88,
      img: img,
      showCode: "",
    };
  },

  created() {},

  mounted() {
    let _this = this;
    window.onbeforeunload = function (e) {
      if (_this.$route.name == "CloseTip") {
        e = e || window.event;
        // 兼容IE8和Firefox 4之前的版本
        if (e) {
          e.returnValue = "关闭提示1111";
        }
        // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
        return "关闭提示222";
      } else {
        window.onbeforeunload = null;
      }
    };
  },
};
</script>

