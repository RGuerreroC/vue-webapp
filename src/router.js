import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Contacto from './components/Contacto.vue'
import RestauranteTop from './components/RestauranteTop.vue'
import RestaurantesList from './components/RestaurantesList.vue'

Vue.use(Router)

const routes = [
  { path: '/restaurantes', name: 'restaurantes-list', component: RestaurantesList },
  { path: '/restaurante-top/:id', name: 'restaurante-top', component: RestauranteTop },
  { path: '/contacto', name: 'contacto', component: Contacto },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    component: Home
  },
]


export default new Router({
  routes,
  mode: 'history'
})
