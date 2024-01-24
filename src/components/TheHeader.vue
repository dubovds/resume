<script setup>
import { ref, watch, onMounted } from 'vue';
import { applyMagneticEffect } from '@/utils/magnetEffect';
import { useRoute , RouterLink } from 'vue-router';
import steakerIcon from '@/assets/icons/steakerIcon.vue';
import DigitalBall from './DigitalBall.vue';

const route = useRoute();
const isHomePage = ref(false);

watch(() => route.path, (newPath) => {
  isHomePage.value = newPath === '/';
}, { immediate: true });

onMounted(() => {
  applyMagneticEffect('.magnetic');
});
</script>
<template>
  <header class="header" :class="{'header-s': !isHomePage}">
    <div class="container">
      <div class="header-top-section"> 
        <RouterLink to="/" class="header-logo magnetic">
          <span>© Code by Dmytro</span>
        </RouterLink>
        <div class="header-menu">
          <nav>
            <ul class="menu-list">
              <li> <RouterLink to="/experience" class="menu-link magnetic">Experience</RouterLink></li>
              <li><a href="/dmytro_dubov_resume.pdf" class="menu-link magnetic" download>
              <span>Resume</span>
            </a></li>
            </ul>
            <!-- <RouterLink to="/about">Experience</RouterLink> -->
          </nav>
        </div>
      </div>
      <div v-if="isHomePage">
        <div class="header-location">
          <steakerIcon />
          <DigitalBall />
          <span>
            Located in <br> San Francisco, CA
          </span>
        </div>
        <div class="header-photo">
          <img src="../assets/dmytro_crop.png" alt="Dmytro Dubov">
        </div>
        <div class="profile-name">
          <h1>Dmytro Dubov</h1>
          <h2>Frontend Developer</h2>
        </div>
      </div> 
    </div>
  </header>
</template>
<style scoped lang="scss">
@import '../assets/scss/utils';

header {
  position: relative;
  // height: 80vh;
  height: 100vh;
  background-color: $color-grey;
  overflow: hidden;

  &.header-s {
    height: auto;
    overflow: inherit;
    background-color: transparent;

    .header-logo,
    .menu-link {
      color: $color-black;

      &:after {
        background-color: $color-black;
      }
    }
  }
}

.header-top-section {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.header-logo {
  color: $color-white;
  font-size: 18px;
  text-decoration: none;
}

.header-menu {
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
}

.header-profile {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.8s ease-out;
}

.header-photo {
  // width: 200px;
  // height: 200px;
  // background-color: red;
  // border-radius: 50%;
  // overflow: hidden;
  // box-shadow: rgba(0, 0, 0, 0.75) 3px 3px 15px 0px;

  img {
    width: auto;
    height: 100%;
    object-fit: cover;

    position: absolute;
    transform: translate(-50%, 10%);
    left: 50%;
    transition: transform 0.8s ease-out;

    @media (min-width: 768px) {
      
    }
  }
}

.profile-name {
  position: absolute;
  width: 94%;
  top: 70%;
  left: 50%;
  transform: translate(-50%, 50%);
  color: $color-white;
  font-weight: bold;
  text-align: center;
  transition: transform 1s ease-out;


  h1 {
    font-size: toRem(46);

    @media (min-width: 768px) {
      font-size: toRem(70);
    }
  }

  h2 {
    text-transform: uppercase;
  }
}

.header-location {
  display: none;
  position: absolute;
  width: 282px;
  height: 113px;
  top: 50%;
  left: 0;
  transform: translateY(100%);
  color: $color-white;
  transition: transform 0.7s ease-out;
  z-index: 1;

  @media (min-width: 768px) {
    display: block;   
  }

  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    padding-right: 5em;
    padding-left: 20px;
    line-height: 1.2;
    font-size: 18px;
  }
}

.hide + header {
  .header-location {
    transform: translateY(-50%);
  }

  .profile-name {
    transform: translate(-50%, 20%);

    @media (min-width: 768px) {
      transform: translate(-50%, -50%);
    }
  }

  .header-photo img {
    transform: translate(-50%, 3%);

    @media (min-width: 768px) {
      transform: translate(-50%, 3%);
    }
  }
}

.menu-list {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu-link {
  position: relative;
  padding: 0 24px;
  color: $color-white;
  text-decoration: none;
  font-size: 18px;

  &:after {
    content: '';
    position: absolute;
    width: calc(clamp(16px, 1.2vw, 19px) / 2.75);
    height: calc(clamp(16px, 1.2vw, 19px) / 2.75);
    background-color: $color-white;
    border-radius: 50%;
    bottom: toRem(-24);
    left: 50%;
    transform: translateX(-50%) scale(0);
    transition: all 0.3s ease-out;
  }

  &.router-link-active,
  &:hover {
    &:after {
      transform: translateX(-50%) scale(1);
    }
  }
}
</style>