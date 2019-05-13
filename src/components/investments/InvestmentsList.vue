<template>
    <div class="row">
        <IvenstmentsItem v-for="investment in investments"
            :key="investment.id"
            :investment="investment"/>
    </div>
    
    
</template>

<script>
export default {
    components: {
        IvenstmentsItem: () => import('./InvestmentItem.vue')
    },
    data() {
        return {
            investments: [
                {
                    id: 1,
                    name: 'Poupança',
                    interestRate: 0.3715
                }
            ]
        }
    }
}
</script>

