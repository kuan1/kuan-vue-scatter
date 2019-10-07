import VueScatter from './VueScatter'

const install = Vue => {
  Vue.component('vue-scatter', VueScatter)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

VueScatter.install = install

export default VueScatter
