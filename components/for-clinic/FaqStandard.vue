<template>
  <section class="grey lighten-3">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10">
          <!-- header -->
          <v-row class="mb-6">
            <v-col cols="12">
              <div class="text-center">
                <div class="text-h6 text-sm-h5">
                  <b :class="`${themeColor}--text`">{{ content.title }}</b>
                </div>
                <div class="text-body-2">{{ content.subs }}</div>
              </div>
            </v-col>
          </v-row>

          <!-- content -->
          <v-row no-gutters justify="center">
            <v-col cols="12">
              <div
                v-for="(list, listIndex) in content.features"
                :key="listIndex"
              >
                <!-- title -->
                <v-card
                  outlined
                  class="px-2 mx-2 mx-sm-0"
                  @mouseover="show(listIndex)"
                >
                  <v-card-title class="py-2">
                    <div class="d-flex align-center">
                      <v-icon
                        :color="list.active ? themeColor : ''"
                        class="mr-2"
                        >{{ list.icon }}</v-icon
                      >
                      <div class="text-body-2 text-sm-subtitle-1">
                        <b :class="list.active ? `${themeColor}--text` : ''">{{
                          list.title
                        }}</b>
                      </div>
                    </div>
                  </v-card-title>
                </v-card>
                <!-- content -->
                <v-expand-transition v-model="list.active" hide-on-leave>
                  <v-card
                    v-if="list.active"
                    color="transparent"
                    class="px-2 mx-2 mx-sm-0"
                  >
                    <v-card-text>
                      <div>
                        {{ list.desc }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-expand-transition>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    themeColor: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      content: {
        title: 'FAQ',
        subs: 'Frequently Asked Questions',
        features: [
          {
            active: true,
            icon: 'mdi-check-circle',
            title: 'This Is Title',
            desc:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quas, reiciendis magni quaerat officia, asperiores natus dolore cum sunt eaque neque dolor. Ab eum quidem recusandae ipsa ea ratione impedit.',
          },
          {
            active: false,
            icon: 'mdi-check-circle',
            title: 'This Is Title',
            desc:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quas, reiciendis magni quaerat officia, asperiores natus dolore cum sunt eaque neque dolor. Ab eum quidem recusandae ipsa ea ratione impedit.',
          },
          {
            active: false,
            icon: 'mdi-check-circle',
            title: 'This Is Title',
            desc:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quas, reiciendis magni quaerat officia, asperiores natus dolore cum sunt eaque neque dolor. Ab eum quidem recusandae ipsa ea ratione impedit.',
          },
          {
            active: false,
            icon: 'mdi-check-circle',
            title: 'This Is Title',
            desc:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quas, reiciendis magni quaerat officia, asperiores natus dolore cum sunt eaque neque dolor. Ab eum quidem recusandae ipsa ea ratione impedit.',
          },
        ],
      },
    }
  },
  methods: {
    show(index) {
      for (let index = 0; index < this.content.features.length; index++) {
        const element = this.content.features[index]
        element.active = false
      }
      this.currentIndex = index
      this.content.features[index].active = true
    },
  },
}
</script>

<style></style>
