<template>
    <div>
        <h3 class="font-weight-light">Editar contato com id: {{ $route.params.id }}</h3>
        <button class="btn btn-secondary mt-3 mb-3"
            @click="$router.back()"
        >
            Voltar
        </button>
    </div>
</template>
