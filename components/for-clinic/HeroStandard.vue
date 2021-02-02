<template>
  <!-- hero -->
  <div>
    <!-- mobile -->
    <template v-if="$vuetify.breakpoint.xs">
      <!-- app bar -->
      <v-app-bar flat color="transparent" class="">
        <h3 :class="`${themeColor}--text`">Logo</h3>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="openDrawer"> </v-app-bar-nav-icon>
      </v-app-bar>

      <!-- navigation drawer -->
      <v-navigation-drawer v-model="drawer" app dense :color="themeColor">
        <v-container>
          <div class="text-center py-2">
            <h1 class="white--text">Logo</h1>
          </div>
          <v-list dense>
            <v-list-item-group>
              <v-list-item
                v-for="(list, i) in menu"
                :key="i"
                @click="goTo(list.src)"
              >
                <div class="text-caption white--text">
                  <b>{{ list.name }}</b>
                </div>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-container>
      </v-navigation-drawer>

      <!-- content -->
      <v-row no-gutters align="center">
        <v-col cols="12">
          <v-img :src="hero" height="100"></v-img>
        </v-col>
        <v-col cols="12">
          <v-card height="50%" flat color="transparent" class="pa-6">
            <div class="text-h5 font-weight-bold">
              {{ content.title1 }}
              <span :class="`${themeColor}--text text-h4 font-weight-black`">{{
                content.title2
              }}</span>
            </div>
            <div class="ma-2">
              {{ content.sub }}
            </div>
            <div class="mt-4">
              <v-btn
                text
                outlined
                :color="themeColor"
                class="mr-2 text-capitalize"
                @click="action1"
                ><b>{{ content.cta1 }}</b></v-btn
              >
              <v-btn
                depressed
                :color="themeColor"
                class="text-capitalize white--text"
                @click="action2"
                ><b>{{ content.cta2 }}</b>
                <v-icon color="white" right
                  >mdi-arrow-right-circle</v-icon
                ></v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </template>

    <!-- sm and up -->
    <template v-else>
      <v-img
        eager
        gradient="110deg, white 60% ,transparent 60%"
        :src="hero"
        min-height="300"
        max-height="600"
      >
        <template>
          <!-- app bar -->
          <v-app-bar flat color="transparent" class="pl-6 pl-lg-12">
            <v-row no-gutters align="center">
              <v-col cols="2">
                <h3 :class="`${themeColor}--text`">Logo</h3>
              </v-col>
              <v-col cols="7">
                <v-hover v-for="(list, i) in menu" :key="i" v-slot="{ hover }">
                  <v-btn
                    text
                    :color="hover ? '' : themeColor"
                    :outlined="hover"
                    :small="$vuetify.breakpoint.mdAndDown"
                    class="text-capitalize"
                    @click="goTo(list.src)"
                  >
                    <b>{{ list.name }}</b>
                  </v-btn>
                </v-hover>
              </v-col>
            </v-row>
          </v-app-bar>

          <!-- content -->
          <v-row no-gutters align="center">
            <v-col cols="6">
              <v-card
                max-height="600"
                flat
                color="transparent"
                class="px-8 px-lg-16 py-10 py-lg-16 mt-md-10 mt-xl-16"
              >
                <div class="text-h5 text-md-h4 text-lg-h3 font-weight-bold">
                  {{ content.title1 }}
                  <span
                    :class="`${themeColor}--text text-h4 text-md-h3 text-lg-h2 font-weight-black`"
                    >{{ content.title2 }}</span
                  >
                </div>
                <div class="ma-2">
                  {{ content.sub }}
                </div>
                <div class="mt-4">
                  <v-btn
                    text
                    outlined
                    :color="themeColor"
                    class="mr-2 text-capitalize"
                    @click="action1"
                    ><b>{{ content.cta1 }}</b></v-btn
                  >
                  <v-btn
                    depressed
                    :color="themeColor"
                    class="text-capitalize white--text"
                    @click="action2"
                    ><b>{{ content.cta2 }}</b>
                    <v-icon color="white" right
                      >mdi-arrow-right-circle</v-icon
                    ></v-btn
                  >
                </div>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-img>
    </template>
  </div>
</template>

<script>
const hero = require('~/assets/photos/template/hero-standard.jpg')
export default {
  props: {
    themeColor: {
      type: String,
      default: '',
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      hero,
      isHover: false,
      hoverId: '',
      drawer: false,

      content: {
        title1: 'This Is Your Beautiful',
        title2: 'Website',
        sub:
          'This section is called "hero" section. Image resolution for this section is  1,920x1,080',
        cta1: 'More Info',
        cta2: 'Contact Us',
      },
    }
  },
  methods: {
    openDrawer() {
      this.drawer = true
    },
    goTo(route) {
      this.$emit('goto', route)
      // document.getElementById(route).scrollIntoView({ behavior: 'smooth' })
      this.drawer = false
    },
    action1() {
      this.$emit('action1')
    },
    action2() {
      this.$emit('action2')
    },
  },
}
</script>

<style></style>
