'use strict'
import Picker from './index.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-picker', Picker)
}

Picker.install = function(Vue){
  Vue.component(Picker.name, Picker)
}

export default Picker
