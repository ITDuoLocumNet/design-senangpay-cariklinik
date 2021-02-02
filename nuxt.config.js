import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | Cari Klinik Mudah',
    title: 'cariklinik',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1 maximum-scale=1, user-scalable=no',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Cariklinik.com, platform untuk anda mengakses dengan cepat dan mudah informasi servis institusi kesihatan seperti klinik, hospital, klinik haiwan, klinik gigi dan farmasi. Semuanya dalam cariklinik.com',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'klinik, hospital, vet clinic, klinik haiwan, klinik berdekatan, clinic, swab, xray,influenza',
      },
      // og metas
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Cariklinik.com',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Cariklinik.com, platform untuk anda mengakses dengan cepat dan mudah informasi servis institusi kesihatan seperti klinik, hospital, klinik haiwan, klinik gigi dan farmasi. Semuanya dalam cariklinik.com',
      },
    ],
    link: [],
  },

  pwa: {
    icon: {
      fileName: 'icon.png',
    },
    manifest: {
      name: 'Cariklinik',
      short_name: 'Cariklinik',
      start_url: '/',
      display: 'standalone',
      background_color: '#FFF',
    },
  },

  // server port option
  server: {
    port: process.env.SERVER_PORT,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/global.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/snackbar.js', '~/plugins/vue-iframe.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    ['@nuxtjs/pwa', { workbox: false }],
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-facebook-pixel-module',
    // 'nuxt-i18n',

    [
      // hotjar
      '@netsells/nuxt-hotjar',
      {
        id: '2197675',
        sv: '6',
      },
    ],
  ],

  // https://i18n.nuxtjs.org/basic-usage
  // i18n: {
  //   locales: [
  //     { code: 'ms', name: 'Melayu', iso: 'ms-MY', file: 'ms.js' },
  //     // { code: 'en', name: 'English', iso: 'en-US', file: 'en.js' },
  //   ],
  //   defaultLocale: 'ms',
  //   lazy: true,
  //   langDir: 'content/lang/',
  //   vueI18n: {
  //     fallbackLocale: 'ms',
  //   },
  // },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    retry: { retries: 3 },
  },
  loading: {
    color: '#00AEEF',
    height: '5px',
  },

  // ga
  googleAnalytics: {
    id: 'UA-183908212-1',
    // debug: {
    //   enabled: true,
    //   sendHitTask: true,
    // },
  },

  // fb
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '211673120427650',
    routes: ['/index'],
    // for dashboard - 2833127306960046
    pixels: [
      {
        pixelId: '283312730690046',
        routes: ['/partner'],
      },
    ],
    autoPageView: true,
    disabled: false,
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Poppins',
      },
    },
    theme: {
      themes: {
        light: {
          primary: '#00AEEF',
          secondary: '#283891',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
