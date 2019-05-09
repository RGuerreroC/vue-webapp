import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import Home from './components/Home.vue'
import Contacto from './components/Contacto.vue'
import router from './router'

Vue.config.productionTip = false

Vue.component('home', Home)
Vue.component('contacto', Contacto)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
