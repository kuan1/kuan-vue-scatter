# kuan-vue-scatter

灭霸打响指消散效果(safari 不支持)

## [DEMO 预览](https://www.kuan1.top/kuan-vue-scatter/)

## 安装

```bash
npm install kuan-vue-scatter -S
# or
yarn add kuan-vue-scatter
```

## 使用

```html
<template>
  <div>
    <button :disabled="!visible" @click="visible = false">
      {{visible ? '消散' : '显示'}}
    </button>

    <vue-scatter
      :visible="visible"
      @end="visible = true"
      class="test-container"
    >
      <img src="./images/1.jpg" alt="" />
    </vue-scatter>
  </div>
</template>

<script>
  import VueScatter from 'kuan-vue-scatter'

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
```
