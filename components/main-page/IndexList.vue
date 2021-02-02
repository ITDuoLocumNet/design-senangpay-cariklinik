<template>
  <v-container class="fixed py-0">
    <v-row dense align="center">
      <!-- location warn -->
      <v-col v-if="!position" cols="12" class="mt-n4">
        <div class="text-caption error--text text-center">
          <small
            ><b>Allow your location sharing to get result by location</b></small
          >
        </div>
      </v-col>

      <!-- total lists -->
      <v-col v-if="totalLists && position" cols="12">
        <div class="text-caption grey--text text--darken-1">
          <b>Keputusan: {{ totalLists }} klinik</b>
        </div>
      </v-col>

      <!-- clinic listing -->
      <v-col
        v-for="(clinic, indexClinic) in lists"
        :key="indexClinic"
        cols="6"
        sm="3"
      >
        <v-card v-if="!loading" hover>
          <v-sheet color="primary" min-height="70" @click="moreInfo(clinic)">
            <v-img
              eager
              :src="clinic.image ? clinic.image : img"
              min-height="70"
            ></v-img>
          </v-sheet>
          <v-card-text class="py-0" @click="moreInfo(clinic)">
            <!-- title -->
            <v-sheet class="text-body-2 primary--text low-height">
              <small class="font-weight-bold">
                {{ clinic.name }}
              </small>
            </v-sheet>

            <v-row dense>
              <!-- service -->
              <v-col cols="6" class="mb-1">
                <div class="d-flex flex-wrap">
                  <div>
                    <v-tooltip top>
                      <template #activator="{ on, attrs }">
                        <v-sheet
                          size="35"
                          color="grey lighten-3"
                          class="mr-1 pa-1"
                          rounded="circle"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-img
                            eager
                            :src="filteredServiceList.src"
                            height="15"
                            width="15"
                          ></v-img>
                        </v-sheet>
                      </template>
                      <div class="text-caption">
                        <small
                          ><b>{{ filteredServiceList.name }}</b></small
                        >
                      </div>
                    </v-tooltip>
                  </div>
                </div>
              </v-col>

              <!-- payment & panel -->
              <v-col cols="6" class="mb-1">
                <div class="d-flex flex-wrap">
                  <div>
                    <v-tooltip top>
                      <template #activator="{ on, attrs }">
                        <v-sheet
                          size="35"
                          color="grey lighten-3"
                          class="mr-1 pa-1"
                          rounded="circle"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-img
                            :src="filteredPanelList.src"
                            height="15"
                            width="15"
                          ></v-img>
                        </v-sheet>
                      </template>
                      <div class="text-caption">
                        <small
                          ><b>{{ filteredPanelList.name }}</b></small
                        >
                      </div>
                    </v-tooltip>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>

          <!-- actions -->
          <div class="justify-center py-1 d-flex">
            <v-btn
              min-width="60"
              text
              x-small
              color="grey darken-2"
              class="px-0 text-capitalize grey lighten-3"
              @click="contact(clinic)"
            >
              <b>Hubungi</b>
            </v-btn>
            <v-btn
              min-width="60"
              x-small
              depressed
              color="primary"
              class="px-0 text-capitalize white--text"
              @click="moreInfo(clinic)"
            >
              <b>Navigasi</b>
            </v-btn>
          </div>
        </v-card>
      </v-col>

      <!-- pagination -->
      <v-col cols="12" class="mb-16">
        <div v-if="totalLists > pageSize" class="my-5">
          <v-pagination v-model="page" :length="totalPage"></v-pagination>
        </div>
      </v-col>
    </v-row>

    <!-- dialogs -->
    <div>
      <!-- appointment dialog -->
      <v-dialog
        v-model="appointmentDialog"
        eager
        persistent
        scrollable
        max-width="400"
        transition="scroll-y-reverse-transition"
      >
        <client-only>
          <appointment-dialog
            :selected="selected"
            @close="appointmentDialog = false"
          ></appointment-dialog>
        </client-only>
      </v-dialog>

      <!-- contact dialog -->
      <v-dialog
        v-model="contactDialog"
        persistent
        scrollable
        eager
        max-width="400"
        transition="scroll-y-reverse-transition"
      >
        <contact-dialog
          :selected="selected"
          @appointment="appointment"
          @close="contactDialog = false"
        ></contact-dialog>
      </v-dialog>

      <!-- moreInfo dialog -->
      <v-dialog
        v-model="moreInfoDialog"
        persistent
        eager
        :fullscreen="$vuetify.breakpoint.xsOnly"
        scrollable
        max-width="450"
        transition="scroll-y-reverse-transition
        "
      >
        <more-info-dialog
          :selected="selected"
          :position="position"
          @appointment="appointment"
          @contact="contact"
          @close="moreInfoDialog = false"
        ></more-info-dialog>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
