<template>
  <v-card>
    <v-card-title class="justify-space-between">
      <div class="text-body-2">
        <b>Hubungi</b>
      </div>
      <v-btn icon @click="close">
        <v-icon>mdi-close-thick</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <div class="mb-4 text-caption">
        Hubungi sekarang untuk mengetahui servis lebih lanjut.
      </div>
      <div class="text-caption">
        <b>{{ clinic.name }}</b> <br />
        {{ clinic.address }} <br />
        <div v-if="phone"><v-icon left small>mdi-phone</v-icon>{{ phone }}</div>
      </div>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn
        v-if="phone"
        outlined
        small
        color="info"
        :href="`tel:${phone}`"
        class="my-1 text-capitalize"
        ><b>Telefon</b> <v-icon right small>mdi-phone</v-icon>
      </v-btn>
      <v-btn
        min-width="60"
        small
        depressed
        color="primary"
        class="text-capitalize"
        @click="appointment"
      >
        <b>Temujanji</b> <v-icon right small>mdi-file-account</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    selected: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    clinic() {
      return this.selected
    },
    phone() {
      return this.clinic.contact
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
    appointment() {
      this.$emit('appointment')
      this.$emit('close')
    },
  },
}
</script>

<style></style>
