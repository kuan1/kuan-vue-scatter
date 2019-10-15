<template>
  <div>
    <vue-scatter :visible="visible" @end="visible = true" class="test-container">
      <h1>灭霸打响指消散效果</h1>
      <img src="./images/1.jpg" alt="">
    </vue-scatter>
    <button :disabled="!visible" @click="visible = false">{{visible ? '消散' : '显示'}}</button>
  </div>
</template>

<script>
import VueScatter from '../src'

export default {
  components: {
    VueScatter
  },
  data() {
    return {
      visible: true
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  overflow: hidden;
}
h1 {
  text-align: center;
  padding: 30px 0 20px;
}
button {
  padding: 0.3em 1em;
  display: block;
  margin: 20px auto;
}
.test-container {
  width: 600px;
  margin: 0 auto;
}
img {
  display: block;
}
</style>
