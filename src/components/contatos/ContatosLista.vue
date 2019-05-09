<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>
        <ul class="list-group" v-if="contatos.length > 0">
            <ContatosListaItem
                class="list-group-item"
                v-for="contato in contatos"
                :key="contato.id"
                :contato="contato"/>
        </ul>
        <p v-else>Nenhum contato cadastrado</p>
        <button class="btn btn-info" @click="voltar()">Voltar</button>
    </div>
</template>

<script>
import ContatosListaItem from './ContatosListaItem.vue'
export default {
    components: {
        ContatosListaItem
    },
    data() {
        return {
            contatos: [
                { id: 1, nome: 'Jack Chan', email: 'jackchan@gmail.com'},
                { id: 2, nome: 'João Chan', email: 'Joãochan@gmail.com'},
                { id: 3, nome: 'Maria Chan', email: 'Mariachan@gmail.com'},
                { id: 4, nome: 'Pedro Chan', email: 'Pedrochan@gmail.com'}

            ]
        }
    },
    methods: {
        voltar(event) {
            this.$router.back()
        }
    }
}
</script>
