<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { applyMagneticEffect } from '@/utils/magnetEffect';

defineProps({
  buttonName: String,
  buttonLink: String
})

const isHovering = ref(null);

const enter = () => {
  isHovering.value = true;
};

const leave = () => {
  isHovering.value = false;
  setTimeout(() => {
    if (!isHovering.value) {
      isHovering.value = null;
    }
  }, 500); // Transition duration
};

const contentStyle = computed(() => {
  let transform, visibility;
  if (isHovering.value === true) {
    transform = 'translate(0, 0)';
    visibility = 'visible';
  } else if (isHovering.value === false) {
    transform = 'translate(0, -75%)';
    visibility = 'hidden';
  } else {
    transform = 'translate(0, 75%)';
    visibility = 'hidden';
  }

  return {
    transform,
    transition: 'transform 0.5s ease-in-out, visibility 0.5s ease-in-out',
    visibility
  };
});

watch(isHovering, (newVal) => {
  if (newVal === null) {
    // Delay setting visibility to hidden to ensure it's not visible while sliding out
    setTimeout(() => {
      if (isHovering.value === null) {
        isHovering.value = 'hidden';
      }
    }, 50);
  }
});

onMounted(() => {
    applyMagneticEffect('.magnetic');
});
</script>
<template>
     <a :href="buttonLink" class="btn magnetic" @mouseenter="enter" @mouseleave="leave">
        <span class="btn-text">{{buttonName}}</span>
        <span class="btn-fill" :style="contentStyle"></span>
     </a>
  </template>
  
<style scoped lang="scss">
@import '../assets/scss/utils';
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: inset 0px 0px 0px 1px $color-white;
    color: $color-white;
    width: max-content;
    height: 60px;
    border-radius: 2.125em;
    text-decoration: none;
    font-size: 19px;
    background-color: transparent;
    overflow: hidden;
    outline: none;

    @media (min-width: 768px) {
    height: 80px;
    }

    .btn-fill {
        background: $color-blue;
        position: absolute;
        width: 150%;
        height: 200%;
        border-radius: 50%;
        top: -50%;
        left: -25%;
        z-index: 1;
    }

    .btn-text {
        position: relative;
        z-index: 2;
        padding: 0 40px;
    }
}
</style>
  