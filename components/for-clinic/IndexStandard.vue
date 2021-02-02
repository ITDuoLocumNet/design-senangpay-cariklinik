<template>
  <v-container :style="`max-width: ${maxWidth}`" class="pa-0">
    <!-- hero -->
    <hero-standard
      id="hero"
      :theme-color="themeColor"
      :menu="menu"
      @goto="goTo"
      @action1="action1"
      @action2="action2"
    ></hero-standard>

    <!-- features -->
    <feature-standard
      id="features"
      :theme-color="themeColor"
    ></feature-standard>

    <!-- testimony -->
    <testimony-standard
      id="testimony"
      :theme-color="themeColor"
    ></testimony-standard>

    <!-- testimony -->
    <faq-standard id="faq" :theme-color="themeColor"></faq-standard>

    <!-- contact -->
    <contact-standard id="contact" :theme-color="themeColor"></contact-standard>

    <!-- footer -->
    <footer-standard id="footer" :theme-color="themeColor"></footer-standard>
  </v-container>
</template>

<script>
export default {
  layout: 'noNavbar',
  props: {
    themeColor: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      maxWidth: '1000px',
      menu: [
        { name: 'Hero', src: 'hero' },
        { name: 'Features', src: 'features' },
        { name: 'Testimony', src: 'testimony' },
        { name: 'FAQ', src: 'faq' },
        { name: 'Contact', src: 'contact' },
      ],
    }
  },
  methods: {
    goTo(route) {
      document.getElementById(route).scrollIntoView({ behavior: 'smooth' })
    },
    action1() {
      document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })
    },
    action2() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style>
.v-text-field {
  font-size: small;
}
</style>
