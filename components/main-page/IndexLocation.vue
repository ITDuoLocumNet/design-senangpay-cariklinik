<template>
  <v-container v-if="position" class="fixed pa-0">
    <v-footer
      :app="isScrolling"
      color="transparent"
      :class="isScrolling ? 'floating mb-13 pa-0' : 'pa-0'"
    >
      <v-row no-gutters>
        <!-- location indicator -->
        <v-col cols="12">
          <div class="d-flex justify-end justify-sm-center">
            <v-sheet
              rounded="sm"
              :min-width="$vuetify.breakpoint.xsOnly ? 100 : 300"
              color="yellow darken-3"
              class="px-4 py-1 text-caption text-sm-body-2 white--text"
            >
              <div class="d-flex align-center justify-end justify-sm-center">
                <v-icon color="white">mdi-map-marker</v-icon>
                <b class="mr-2">~ {{ radius }} km </b>
                <div>
                  <v-avatar size="30" color="white" @click="addRadius"
                    ><v-icon color="yellow darken-3"
                      >mdi-plus-thick</v-icon
                    ></v-avatar
                  >
                  <v-avatar size="30" color="white" @click="resetRadius"
                    ><v-icon color="yellow darken-3"
                      >mdi-refresh</v-icon
                    ></v-avatar
                  >
                </div>
              </div>
            </v-sheet>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    isScrolling: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedRadius: 0,
    }
  },
  computed: {
    ...mapState('filter', {
      radius: (state) => state.radius,
      position: (state) => state.position,
    }),
  },
  methods: {
    addRadius() {
      if (this.radius === 1) {
        this.selectedRadius = this.radius + 4
      } else this.selectedRadius = this.radius + 5
      this.$store.dispatch('filter/updateRadius', this.selectedRadius)
    },
    resetRadius() {
      this.selectedRadius = 1
      const res = {
        page: 1,
        radius: this.selectedRadius,
      }
      this.$store.dispatch('filter/updateAllFilter', res)
    },
  },
}
</script>

<style scoped>
.floating {
  z-index: 1;
}
</style>
