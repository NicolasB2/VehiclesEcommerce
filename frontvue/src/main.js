import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import VueRouter from 'vue-router';
import store from './store';
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

import Home from './components/Home';
import Vehicles from './components/Vehicles';
import DetailVehicle from './components/DetailVehicle';
import Login from './components/Login';
import Register from './components/Register';
import UserDatail from './components/UserDetail';
import Recommendation from './components/Recommendation';


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/catalog',
    component: Vehicles
  },
  {
    path: '/cardetail',
    component: DetailVehicle
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/userdetail',
    component: UserDatail
  },{
    path: '/recommendation',
    component: Recommendation
  },
]

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(vuetify);

const router = new VueRouter({ mode: 'history', routes })

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
