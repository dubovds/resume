<script setup>
import { useMeta } from 'vue-meta';
import { RouterView } from 'vue-router';
import TheGreetings from './components/TheGreetings.vue';

useMeta({
  title: 'Dmytro Dubov',
  htmlAttrs: { lang: 'en', amp: true }
})

</script>

<template>
   <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | Frontend Developer` : `SITE_NAME` }}</template>
  </metainfo>
  <TheGreetings />
  
  <RouterView />
</template>

<style scoped lang="scss">

@import './assets/scss/utils';

</style>
