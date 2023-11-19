<script setup>
import { onMounted, ref } from 'vue';
import { navMenu } from '@/data/navMenu.js'

const hambActive = ref(false)
const fixedHeader = ref(false)
const header = ref(null)

const changeValue = () => {
  hambActive.value = !hambActive.value
}

onMounted(() => {
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
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

</template>

<style>





</style>