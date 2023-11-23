<script setup>
import RecentBlog from '../components/modules/Blog/RecentBlog.vue';
</script>
<template>
  <div class="container">
    <div class="w-full px-4">
      <div class="max-w-xl mx-auto text-center mb-16">
        <h4 class="text-title text-primary-100 mb-2 dark:text-primary-200">Blog</h4>
        <h2 class="text-subtitle text-text-100 mb-6 dark:text-bg-100">Recent Blog</h2>
        <p class="text-desc text-text-200 dark:text-bg-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus obcaecati qui quidem maiores unde!</p>
      </div>
    </div>


    <RecentBlog />
  </div>
</template>