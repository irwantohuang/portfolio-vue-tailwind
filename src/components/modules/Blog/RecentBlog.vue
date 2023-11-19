<script setup>
import { myBlog } from '../../../data/myBlog';
</script>

<template>

  <div class="flex flex-wrap">
    <div v-for="data in myBlog" :key="data.id" class="w-full px-4 lg:w-1/2 xl:w-1/3">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
        <img :src="data.images" :alt="data.title" class="w-full">
        <div class="py-6 px-4">
          <h3>
            <a :href="data.detail" class="block text-xl font-semibold text-text-100 hover:text-primary-100 truncate">{{ data.title }}</a>
          </h3>
          <p class="text-base font-medium text-text-200 text-justify mt-2">{{ data.desc }}</p>
          <a href="" class="veedo__btn veedo__btn-primary mt-6">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>