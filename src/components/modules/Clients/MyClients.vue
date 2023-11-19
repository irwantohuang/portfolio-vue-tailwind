<script setup>
  import { myClients } from '../../../data/myClients';
</script>

<template>
  <div class="w-full px-4">
    <div class="my-clients__container">
      <a v-for="data in myClients" :key="data.id"
       :href="data.linkTo"
        class="clients-images">
        <img :src="data.images" :alt="data.title">
      </a>
    </div>
  </div>
</template>