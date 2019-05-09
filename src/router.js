import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhe from './views/contatos/ContatoDetalhe.vue'
import Home from './views/Home.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Home },
    { 
      path: '/contatos', 
        component: Contatos, 
        children: [
          { path: ':id', component: ContatoDetalhe, name: 'contato' },
          { path: ':id/editar', components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhe
          } 
        }
      ] 
    },
  ]
})