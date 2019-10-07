<template>
  <div>
    <h1>灭霸打响指消散效果</h1>
    <button :disabled="!visible" @click="visible = false">{{visible ? '消散' : '显示'}}</button>
    <vue-scatter :visible="visible" @end="visible = true" class="test-container">
      <img src="./images/1.jpg" alt="">
    </vue-scatter>
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
  margin: 30px 0 20px;
}
button {
  padding: 0.3em 1em;
  display: block;
  margin: 20px auto;
}
.test-container {
  height: 300px;
  width: 600px;
  margin: 0 auto;
}
img {
  display: block;
}
</style>
