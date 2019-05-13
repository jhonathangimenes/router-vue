<template>
    <div class="card text-white text-center bg-success h-100">
        <div class="my-auto mx-auto">
            <h5 class="card-title">Em 2059 você terá</h5>
            <p class="result">{{ resultFormatted }}</p>
        </div>
    </div>
</template>

<script>
import { EventBus } from './../../event-bus.js';

export default {
    props: {
        initialValue: {
            type: Number,
            required: true
        },
        depositValue: {
            type: Number,
            required: true
        },
        amountValue: {
            type: Number,
            required: true
        }
    },
    created() {
        this.result = (this.depositValue * this.amountValue) + this.initialValue
        
        EventBus.$on('resultCalc',(result) => {
            this.result = result
        })
    },
    data() {
        return {
            result: 0,
            initialDeposit: this.initialValue,
            monthlyDeposit: this.depositValue,
            amount: this.amountValue,
        }
    },
    computed: {
        resultFormatted() {
            return this.result.toLocaleString("pt-BR",
                { style: 'currency', currency: 'BRL' } )
        }
    }
}
</script>

<style scoped>
    .result {
        font-size: 40px;
        font-weight: bold;
    }
</style>

