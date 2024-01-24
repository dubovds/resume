<script setup>
import IconGear from '@/components/icons/IconGear.vue';
</script>

<template>
  <div class="title-icon-block">
    <div class="stripe"></div>
    <div class="title-icon">
      <IconGear/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/utils';
.title-icon-block {
  position: relative;
  margin-top: 100px;
}

.stripe {
  width: 100%;
  height: 1px;
  background-color: rgba(28, 29, 32, 0.175);
}

.title-icon {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(9em, 12vw, 11em);
  height: clamp(9em, 12vw, 11em);
  background-color: $color-blue;
  border-radius: 50%;
  transition: opacity 1s ease-in-out;

  &:hover {
    animation: digitalball 6s ease-in-out infinite;
  }
}

@keyframes digitalball{
  0% {
    background: $color-blue;
  }
  50% {
      background: #ec016e;
  }
  100% {
      background: $color-blue;
  }
}
</style>