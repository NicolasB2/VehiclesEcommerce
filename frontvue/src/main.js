import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import VueRouter from 'vue-router';
import store from './store';

import Home from './components/Home';
import Vehicles from './components/Vehicles';
import DetailVehicle from './components/DetailVehicle';
import Login from './components/Login';


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

]

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes })

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
