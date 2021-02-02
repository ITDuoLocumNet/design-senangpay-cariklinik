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
          <v-row dense justify="center">
            <v-col
              v-for="(list, listIndex) in content.features"
              :key="listIndex"
              cols="12"
              sm="6"
            >
              <v-card flat color="transparent">
                <v-card-text>
                  <v-avatar size="80" color="white">
                    <v-icon size="50" :color="themeColor">{{
                      list.icon
                    }}</v-icon>
                  </v-avatar>
                  <div class="mt-4 text-subtitle-1 text-sm-h6">
                    <b>{{ list.title }}</b>
                  </div>
                  <div>
                    {{ list.desc }}
                  </div>
                </v-card-text>
              </v-card>
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
        title: 'Why A Website?',
        subs:
          'Some may think that website is irrelevent right now, but we think website is same as your house. An asset!',
        features: [
          {
            icon: 'mdi-check-circle',
            title: 'This Is Title',
            desc:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quas, reiciendis magni quaerat officia, asperiores natus dolore cum sunt eaque neque dolor. Ab eum quidem recusandae ipsa ea ratione impedit.',
          },
          {
            icon: 'mdi-cart',
            title: 'This Is Title',
            desc:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quas, reiciendis magni quaerat officia, asperiores natus dolore cum sunt eaque neque dolor. Ab eum quidem recusandae ipsa ea ratione impedit.',
          },
          {
            icon: 'mdi-file',
            title: 'This Is Title',
            desc:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quas, reiciendis magni quaerat officia, asperiores natus dolore cum sunt eaque neque dolor. Ab eum quidem recusandae ipsa ea ratione impedit.',
          },
          {
            icon: 'mdi-cash',
            title: 'This Is Title',
            desc:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quas, reiciendis magni quaerat officia, asperiores natus dolore cum sunt eaque neque dolor. Ab eum quidem recusandae ipsa ea ratione impedit.',
          },
        ],
      },
    }
  },
}
</script>

<style></style>
