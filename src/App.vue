<script setup>
import { RouterView } from 'vue-router';
import TheGreetings from './components/TheGreetings.vue';
import HomeView from './views/HomeView.vue';

</script>

<template>
  <TheGreetings />
  
  <RouterView />
</template>

<style scoped lang="scss">

@import './assets/scss/utils';

</style>
