<script setup>
import { navMenu } from '../data/navMenu'
import { socialMedia } from '@/data/socialMediaLinks';

</script>

<template>
  <footer class="bg-text-100 pt-24 pb-12">
    <div class="container">
      <div class="flex flex-wrap">

        <div class="footer__section text-bg-300 font-medium">
          <h2>VEEDO</h2>
          <h3>Hubungi Kami</h3>
          <p><font-awesome-icon icon="fa-solid fa-envelope" /> irwanto.ng11@gmail.com</p>
          <p><font-awesome-icon icon="fa-solid fa-map-location-dot" /> Pluit XXXVII</p>
          <p><font-awesome-icon icon="fa-solid fa-city" /> Jakarta, Indonesia</p>
        </div>


        <div class="footer__section">
          <h3 class="text-bg-100">Blog</h3>
          <ul class="text-bg-300 blog__content">
            <li><a href="#">Mechanical Keyboard</a></li>
            <li><a href="#">Programming</a></li>
            <li><a href="#">Lifestyle</a></li>
          </ul>
        </div>

        <div class="footer__section">
          <h3 class="text-bg-100">Link</h3>
          <ul class="text-bg-300 font-medium">
            <li v-for="data in navMenu" :key="data.id">
              <a :href="data.link" class="inline-block text-base hover:text-primary-100 mb-1.5">
                <font-awesome-icon :icon="data.icon" class="me-1" />
                {{ data.title }}
              </a>
            </li>

          </ul>
        </div>
      </div>

      <div class="w-full pt-10 border-t border-slate-200">
          <div class="social-media justify-center text-bg-100 mb-5">
            <a v-for="data in socialMedia" :key="data.id" :href="data.link" target="_blank" 
            :class="data.hoverColor" >
              <font-awesome-icon :icon="data.icon" /> 
            </a>
          </div>

          <p class="text-bg-300 text-center font-medium text-sm">Created by &copy; 
            <a href="https://www.instagram.com/irwanto.ng/" target="_blank" class="text-accent-100 transition-all hover:border-b hover:border-accent-100">Irwanto</a>
             with 
             <a href="https://vuejs.org/" target="_blank" class="text-[#41b883] transition-all hover:border-b hover:border-[#41b883]">VueJS</a>
              & 
              <a href="https://tailwindcss.com/" target="_blank" class="text-sky-500 transition-all hover:border-b hover:border-sky-500">TailwindCSS</a>
              </p>
      </div>
    </div>
  </footer>
</template>