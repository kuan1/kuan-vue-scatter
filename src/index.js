import VueScatter from './VueScatter'

const install = Vue => {
  Vue.component('calendar', Calendar)
  Vue.component('calendar-picker', CalendarPicker)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

export { VueScatter }
