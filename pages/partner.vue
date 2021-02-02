<template>
  <v-row no-gutters justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <index-nav></index-nav>

      <v-card
        v-for="(img, imgIndex) in imgList"
        :key="imgIndex"
        flat
        hover
        color="transparent"
      >
        <v-card-title class="text-h6 justify-center">
          <b>{{ img.title }}</b>
        </v-card-title>
        <div class="grey--text text-caption mt-n4 text-center">
          {{ img.desc }}
        </div>
        <v-card-text>
          <v-row no-gutters>
            <v-col align="center">
              <v-img max-width="650" :src="img.src"></v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-sheet color="transparent" class="my-10">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSenypNimDIT6LCToVKuOxxXYT3ncuJgdJuaBcBuOn3hqRp5eQ/viewform?embedded=true"
          width="100%"
          height="1100"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >Loading…</iframe
        >
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import img1 from '~/assets/img/1.png'
import img2 from '~/assets/img/2.png'
import img3 from '~/assets/img/3.png'
import img4 from '~/assets/img/4.png'
import img5 from '~/assets/img/5.png'
import img6 from '~/assets/img/6.png'
import img7 from '~/assets/img/7.png'
export default {
  data() {
    return {
      imgList: [
        {
          title: 'Siapa kami?',
          desc: 'Kami membantu anda meluaskan capaian',
          src: img1,
        },
        { title: '', desc: '', src: img2 },
        { title: '', desc: '', src: img3 },
        { title: '', desc: '', src: img4 },
        { title: '', desc: '', src: img5 },
        { title: '', desc: '', src: img6 },
        { title: '', desc: '', src: img7 },
      ],
    }
  },
}
</script>

<style></style>
