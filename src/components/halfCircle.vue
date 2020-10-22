<template>
  <div class="vux-circle">
    <svg viewBox="0 0 100 100" class="transeform">
      <circle
        cx="50%"
        cy="50%"
        :r="insideRadius"
        class="bg current"
        :style="cirlceStyle"
        :stroke="isGradient ? 'url(#vux-circle-gradient)' : strokeColor"
        :stroke-width="strokeWidth"
      />
      <circle
        cx="50%"
        cy="50%"
        :r="outsideRadius"
        class="bg current"
        :stroke="trailColor"
        :stroke-width="trailWidth"
      />
    </svg>
    <div class="vux-circle-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * Fork from https://github.com/react-component/progress
 * MIT license
 */

export default {
  name: "half-circle",
  props: {
    strokeWidth: {
      type: Number,
      default: 1,
    },
    strokeColor: {
      type: [Array, String],
      default: "#3FC7FA",
    },
    trailWidth: {
      type: Number,
      default: 1,
    },
    trailColor: {
      type: String,
      default: "#D9D9D9",
    },
    percent: {
      type: Number,
      default: 0,
    },
    anticlockwise: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    insideRadius() {
      return this.outsideRadius - this.strokeWidth;
    },
    outsideRadius() {
      return 48 - this.trailWidth / 2;
    },
    cankaoPathString() {
      return `M 50,50 m 0,-${this.radius}
      a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
      a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`;
    },

    len() {
      return Math.PI * 2 * this.radius;
    },
    cirlceStyle() {
      return {
        // 'stroke-dashoffset': 404 - (this.percent / 100) * 228,
        "stroke-dashoffset": 404 - (this.percent / 100) * (404 - 228),

        stroke: this.strokeColor,
        transition: "stroke-dashoffset 1.2s",
      };
    },
    isGradient() {
      return typeof this.strokeColor !== "string";
    },
  },
};
</script>

<style>
.vux-circle {
  position: relative;
  width: 100%;
  /* width: 1rem; */
  height: 100%;
  /* height: .9rem; */
  margin: 0 auto;
}
.vux-circle-content {
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  /* top: 50%; */
  bottom: 0.05rem;
  /* transform: translateY(-50%); */
  overflow: hidden;
}

.transeform {
  transform: rotate(135deg);
}

.bg {
  fill: transparent;
  transform-origin: center;
}

.current {
  stroke-dasharray: 397px;
  stroke-dashoffset: 190;
}
</style>
