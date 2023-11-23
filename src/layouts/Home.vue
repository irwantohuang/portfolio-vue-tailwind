<script setup>
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import Clients from "../views/Clients.vue";
import Contact from "../views/Contact.vue";
import Hero from "../views/Hero.vue";
import Portfolio from "../views/Portfolio.vue";
import FooterPages from "./FooterPages.vue";
import Navbar from "./Navbar.vue";
</script>

<template>
  <Navbar />

  <section id="hero" class="pt-36 dark:bg-text-100">
    <Hero />
  </section>

  <section id="about" class="pt-36 pb-36 dark:bg-text-100">
    <About />
  </section>

  <section id="portfolio" class="pt-36 pb-36 bg-bg-200 dark:bg-slate-800">
    <Portfolio />
  </section>

  <section id="clients" class="pt-36 pb-36 bg-text-100 dark:bg-bg-300">
    <Clients />
  </section>

  <section id="blog" class="pt-36 pb-36 bg-bg-200 dark:bg-slate-800">
    <Blog />
  </section>

  <section id="contact" class="pt-36 pb-36 dark:bg-text-100">
    <Contact />
  </section>

  <FooterPages />


</template>
