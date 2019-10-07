<template>
  <div class="vue-scatter-container" ref="container">
    <div :style="{opacity: opacity}" class="vue-scatter">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Scatter from '@/utils/Scatter'

export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      opacity: this.visible ? 1 : 0,
      width: 100,
      height: 100,
      scatter: null
    }
  },
  watch: {
    visible(visible) {
      // this.opacity = visible ? 1 : 0
      if (!this.scatter) return
      if (!visible) {
        this.startScatter()
      }
    }
  },
  mounted() {
    this.scatter = new Scatter(this.$refs.container)
  },
  methods: {
    async startScatter() {
      await this.scatter.start()
      this.$emit('end')
    }
  }
}
</script>

<style lang="scss">
.vue-scatter-container {
  position: relative;
  .vue-scatter {
    width: 100%;
    height: 100%;
  }
  .scatter-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
