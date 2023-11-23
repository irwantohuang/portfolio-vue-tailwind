<script setup>
import { onMounted, ref } from 'vue';
import { navMenu } from '@/data/navMenu.js'

const hambActive = ref(false)
const fixedHeader = ref(false)
const header = ref(null)
const darkMode = ref(false)

const changeValue = () => {
  hambActive.value = !hambActive.value
}

const toggleDarkMode = () => {
  console.log(darkMode.value);
  darkMode.value = !darkMode.value;

  localStorage.theme = darkMode.value ? 'dark' : 'light'

  if (darkMode) {
    document.querySelector('html').classList.toggle('dark', darkMode.value);
  }
}

const getThemeValue = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkMode.value = true
} else {
  darkMode.value = false
}
}

onMounted(() => {
  getThemeValue()
  window.onscroll = () => {
    header.value = document.querySelector('header')

    if(header.value) {
      fixedHeader.value = window.scrollY > header.value.offsetTop
    };
  }
})

</script>

<template>

  <header class="header" :class="{'navbar-fixed': fixedHeader}">
    <div class="container">
      <div class="header__content">  
        <div class="content-logo">
          <a href="#" class="">@veedo.lab</a>
        </div>
        
        <div class="content-menu">
          <button @click="changeValue()" id="hamburger" name="hamburger" type="button" class="hamburger-btn" :class="{'hamburger-active' : hambActive}" >
            <span class="hamburger-line origin-top-left"></span>
            <span class="hamburger-line origin-center"></span>
            <span class="hamburger-line origin-bottom-left"></span>
          </button>

          <nav id="nav-menu" :class="hambActive ? '' : 'hidden'" class="menu-nav lg:block">
            <ul>
              <li v-for="data in navMenu" :key="data.id" class="group">
                <a :href="data.link" class="menu-link" @click="changeValue()">
                  <font-awesome-icon :icon="data.icon" class="me-1 lg:hidden"/>
                  {{ data.title }}
                </a>
              </li>
              <li class="flex items-center">
                <div class="flex py-2 mx-8">
                  <div @click="toggleDarkMode()" class="dark-toggle flex items-center p-1 w-14 rounded-full cursor-pointer bg-slate-500 ">
                    <div class="toggle-circle h-5 w-5 bg-white rounded-full transition-all ease-in-out duration-300 flex justify-center items-center" :class="{'translate-x-7': darkMode}">
                      <font-awesome-icon v-if="darkMode" icon="fa-solid fa-moon" class="text-slate-500"/>
                      <font-awesome-icon v-else icon="fa-solid fa-sun" class="text-slate-500"/>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <a href="#hero" class="fixed bottom-4 right-4 rounded-full items-center justify-center p-4 z-[9999] h-10 w-10 bg-primary-100 hover:animate-pulse" id="backToTop" :class="fixedHeader ? 'flex' : 'hidden'">
    <font-awesome-icon icon="fa-solid fa-angle-up" class="text-3xl text-bg-100" />
  </a>

</template>

<style>





</style>