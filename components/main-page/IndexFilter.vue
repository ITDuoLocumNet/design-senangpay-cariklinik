<template>
  <v-container class="fixed pt-4">
    <v-row no-gutters align="center">
      <v-col cols="12" align="center"
        ><!-- category -->
        <div class="flex-wrap justify-center d-flex">
          <div
            v-for="(category, indexCategory) in categories"
            :key="indexCategory"
            class=""
            @click="categorySelect(category)"
          >
            <div
              :class="currentCategory === category.value ? 'border-down' : ''"
            >
              <!-- icon -->
              <v-sheet color="transparent">
                <v-img
                  :max-width="$vuetify.breakpoint.xsOnly ? 30 : 40"
                  :src="
                    currentCategory === category.value
                      ? category.imgOn
                      : category.img
                  "
                ></v-img>
              </v-sheet>

              <!-- btn -->
              <v-btn
                text
                :color="
                  currentCategory === category.value
                    ? 'primary'
                    : 'grey darken-2'
                "
                :x-small="$vuetify.breakpoint.xsOnly"
                class="text-capitalize mx-n1"
              >
                <div>
                  <b>
                    <small>{{ category.name }}</small>
                  </b>
                </div>
              </v-btn>
            </div>
          </div>
        </div>

        <!-- search bar -->
        <v-sheet max-width="425" rounded="lg" color="transparent" class="px-2">
          <div class="d-flex align-center">
            <v-text-field
              v-model="search"
              color="primary"
              hide-details="auto"
              prepend-inner-icon="mdi-magnify"
              placeholder="Cari"
              @input="searchInput"
            >
            </v-text-field>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const clinicOn = require('~/assets/icon/category/klinik-active.svg')
const clinic = require('~/assets/icon/category/klinik.svg')
const vetOn = require('~/assets/icon/category/vet-active.svg')
const vet = require('~/assets/icon/category/vet.svg')
const gigiOn = require('~/assets/icon/category/gigi-active.svg')
const gigi = require('~/assets/icon/category/gigi.svg')
const hospitalOn = require('~/assets/icon/category/hospital-active.svg')
const hospital = require('~/assets/icon/category/hospital.svg')
const farmacy = require('~/assets/icon/category/pharmacy.svg')
const farmacyOn = require('~/assets/icon/category/pharmacy-active.svg')
export default {
  data() {
    return {
      search: '',
      currentCategory: 'klinik',
      categories: [
        {
          value: 'klinik',
          name: 'Klinik',
          img: clinic,
          imgOn: clinicOn,
        },
        {
          value: 'pergigian',
          name: 'Pergigian',
          img: gigi,
          imgOn: gigiOn,
        },
        {
          value: 'farmasi',
          name: 'Farmasi',
          img: farmacy,
          imgOn: farmacyOn,
        },
        {
          value: 'hospital',
          name: 'Hospital',
          img: hospital,
          imgOn: hospitalOn,
        },
        {
          value: 'veterinar',
          name: 'Veterinar',
          img: vet,
          imgOn: vetOn,
        },
      ],
    }
  },
  methods: {
    categorySelect(category) {
      this.currentCategory = category.value
      this.$store.dispatch('filter/updateCategory', category.value)
    },
    searchInput() {
      this.$store.dispatch('filter/updateSearch', this.search)
    },
  },
}
</script>

<style scoped>
.border-down {
  border-bottom-style: solid;
  border-bottom-color: #00aeef;
}
</style>
