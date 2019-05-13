import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Investments from './views/investments/Investments.vue'
import InvestmentCalculation from './views/investments/InvestmentCalculation.vue'
import InvestmentResult from './views/investments/InvestmentResult.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/', 
      component: Home 
    },
    { 
      path:'/investments', 
      component: Investments
    },
    {
      path: '/investments/:id', 
      component: InvestmentCalculation 
    },
    {
      path: '/result/:initialDeposit/:monthlyDeposit/:amount', 
      component: InvestmentResult
    }
  ]
})