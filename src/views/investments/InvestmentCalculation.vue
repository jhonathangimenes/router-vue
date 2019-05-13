<template>
    <div class="row h-100">
        <div class="col-md-4 my-auto mx-auto">
            <CalculationForm/>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        CalculationForm: () => import('./../../components/investments/CalculationForm.vue')
    }
}
</script>

