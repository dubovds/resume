<script setup>
import SKillsBlock from '@/components/SKillsBlock.vue';

</script>

<template>
  <section class="about">
    <div class="container">
      <div class="about-wrapper">
        <div class="about-block"> 
          <h3>Summary</h3>
          <p>
            I am Dmytro Dubov, a seasoned Frontend Developer with over 7 years of experience in crafting both B2C and B2B web and mobile applications. My expertise lies in JavaScript, HTML5, CSS3, SASS, VueJS, and React, and I am particularly skilled at creating user-friendly interfaces using CMS tools like Drupal and WordPress.
          </p>
          <p>
            I have a proven track record in enhancing user experience and web accessibility, leading successful project redesigns, and pioneering innovations in development processes. My commitment to delivering high-quality UI solutions is matched by my dedication to staying abreast of the latest trends in frontend technology.
          </p>
          <p>
            Driven by a passion for excellence in web development, I continuously seek to bring cutting-edge solutions and creative approaches to my work, ensuring superior user engagement and satisfaction.
          </p>
        </div>
        <div class="about-block">
          <h3>Competence</h3>
          <SKillsBlock></SKillsBlock>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/scss/utils';

.about {
  margin: 40px 0;

  @media (min-width: 768px) {
    margin: 80px 0;
  }
}

.about-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 80px;
  }
}

.about-block {

  &:first-child {
    flex: 2 1 0;
    font-size: toRem(18);
  }

  &:last-child {
    flex: 1 1 0;
  }
}

</style>