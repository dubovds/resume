<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const greetings = ["Hello", "Hola", "你好", "नमस्ते", "হ্যালো", "Olá", "Привiт", "مرحبا ", "Open to Work"];
  const currentGreeting = ref(greetings[0]);
  const isVisible = ref(true);
  let index = 0;
  let intervalId;

  const updateGreeting = () => {
  index++;
  if (index < greetings.length) {
    currentGreeting.value = greetings[index];
  } else {
    // Freeze for 2 seconds then hide
    clearInterval(intervalId);
    setTimeout(() => {
      isVisible.value = false;
    }, 500);
  }
  };

  onMounted(() => {
    // Freeze the first greeting for 3 seconds
    setTimeout(() => {
      intervalId = setInterval(updateGreeting, 150);
    }, 1000);
  });
  
  onUnmounted(() => {
    clearInterval(intervalId);
  });
</script>
<template>
  <!-- <div v-if="isVisible" -->
    <div
       :class="{hide: !isVisible}" 
       class="greeting-wrapper">
    <div class="greeting">{{ currentGreeting }}</div>
    <div class="rounded-div-wrap bottom">
      <div class="rounded-div"></div>
    </div>
  </div>
</template>
  
<style scoped lang="scss">
@import '../assets/scss/utils/';
.greeting-wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: $color-black;

  &.hide {
    transition: all 0.4s ease-out;
    transform: translateY(-100%);
  }
}
.greeting {
  position: relative;
  color: $color-white;
  font-size: toRem(32);
  text-align: center;
  z-index: 3;
}

.rounded-div-wrap.bottom {
  position: absolute;
  width: 100%;
  height: 10vh;
  bottom: 0;
  transform: translateY(99%);
  z-index: 2;
  
  transition: all 0.7s ease;

  .hide & {
    height: 0;
  }
}

.rounded-div {
  position: absolute;
  width: 150%;
  height: 750%;
  left: 50%;
  transform: translate(-50%, -86%);
  border-radius: 50%;
  background-color: $color-black;
  z-index: 1;
}
</style>