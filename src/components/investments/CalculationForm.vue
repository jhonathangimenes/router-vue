<template>
    <form>
        <div class="form-group">
            <label>Depósito inicial</label>
            <money class="form-control"
                v-model="initialDeposit"
                v-bind="money"
            ></money>
            <label>Depósito mensal</label>
            <money class="form-control"
                v-model="monthlyDeposit"
                v-bind="money"
            ></money>
            <label>Quantidade de meses</label>
            <input type="range" 
                class="form-control-range" 
                v-model="amount"
                min="1"
                max="360"
            >
            {{ amount }}
        </div>
        <template v-if="result">
            <button class="btn btn-success float-right"
                @click.prevent="calculation()"
            >
                Calcular
            </button>
        </template>
        <template v-else>
            <router-link :to="`/result/${initialDeposit}/${monthlyDeposit}/${amount}`" 
                class="btn btn-success float-right"
            >
                Calcular
            </router-link>
        </template>
    </form>
</template>

<script>
import { EventBus } from './../../event-bus.js';

export default {
    props: {
        initialValue: {
            type: Number,
            default: 0
        },
        depositValue: {
            type: Number,
            default: 0
        },
        amountValue: {
            type: Number,
            default: 1
        },
        result: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            initialDeposit: this.initialValue,
            monthlyDeposit: this.depositValue,
            amount: this.amountValue,
            money: {
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                suffix: '',
                precision: 2,
                masked: false
            }
        }
    },
    methods: {
        calculation() {
            let result = 0
            result = (this.monthlyDeposit * this.amount) + this.initialDeposit
            EventBus.$emit('resultCalc', result)
        }
    }
}
</script>

