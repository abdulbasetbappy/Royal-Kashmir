<template>
    <div class="container">
        <h1>404</h1>
        <p>We Cann't Find Your Page.</p>
        <button>
            <font-awesome-icon :icon="['fas', 'home']" />
            <router-link to="/">Go To Home</router-link>
        </button>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import '../styles/Pages/notFoundComponent';
</style>