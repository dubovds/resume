<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import TheButton from './TheButton.vue';
import { applyMagneticEffect } from '@/utils/magnetEffect';

const localTime = ref('');

const updateTime = () => {
  const now = new Date();
  const options = { 
    hour: '2-digit', 
    minute: '2-digit', 
    timeZoneName: 'short' 
  };
  localTime.value = now.toLocaleTimeString('en-US', options);
};

let intervalId;

onMounted(() => {
  updateTime();
  intervalId = setInterval(updateTime, 1000); // Update time every second
  applyMagneticEffect('.magnetic');
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="contacts">
        <TheButton button-name="dubovds87@gmail.com" button-link="mailto:dubovds87@gmail.com"/>
        <TheButton button-name="916 459 7362" button-link="tel:+19164597362"/>
      </div>

      <div class="bottom-section">
        <div class="bottom-section__item flex">
          <div class="version-block">
            <h5>Version</h5>
            <p>2024 © Edition</p>
          </div>
          <div class="time-block">
            <h5>Local time</h5>
            <div>{{ localTime }}</div>
          </div>
        </div>
        <div class="bottom-section__item">
          <div class="social">
            <h5>Socials</h5>
            <ul>
              <li><a href="https://www.linkedin.com/in/dubovds/" class="magnetic" target="_blank">LinkedIn</a></li>
              <li><a href="#" class="magnetic">GitHub</a></li>
            </ul>
            <div class="stripe"></div>  
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
@import '../assets/scss/utils';

.footer {
  background-color: #000;
  padding: 30px 0;
  color: #fff;

  @media (min-width: 768px) {
    padding: 80px 0;
  }
}

.bottom-section {
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  h5 {
    margin: 0 0 0.7rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    opacity: 0.5;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    gap: 1.5rem;
  }

  p {
    margin: 0;
  }

  a {
    position: relative;
    color: #fff;
    text-decoration: none; 

    &::before {
      content: '';
      position: absolute;
      transition: transform .5s ease;
      left: 0;
      bottom: -6px;
      width: 100%;
      height: 1px;
      background: #fff;
      transform: scaleX(0);
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }
}

.stripe {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.225);
  margin-top: 24px;

  @media (min-width: 768px) {
    display: none;
  }
}

.flex {
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 50px;
  }
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 80px;
  }

  .btn {
    width: 100%;

  @media (min-width: 768px) {
    width: max-content;
  }
  }
}
</style>