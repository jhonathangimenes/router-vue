<template>
    <div class="row">
        <div class="col-md-4">
            <CalculationForm
                :initialValue="+$route.params.initialDeposit"
                :depositValue="+$route.params.monthlyDeposit"
                :amountValue="+$route.params.amount"
                :result="result"/>
        </div>
        <div class="col-md-8">
            <FinalResult
                :initialValue="+$route.params.initialDeposit"
                :depositValue="+$route.params.monthlyDeposit"
                :amountValue="+$route.params.amount"/>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        CalculationForm: () => import('./../../components/investments/CalculationForm.vue'),
        FinalResult: () => import('./../../components/investments/FinalResult.vue')
    },
    data() {
        return {
            result: true
        }
    }
}
</script>