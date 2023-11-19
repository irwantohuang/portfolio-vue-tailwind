<script setup>
  import { socialMedia } from '@/data/socialMediaLinks';
</script>

<template>
  <div class="social">
    <h3 class="social__title">let's be friend</h3>
    <p class="social__desc">Lorem, ipsum. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Recusandae ullam, commodi voluptas neque asperiores quae?</p>

    <div class="social-media">
      <a
        v-for="data in socialMedia" :key="data.id" :href="data.link" target="_blank" :class="data.hoverColor">
        <font-awesome-icon :icon="data.icon" />
      </a>
    </div>
  </div>
</template>