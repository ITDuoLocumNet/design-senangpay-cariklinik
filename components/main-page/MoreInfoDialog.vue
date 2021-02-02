<template>
  <v-card>
    <v-card-title class="">
      <v-row no-gutters align="center" justify="center">
        <v-col cols="9">
          <div class="text-body-2">
            <b>{{ clinic.name }}</b>
          </div>
        </v-col>
        <v-col cols="3" class="justify-end d-flex">
          <v-btn icon @click="close">
            <v-icon>mdi-close-thick</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text class="px-0">
      <v-sheet color="grey lighten-3" max-width="450" max-height="200" class="">
        <v-img :src="selected.image" max-width="450" max-height="200"> </v-img>
      </v-sheet>

      <!-- services -->
      <div class="px-6 py-2">
        <!-- position distance -->
        <v-chip v-if="position" small color="primary" class="text-caption mb-2">
          <v-icon left small>mdi-road-variant</v-icon><b>{{ distance }}</b>
        </v-chip>

        <!-- services -->
        <div class="text-caption">
          <b>Servis</b>
        </div>
        <!-- icons -->
        <div class="d-flex flex-wrap mt-1">
          <div
            v-for="(service, serviceIndex) in filteredServices"
            :key="serviceIndex"
          >
            <v-tooltip top>
              <template #activator="{ on, attrs }">
                <v-sheet
                  v-if="service.src !== ''"
                  size="35"
                  color="grey lighten-3"
                  class="mr-1 mb-1 pa-1"
                  rounded="circle"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-img
                    :src="`${apiUrl}/media/klinik_image_service/${service.ref_name}.svg`"
                    height="20"
                    width="20"
                  ></v-img>
                </v-sheet>
              </template>
              <div class="text-caption">
                <small
                  ><b>{{ service.name }}</b></small
                >
              </div>
            </v-tooltip>
          </div>
        </div>

        <!-- service content -->
        <div class="text-caption low-height">
          <small>{{ serviceList }}</small>
        </div>
      </div>

      <!-- payment & panel -->
      <div class="px-6 py-2">
        <div class="text-caption">
          <b>Pembayaran & Panel</b>
        </div>
        <!-- icons -->
        <div class="d-flex flex-wrap mt-1">
          <div v-for="(panel, panelIndex) in filteredPanels" :key="panelIndex">
            <v-tooltip top>
              <template #activator="{ on, attrs }">
                <v-sheet
                  v-if="panel.src !== ''"
                  size="35"
                  color="grey lighten-3"
                  class="mr-1 mb-1 pa-1"
                  rounded="circle"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-img
                    :src="`${apiUrl}/media/klinik_image_panel/${panel.ref_name}.svg`"
                    height="20"
                    width="20"
                  ></v-img>
                </v-sheet>
              </template>
              <div class="text-caption">
                <small
                  ><b>{{ panel.name }}</b></small
                >
              </div>
            </v-tooltip>
          </div>
        </div>

        <!-- service content -->
        <div class="text-caption low-height">
          <small>{{ panelList }}</small>
        </div>
      </div>

      <v-row dense class="px-6">
        <v-col cols="6">
          <!-- alamat -->
          <div class="py-2">
            <div class="text-caption">
              <b>Alamat</b>
            </div>
            <div class="text-caption low-height">
              <small class=""> {{ clinic.address }} <br /> </small>

              <!-- phone -->
              <v-btn
                v-if="phone"
                depressed
                color="info"
                x-small
                :href="`tel:${phone}`"
                class="mt-1"
              >
                <v-icon left x-small>mdi-phone</v-icon><b> {{ phone }}</b>
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <!-- operation hours -->
          <div class="py-2">
            <div class="text-caption">
              <b>Waktu Perniagaan</b>
            </div>
            <div class="text-caption low-height">
              <small class="">
                <!-- {{ operationHour }} -->
                Isnin : 9:30-5:00pm <br />
                Selasa : 9:30-5:00pm <br />
                Rabu : 9:30-5:00pm <br />
                Khamis : 9:30-5:00pm <br />
                Jumaat : 9:30-5:00pm <br />
                Sabtu : 9:30-5:00pm <br />
                Ahad : Tutup <br />
              </small>
            </div>
          </div>
        </v-col>

        <!-- promotions -->
        <v-col cols="12">
          <div class="py-2">
            <div class="text-caption">
              <b>Promosi</b>
            </div>
            <div v-if="!selected.promotion" class="text-caption low-height">
              <small> Tiada </small>
            </div>
            <div v-else class="text-caption low-height">
              <div class="d-flex flex-wrap">
                <v-img
                  max-width="150"
                  class="mr-1"
                  :src="selected.promotion"
                ></v-img>
                <v-img
                  max-width="150"
                  class="mr-1"
                  :src="selected.promotion_1"
                ></v-img>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- google map -->
      <!-- <v-sheet min-height="300" color="primary">
        <div class="px-6 py-2 text-body-2 white--text">
          <b>Peta</b>
        </div>
        <iframe :src="mapView" width="100%" height="300" class=""></iframe>
      </v-sheet> -->
    </v-card-text>
    <v-card-actions class="justify-end">
      <!-- phone -->
      <v-btn
        v-if="phone"
        outlined
        color="primary"
        small
        :href="`tel:${phone}`"
        class="pr-1 mr-n1 text-capitalize"
      >
        <b> Telefon</b><v-icon right x-small>mdi-phone</v-icon>
      </v-btn>

      <!-- appointment -->
      <v-btn
        outlined
        small
        color="primary"
        class="pr-1 mr-n1 text-capitalize"
        @click="contact"
      >
        <b>Temujanji</b><v-icon right x-small>mdi-file-account</v-icon>
      </v-btn>

      <!-- navigation -->
      <v-btn
        small
        depressed
        color="primary"
        class="pr-1 mr-n1 text-capitalize white--text"
        @click="showNav"
      >
        <b>Navigasi</b> <v-icon right small>mdi-arrow-right-bold</v-icon>
      </v-btn>
    </v-card-actions>

    <!-- dialogs -->
    <div>
      <v-bottom-sheet v-model="navigateDialog" max-width="450">
        <v-card>
          <v-card-text>
            <div class="justify-center pt-4 d-flex">
              <v-btn
                color="white"
                class="mx-1 text-capitalize primary--text"
                @click="goNow(wazeUrl)"
                >Waze <v-icon right>mdi-waze</v-icon>
              </v-btn>
              <v-btn
                color="white"
                class="mx-1 text-capitalize primary--text"
                @click="goNow(googleUrl)"
                >Google <v-icon right>mdi-google-maps</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