const img = require('~/assets/img/default-img.svg')
const general = require('~/assets/icon/services/kesihatan-am.svg')
const cash = require('~/assets/icon/panels/cash.svg')
export default {
  data() {
    return {
      cash,
      general,
      img,
      page: 1,
      currentRadius: 1,
      hasPosition: false,
      loading: false,
      latitude: 3,
      longitude: 101.6124,
      lists: null,
      pageSize: 16,
      totalLists: 0,
      selected: {},
      appointmentDialog: false,
      contactDialog: false,
      moreInfoDialog: false,
    }
  },
  computed: {
    ...mapState('filter', {
      search: (state) => state.search,
      category: (state) => state.category,
      radius: (state) => state.radius,
      position: (state) => state.position,
    }),

    ...mapState('icons', {
      services: (state) => state.services,
      panels: (state) => state.panels,
    }),
    filteredServiceList() {
      // const def = [60]
      // const filter = this.services.filter((v) => def.includes(v.id))
      return {
        id: 60,
        name: 'Kesihatan Am',
        value: 'general',
        src: this.general,
      }
    },
    filteredPanelList() {
      // const def = [40]
      // const filter = this.panels.filter((v) => def.includes(v.id))
      return { id: 40, name: 'Tunai', value: 'cash', src: this.cash }
    },
    totalPage() {
      return Math.floor((this.totalLists + this.pageSize - 1) / this.pageSize)
    },
    // Result query
    url() {
      return `${process.env.API_URL}/api/institution/?type=${this.category}&page=${this.page}&radius=${this.radius}&search=${this.search}&latitude=${this.latitude}&longitude=${this.longitude}`
    },
    // panel query
    panelUrl() {
      return `${process.env.API_URL}/api/panel`
    },
    // service query
    serviceUrl() {
      return `${process.env.API_URL}/api/service`
    },
  },
  watch: {
    category(v) {
      this.page = 1
      this.$emit('new-page')
    },
    page(newValue) {
      this.page = newValue
      this.$emit('new-page')
      this.fetchData()
    },
    latitude() {
      this.hasPosition = true
      const res = {
        position: this.hasPosition,
        radius: 1,
      }
      this.getPosition()
      this.$store.dispatch('filter/updateAllFilter', res)
    },
  },
  mounted() {
    this.loading = true
    this.getPosition()
    this.fetchPanels()
    this.fetchServices()
    setTimeout(() => {
      this.fetchData()
      this.loading = false
    }, 500)
    this.$store.subscribeAction({
      after: (payload, state) => {
        if (payload.type.includes('filter')) {
          this.fetchData()
        }
      },
    })
  },
  methods: {
    async fetchData() {
      try {
        const data = await this.$axios.$get(this.url)
        this.totalLists = data.count
        this.lists = data.results
      } catch (err) {
        this.$snackbar.error(err)
      }
    },
    async fetchPanels() {
      try {
        const data = await this.$axios.$get(this.panelUrl)
        if (data.length > 0) this.$store.dispatch('icons/updatePanel', data)
      } catch (err) {
        this.$snackbar.error(err)
      }
    },
    async fetchServices() {
      try {
        const data = await this.$axios.$get(this.serviceUrl)
        if (data.length > 0) this.$store.dispatch('icons/updateService', data)
      } catch (err) {
        this.$snackbar.error(err)
      }
    },
    getPosition() {
      const that = this
      const options = {
        enableHighAccuracy: true,
        // timeout: 5000,
        // maximumAge: 0,
      }
      function success(pos) {
        const crd = pos.coords
        that.latitude = crd.latitude
        that.longitude = crd.longitude
      }
      function error(err) {
        // eslint-disable-next-line
        console.warn(err)
        // that.$snackbar.show('Perkongsian lokasi ditutup', 'error')
      }
      navigator.geolocation.getCurrentPosition(success, error, options)
    },
    distance(dis) {
      if (dis < 1) {
        const m = dis * 1000
        return `${m.toFixed(0)} m`
      } else return `${dis.toFixed(2)} km`
    },
    appointment(data) {
      if (data) this.selected = data
      this.appointmentDialog = true
    },
    contact(data) {
      if (data) this.selected = data
      this.contactDialog = true
    },
    moreInfo(data) {
      this.selected = data
      this.moreInfoDialog = true
    },
  },
}
</script>

<style></style>
