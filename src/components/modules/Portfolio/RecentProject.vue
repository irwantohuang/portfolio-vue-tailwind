<script setup>
  import { portfolio } from '@/data/portfolio.js';
</script>

<template>
  <div class="project__container">
    <div v-for="data in portfolio" :key="data.index" class="project__card" 
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-duration="800"
    data-aos-easing="ease-in"
    >
      <div class="card-img">
        <img :src="data.images" :alt="data.title" class="w-full">
      </div>
      <h3 class="card-title">{{ data.title }}</h3>
      <p class="card-desc">{{ data.desc }}</p>
      <a :href="data.linkTo" class="veedo__btn veedo__btn-primary mt-4">Detail</a>
    </div>
  </div>
</template>
