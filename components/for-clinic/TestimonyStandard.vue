<template>
  <v-container class="white">
    <div class="text-center text-h6 text-sm-h5 pt-10 py-4">
      <b :class="`${themeColor}--text`">{{ content.title }}</b>
    </div>
    <div class="d-flex justify-center">
      <div
        v-for="(list, listIndex) in content.testimony"
        :key="listIndex"
        class="pb-4"
      >
        <v-scale-transition v-model="list.active" hide-on-leave>
          <v-card
            v-if="list.active"
            max-width="600"
            :color="themeColor"
            class="px-2 mx-2 mx-sm-0"
          >
            <v-card-text class="white--text">
              <h3 class="my-4">{{ list.title }}</h3>
              <div>
                <!-- content -->
                <div>
                  <div class="d-flex justify-center">
                    <div class="text-h3 font-weight-bold mr-2">"</div>
                    <div>
                      {{ list.desc }}
                    </div>
                  </div>
                  <div class="text-h3 font-weight-bold text-right mt-n4">"</div>
                </div>

                <!-- avatar -->
                <div class="d-flex align-center">
                  <v-avatar color="white" size="50" class="mr-4 pa-1">
                    <v-img :src="list.img"></v-img>
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-2">{{ list.author }}</div>
                    <div class="text-caption">{{ list.company }}</div>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-scale-transition>
      </div>
    </div>
    <div class="d-flex justify-center align-center">
      <div v-for="(btn, btnIndex) in content.testimony" :key="btnIndex">
        <v-btn icon @mouseover="show(btnIndex)">
          <v-icon small :color="btn.active ? themeColor : ''"
            >mdi-circle</v-icon
          >
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
const avatar1 = require('~/assets/avatars/woman.png')
const avatar2 = require('~/assets/avatars/man.png')
const avatar3 = require('~/assets/avatars/hijab.png')
export default {
  props: {
    themeColor: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentIndex: null,
      content: {
        title: 'What Our Client Say?',
        testimony: [
          {
            active: true,
            title: 'Great Services!',
            desc:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam vitae sapiente at officiis, ratione porro nisi atque temporibus cumque nesciunt sed quaerat maiores voluptates adipisci dicta, laudantium amet voluptatibus tempora.',
            img: avatar1,
            author: 'Mark Jones',
            company: 'Alphabet Enterprise',
          },
          {
            active: false,
            title: 'Fast Delivery!',
            desc:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam vitae sapiente at officiis, ratione porro nisi atque temporibus cumque nesciunt sed quaerat maiores voluptates adipisci dicta, laudantium amet voluptatibus tempora.',
            img: avatar2,
            author: 'Jane Corner',
            company: 'Alphabet Enterprise',
          },
          {
            active: false,
            title: 'Really Worth It!',
            desc:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam vitae sapiente at officiis, ratione porro nisi atque temporibus cumque nesciunt sed quaerat maiores voluptates adipisci dicta, laudantium amet voluptatibus tempora.',
            img: avatar3,
            author: 'Alice Wonderl',
            company: 'Alphabet Enterprise',
          },
        ],
      },
    }
  },
  methods: {
    show(index) {
      for (let index = 0; index < this.content.testimony.length; index++) {
        const element = this.content.testimony[index]
        element.active = false
      }
      this.currentIndex = index
      this.content.testimony[index].active = true
    },
  },
}
</script>

<style></style>
