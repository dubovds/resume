<script setup>
import SKillsBlock from '@/components/SKillsBlock.vue';

</script>

<template>
  <section class="about">
    <div class="container">
      <div class="about-wrapper">
        <div class="about-block"> 
          <h3>Summary</h3>
          <p>Frontend Developer with over 7 years of experience in B2C and B2B web and mobile application development. Expert in
  JavaScript, HTML5, CSS3, SASS, VueJS, and React, with a strong focus on creating user-friendly interfaces using CMS
  tools like Drupal and WordPress.
          </p>
          <p>Proven track record in enhancing user experience and web accessibility, leading
          successful project redesigns, and innovating development processes.</p>
          <p>Committed to delivering high-quality UI solutions and staying at the forefront of frontend technology trends.</p>
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