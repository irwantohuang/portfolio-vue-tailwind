<script setup>
  import { myClients } from '../../../data/myClients';
</script>

<template>
  <div class="w-full px-4">
    <div class="my-clients__container">
      <a v-for="data in myClients" :key="data.id"
       :href="data.linkTo"
        class="clients-images"
        >
        <img :src="data.images" :alt="data.title"
        data-aos="zoom-in"
        data-aos-offset="100"
        data-aos-duration="800"
        data-aos-easing="ease-in"
        data-aos-delay="0"
        >
      </a>
    </div>
  </div>
</template>