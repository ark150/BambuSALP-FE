import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdContent, MdField, MdInput } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdField)
// Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
