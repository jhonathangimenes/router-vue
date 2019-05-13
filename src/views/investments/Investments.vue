<template>
    <InvestmentsList/>
</template>

<script>
export default {
    components: {
        InvestmentsList: () => import('./../../components/investments/InvestmentsList.vue')
    }
}
</script>

