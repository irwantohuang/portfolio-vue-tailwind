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

  <section id="hero" class="pt-36">
    <Hero />
  </section>

  <section id="about" class="pt-36 pb-36">
    <About />
  </section>

  <section id="portfolio" class="pt-36 pb-36 bg-bg-200">
    <Portfolio />
  </section>

  <section id="clients" class="pt-36 pb-36 bg-text-100">
    <Clients />
  </section>

  <section id="blog" class="pt-36 pb-36 bg-bg-200">
    <Blog />
  </section>

  <section id="contact" class="pt-36 pb-36">
    <Contact />
  </section>

  <FooterPages />
</template>
