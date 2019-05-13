import Vue from 'vue'
import App from './App.vue'
import router from './router'
import money from 'v-money'



Vue.config.productionTip = false

// register directive v-money and component <money>
Vue.use(money, {precision: 4})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