const img = require('~/assets/img/default-img.svg')
export default {
  props: {
    selected: {
      type: Object,
      default: () => ({}),
    },
    position: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      img,
      zoom: 4,
      navigateDialog: false,
    }
  },
  computed: {
    ...mapState('icons', {
      services: (state) => state.services,
      panels: (state) => state.panels,
    }),
    apiUrl() {
      return process.env.API_URL
    },
    filteredServices() {
      const def = [60]
      const currentService =
        this.selected.services && this.selected.services.length > 0
          ? this.selected.services
          : def
      const filter = this.services.filter((v) => currentService.includes(v.id))
      return filter
    },
    filteredPanels() {
      const def = [39]
      const currentPanel =
        this.selected.panels && this.selected.services.length > 0
          ? this.selected.panels
          : def
      const filter = this.panels.filter((v) => currentPanel.includes(v.id))
      return filter
    },
    serviceList() {
      const list = this.filteredServices.map((v) => v.name)
      return list.join(', ')
    },
    panelList() {
      const list = this.filteredPanels.map((v) => v.name)
      return list.join(', ')
    },
    clinic() {
      return this.selected
    },
    phone() {
      return this.clinic.contact
    },
    distance() {
      const dis = this.clinic.distance ? this.clinic.distance : 0
      if (dis < 1) {
        const m = dis * 1000
        return `${m.toFixed(0)} m`
      } else return `${dis.toFixed(2)} km`
    },
    mapView() {
      const url = `https://embed.waze.com/ms/iframe?zoom=12&lat=${this.clinic.latitude}&lon=-${this.clinic.longitude}&pin=1`
      return url
    },
    wazeUrl() {
      const url = `https://waze.com/ul?&ll=${this.clinic.latitude},${this.clinic.longitude}&navigate=yes`
      return url
    },
    googleUrl() {
      const url = `https://www.google.com/maps/search/?api=1&query=${this.clinic.latitude},${this.clinic.longitude}`
      return url
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
    contact() {
      this.$emit('appointment')
    },
    showNav() {
      this.navigateDialog = true
    },
    goNow(url) {
      this.$snackbar.show('Mulakan navigasi anda...')
      setTimeout(() => {
        window.open(url, '_blank')
        this.$emit('close')
      }, 300)
    },
  },
}
</script>

<style></style>
