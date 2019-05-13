<template>
    <router-link :to="`/investments/${investment.id}`" 
        class="col-md-4"
    >
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ investment.name }}</h5>
                <p class="card-text">Taxa de juros: {{ investment.interestRate }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        investment: {
            type: Object,
            required: true
        }
    }
}
</script>

