<template>
    <div class="skills-container">
      <div v-for="skill in skills" :key="skill.id" :id="skill.id" class="skill">
        <div class="skill-name">{{ skill.name }}</div>
        <div class="skill-bar">
            <div class="skill-level"  :style="{ width: skill.visible ? skill.level + '%' : '0%' }"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const containerVisible = ref(false);
  
  const skills = ref([
    { id: 'html', name: 'HTML5, CSS3, SASS/SCSS', level: 90, visible: false },
    { id: 'js', name: 'JavaScript, TypeScript', level: 80, visible: false },
    { id: 'dev-tools', name: 'Vue.js, Nuxt', level: 80, visible: false },
    { id: 'cms', name: 'Drupal 9/10, WordPress, Headless Frontend', level: 70, visible: false },
    { id: 'tools', name: ' Docker, Gulp, Webpack, Unit Testing', level: 65, visible: false },
    { id: 'repos', name: 'Git, SVN, Github, Gitlab, Bitbucket', level: 70, visible: false },
    { id: 'design', name: 'Photoshop, Figma, Sketch, Illustrator', level: 50, visible: false },
  ]);
  
  const checkVisibility = () => {
    const windowHeight = window.innerHeight;
    skills.value.forEach(skill => {
      const skillElement = document.getElementById(skill.id);
      if (skillElement) {
        const rect = skillElement.getBoundingClientRect();
        if (rect.top < windowHeight) {
          skill.visible = true;
        }
      }
    });
  };
  
  onMounted(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', checkVisibility);
  });
  </script>
  <style scoped lang="scss">
@import '../assets/scss/utils/';
  .skill {
    margin-bottom: 10px;
  }

  .skill-bar {
    display: flex;
    align-items: flex-end;
    height: 7px;
    background-color: #000;
  }
  .skill-level {
    height: 5px;
    background-color: $color-blue;
    transition: width 2s ease-out;
  }
  </style>