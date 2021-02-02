<template>
  <v-container class="fixed pa-0">
    <!-- futures update: add locales -->
    <!-- <div class="d-flex justify-end pt-2 pr-4">
      <v-btn
        v-for="locale in $i18n.locales"
        :key="locale.code"
        depressed
        :color="currentLang === locale.name ? 'info' : ''"
        x-small
        :to="switchLocalePath(locale.code)"
        class="text-capitalize mx-1"
        @click.passive="changeLang(locale.name)"
      >
        <b>{{ locale.name }}</b>
      </v-btn>
    </div> -->
    <!-- app bar -->
    <v-app-bar flat color="transparent" class="align-center">
      <div class="text-body-2 pb-2 d-flex align-end" @click="changePage('/')">
        <v-img :src="logo" max-width="40"></v-img>
        <div
          v-if="$vuetify.breakpoint.smAndUp"
          class="text-title-2 pt-2 primary--text"
        >
          <b
            >cari<span class="black--text">klinik</span
            ><span class="" style="color: #283891">.com</span></b
          >
        </div>
      </div>
      <v-spacer></v-spacer>
      <div
        v-if="$vuetify.breakpoint.xsOnly"
        class="text-title-2 pt-2 primary--text"
      >
        <b
          >cari<span class="black--text">klinik</span
          ><span class="" style="color: #283891">.com</span></b
        >
      </div>

      <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex flex-grow">
        <v-btn
          v-for="(page, indexPage) in pages"
          :key="indexPage"
          small
          :outlined="currentPage !== page.route"
          :color="currentPage === page.route ? 'primary' : 'grey darken-2'"
          class="text-capitalize ml-1"
          @click="changePage(page)"
        >
          <b>{{ page.name }}</b> <v-icon right>{{ page.icon }}</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-footer
      v-if="$vuetify.breakpoint.xsOnly"
      app
      color="white"
      class="justify-center pa-0"
    >
      <v-sheet
        v-for="(page, indexPage) in pages"
        :key="indexPage"
        min-width="100"
        color=""
        :class="
          currentPage === page.route
            ? 'text-center py-1 px-2 primary--text '
            : 'text-center py-1 px-2'
        "
        @click="changePage(page)"
      >
        <div>
          <v-icon :color="currentPage === page.route ? 'primary' : ''">
            {{ page.icon }}
          </v-icon>
        </div>
        <div class="text-caption">
          <small
            ><b>{{ page.name }}</b></small
          >
        </div>
      </v-sheet>
    </v-footer>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
const logo = require('~/static/icon.png')
export default {
  data() {
    return {
      logo,
      pages: [
        {
          name: 'Cari',
          icon: 'mdi-magnify-plus-outline',
          route: '/',
        },
        {
          name: 'Tentang Kami',
          icon: 'mdi-information',
          route: '/about',
        },
        {
          name: 'Untuk Institusi',
          icon: 'mdi-handshake',
          route: '/partner',
        },
        {
          name: 'SenangPay',
          icon: 'mdi-credit-card-outline',
          route: '/payment',
        },
      ],
      navbarDialog: false,
    }
  },
  computed: {
    ...mapState('active-state', {
      currentLang: (state) => state.activeKey,
      currentPage: (state) => state.activePage,
    }),
  },
  methods: {
    showNav() {
      this.navbarDialog = !this.navbarDialog
    },
    changeLang(locale) {
      this.$store.dispatch('active-state/updateActiveKey', locale.code)
    },
    changePage(page) {
      const src = page.route ? page.route : page
      this.$store.dispatch('active-state/updateActivePage', src)
      this.$router.push({
        path: src,
      })
    },
  },
}
</script>

<style></style>
