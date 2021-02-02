<template>
  <v-row no-gutters justify="center" align="center">
    <v-col cols="12" sm="10" md="8" class="px-2">
      <!-- nav -->
      <index-nav id="nav"></index-nav>

      <!-- filter -->
      <index-filter></index-filter>
    </v-col>

    <!-- locations -->
    <index-location :is-scrolling="isScrolling"></index-location>

    <!-- listing -->
    <v-col cols="12" sm="10" md="8" class="px-2">
      <index-list @new-page="scrollTop"></index-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      isScrolling: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolling = true
    },
    scrollTop() {
      document.getElementById('nav').scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
<style scoped></style>
