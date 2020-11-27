import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import VueRouter from 'vue-router';

import Home from './components/Home';
import Vehicles from './components/Vehicles';


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/catalog',
    component: Vehicles
  },

]

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes })

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
