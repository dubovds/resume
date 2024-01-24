<script setup>
import TitleIcon from "@/components/TitleIcon.vue";
</script>
<template>
    <div class="experience">
      <div class="container">
        <div class="page-title">
        <h1>My<br>Experience</h1>
        <TitleIcon />
      </div>
      </div>
    </div>
</template>
  
<style lang="scss" scoped>
@import '../assets/scss/utils';
.page-title {
  padding: 200px 0 100px;
  h1 {
    font-size: toRem(88);
    line-height: 1;
    font-weight: 400;
  }
}


</style>
