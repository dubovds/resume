<script setup>
// import { RouterLink } from 'vue-router';
import steakerIcon from '@/assets/icons/steakerIcon.vue';
import DigitalBall from './DigitalBall.vue';
</script>
<template>
    <header>
    <div class="container">
      <div class="header-top-section">
        <div class="header-logo">© Code by Dmytro</div>
        <div class="header-menu">
          <nav>
            <!-- <RouterLink to="/about">Experience</RouterLink> -->
            <a href="/dmytro_dubov_resume.pdf" download>Resume</a>
          </nav>
        </div>
      </div>
      <div class="header-location">
        <steakerIcon />
        <DigitalBall />
        <span>
          Located in <br> San Francisco, CA
        </span>
      </div>
      <div class="header-photo">
          <img src="../assets/dmytro_crop.png" alt="">
        </div>
        <div class="profile-name">
          <h1>Dmytro Dubov</h1>
          <h2>Frontend Developer</h2>
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
}

.header-top-section {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.header-logo {
  color: $color-white;
  font-size: 18px;
}

.header-menu {
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  a {
    padding: 0 24px;
    color: $color-white;
    text-decoration: none;
    font-size: 18px;
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
      width: 38%;
      height: 100%;
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
</style>