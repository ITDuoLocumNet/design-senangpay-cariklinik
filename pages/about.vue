<template>
  <v-row no-gutters justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <!-- nav -->
      <index-nav></index-nav>

      <!-- content -->
      <v-container class="fixed px-5">
        <v-row align="center">
          <v-col cols="12" align="center">
            <!-- title -->
            <div class="text-center text-h6">
              <b>Accessible Healthcare For Everyone</b>
            </div>
            <!-- image -->
            <v-sheet max-width="400" color="transparent" class="my-2 pa-6">
              <v-img :src="doc"></v-img>
            </v-sheet>
          </v-col>

          <v-col cols="12" class="text-caption">
            <div>
              Seperti anda, kami di cariklinik.com juga merupakan manusia biasa
              yang kadang kala jatuh sakit dan memerlukan bantuan kesihatan.
              <br />
              <br />
              Kami juga faham akan perasaan anda lebih terganggu apabila pesakit
              itu datang dari kalangan insan yang kita cintai seperti ibu &
              ayah, suami atau isteri dan anak-anak. <br />
            </div>

            <div>
              Disamping kesakitan yang disebabkan penyakit yang dihidapi itu,
              hati kita menjadi lebih luluh apabila melihat mereka terpaksa
              menunggu lama, bersesak-sesak dan tercari-cari dimana hala tuju
              yang tepat. Kesakitan hakiki penyakit itu bagaikan ditambah lagi
              dengan perasaan yang tidak selesa, gundah gulana dan meresahkan.
              <br /><br />

              Apalah guna segala harta di dunia ini sekiranya kita tidak dapat
              membahagiakan orang yang tersayang? Oleh itu, kami di Locum Net
              Asia Sdn Bhd, melancarkan produk cariklinik.com atas satu
              semangat, bahawasanya, kami juga manusia seperti anda. Kami juga
              mempunyai perasaan dan orang yang tercinta.<br /><br />

              Dengan adanya cariklinik.com ini, kami dapat meningkatkan akses
              informasi rakyat terhadap institusi kesihatan di Malaysia.
              Hasilnya, platform ini akan dapat membantu orang awam membuat
              keputusan berkaitan servis kesihatan dalam masa yang singkat dan
              tepat.<br /><br />

              Ketepatan dan ketangkasan itu bukanlah hanya dapat menjimatkan
              masa dan wang, tetapi yang lebih penting dapat mengurangkan
              kesakitan fizikal dan mental yang selama ini terpaksa ditanggung
              oleh keseluruh pelanggan industri kesihatan.<br /><br />

              Di samping itu juga, kami maklum akan ekosistem kesihatan ini
              mempunyai pelbagai pemain industri dari segi temujanji, giliran
              dan sistem konsultasi.<br /><br />
              Oleh yang demikian, cariklinik.com akan menggalas misi utk
              menintergrasi pelbagai sistem di Malaysia agar kami menjadi pintu
              masuk kepada industri ini. Kemungkinan, tiada lagi keperluan untuk
              anda melawat setiap laman sesawang institusi-institusi kesihatan
              atau secara fizikal pergi dari suatu institusi ke institusi lain
              hanya sekadar ingin memilih servis yang sesuai untuk anda.<br /><br />

              Industri kesihatan juga dipenuhi dengan pelbagai maklumat yang
              mungkin asing bagi kita rakyat negara ini seperti perkataan
              gynaecology, orthopaedic dan paediatric. Kita bukan berbicara
              tentang tahap pembalajaran rakyat kita, tetapi kita sedang
              berbicara tentang nyawa insan di negara ini. Mungkin kita hanya
              pandang enteng erti nyawa pekerja buruh dan peluh si petani,
              tetapi mereka ini mungkin ibu atau bapa kepada bakal perdana
              menteri kita akan datang.<br /><br />
              Oleh yang demikian, kami di cariklinik.com cuba sedaya upaya
              menterjemah penggunaan kata-kata asing ini kepada bahasa ibunda
              kita semua. Agar dengan ini, kita dapat memberikan akses kepada
              semua, tidak mengira bangsa, agama atau warna kulit.<br /><br />

              cariklinik.com ini adalah yang PERTAMA di Malaysia. Menjadi yang
              PERTAMA ada kebaikannya dan kekurangannya. Namun, kami percaya,
              dengan sokongan SELURUH rakyat Malaysia, kami mampu mengorak
              langkah lebih jauh. Kami berharap, anda sentiasa memberikan
              cadangan dan komen membina agar kami terus membesar dengan
              jayanya.<br /><br />

              Di Locum Net Asia Sdn Bhd, dengan pelancaran cariklinik.com ini,
              ia menegaskan pendirian kami dalam melaksanakan perniagaan ini.
              Tidak dapat tidak, kami harus mencari sedikit pulangan dari kos
              yang kami telah laburkan. Tetapi, ia tidak perlu berhenti di situ
              sahaja, kami sentiasa akan menggeluarkan produk berdasarkan impak
              yang kami akan berikan kepada pelanggan kami. Neraca kami yang
              utama adalah, berapa banyak masalah yang kami akan selesaikan,
              kesakitan yang kami akan ubati dan juga beban yang kami akan
              kurangkan dalam penghasilan sesuatu produk. Kerana kami yakin,
              kami juga manusia seperti anda. Matlamat hidup kami adalah untuk
              kekal bermanfaat kepada agama, bangsa dan negara.<br /><br />

              <div class="text-h6">Accessible Healthcare For Everyone</div>
              <br />

              Untuk mengenali syarikat kami lebih lanjut, sila layari laman
              sesawang korporat kami di
              <a href="https://locumnet.asia" target="_blank">locumnet.asia</a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
const doc = require('~/assets/img/walking-doc.svg')
export default {
  data() {
    return {
      doc,
    }
  },
}
</script>
