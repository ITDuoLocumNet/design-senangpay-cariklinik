<template>
  <v-sheet :color="themeColor">
    <div class="text-center py-2">
      <div class="white--text">
        <b>Copyright By Your Company</b>
      </div>
      <div>
        <v-btn
          v-for="(btn, btnIndex) in link"
          :key="btnIndex"
          icon
          color="white"
          :href="btn.src"
          target="_blank"
          class="ma-1 text-capitalize"
        >
          <v-icon>{{ btn.icon }}</v-icon>
        </v-btn>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  props: {
    themeColor: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'small',
    },
  },
  data() {
    return {
      link: [
        {
          src: 'https://www.facebook.com/okke.store',
          icon: 'mdi-facebook',
          iconColor: '',
        },
        {
          src: 'https://www.instagram.com/okke.la/',
          icon: 'mdi-instagram',
          iconColor: '',
        },
        {
          src: 'https://twitter.com/okke_la',
          icon: 'mdi-twitter',
          iconColor: '',
        },
        { src: 'mailto:admin@okke.la', icon: 'mdi-email', iconColor: '' },
        {
          src: 'ttps://wa.me/60195540360?text=Hello%20Okke%20Tech',
          icon: 'mdi-whatsapp',
          iconColor: '',
        },
      ],
    }
  },
}
</script>

<style></style>
