<template>
  <v-card>
    <v-card-title class="justify-space-between">
      <div class="text-body-2">
        <b>Temujanji</b>
      </div>
      <v-btn icon @click="close">
        <v-icon>mdi-close-thick</v-icon>
      </v-btn>
    </v-card-title>

    <!-- stop gform rerouting -->
    <iframe name="hidden" style="display: none"></iframe>

    <v-card-text class="pt-0">
      <!-- google form -->
      <v-form
        ref="form"
        :action="gform.formAction"
        method="post"
        target="hidden"
        @submit="appointment"
      >
        <div class="mb-4 text-caption low-height">
          Isi maklumat anda untuk menetapkan temujanji.
        </div>

        <!-- question -->
        <div>
          <!-- covid classification -->
          <div v-show="question === 0">
            <div class="text-body-2 mb-2">
              <b>Klasifikasi Risiko Covid-19</b>
            </div>
            <div ref="form1">
              <!-- covid 1 -->
              <div>
                <div class="text-caption low-height">
                  <div>Adakah anda mempunyai 2 atau lebih gejala berikut?</div>
                  <div class="primary--text mt-1">
                    Demam, Kesejukan, Mengigil, Sakit badan, Sakit kepala, Sakit
                    tekak, Loya/muntah, Cirit birit, Keletihan, Selsema atau
                    hidung tersumbat
                  </div>
                </div>
                <v-radio-group
                  v-model="contact.covid1"
                  :name="gform.q1"
                  dense
                  row
                  :rules="[rules.required]"
                  class="pa-0 my-1"
                >
                  <v-radio value="yes">
                    <template #label>
                      <div class="text-caption">
                        <small>Ya</small>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="no">
                    <template #label>
                      <div class="text-caption">
                        <small>Tidak</small>
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </div>

              <!-- covid 2 -->
              <div>
                <div class="text-caption low-height">
                  <div>Adakah anda mempunyai 2 atau lebih gejala berikut?</div>
                  <div class="primary--text mt-1">
                    Batuk, Sesak nafas, Hilang deria bau, Hilang deria rasa
                  </div>
                </div>
                <v-radio-group
                  v-model="contact.covid2"
                  :name="gform.q2"
                  dense
                  row
                  :rules="[rules.required]"
                  class="pa-0 my-1"
                >
                  <v-radio value="yes">
                    <template #label>
                      <div class="text-caption">
                        <small>Ya</small>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="no">
                    <template #label>
                      <div class="text-caption">
                        <small>Tidak</small>
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </div>

              <!-- covid 3-->
              <div>
                <div class="text-caption low-height">
                  <div>
                    Adakah anda pernah mengunjungi Lokasi KLUSTER Covid-19 atau
                    ZON MERAH?
                  </div>
                </div>
                <v-radio-group
                  v-model="contact.covid3"
                  :name="gform.q3"
                  dense
                  row
                  :rules="[rules.required]"
                  class="pa-0 my-1"
                >
                  <v-radio value="yes">
                    <template #label>
                      <div class="text-caption">
                        <small>Ya</small>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="no">
                    <template #label>
                      <div class="text-caption">
                        <small>Tidak</small>
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </div>

              <!-- covid 4 -->
              <div>
                <div class="text-caption low-height">
                  <div>
                    Adakah anda pernah berkunjung ke luar negara dalam tempoh 14
                    hari yang lepas?
                  </div>
                </div>
                <v-radio-group
                  v-model="contact.covid4"
                  :name="gform.q4"
                  dense
                  row
                  :rules="[rules.required]"
                  class="pa-0 my-1"
                >
                  <v-radio value="yes">
                    <template #label>
                      <div class="text-caption">
                        <small>Ya</small>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="no">
                    <template #label>
                      <div class="text-caption">
                        <small>Tidak</small>
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </div>

              <!-- covid 5 -->
              <div>
                <div class="text-caption low-height">
                  <div>
                    Adakah anda berhubung rapat dengan seseorang yang positif
                    Covid-19 dalam 14 hari yang lepas?
                  </div>
                </div>
                <v-radio-group
                  v-model="contact.covid5"
                  :name="gform.q5"
                  dense
                  row
                  :rules="[rules.required]"
                  class="pa-0 my-1"
                >
                  <v-radio value="yes">
                    <template #label>
                      <div class="text-caption">
                        <small>Ya</small>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="no">
                    <template #label>
                      <div class="text-caption">
                        <small>Tidak</small>
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </div>

              <!-- action btn -->
              <div v-if="validateForm1" class="mt-4 d-flex justify-end">
                <v-btn
                  min-width="60"
                  small
                  depressed
                  color="primary"
                  class="text-capitalize"
                  @click="viewQuestion(1)"
                >
                  <b>Seterusnya</b>
                  <v-icon right small>mdi-chevron-right-circle</v-icon>
                </v-btn>
              </div>
            </div>
          </div>

          <!-- symtoms -->
          <div v-show="question === 1">
            <div class="text-body-2 mb-2">
              <b>Gejala Pesakit</b>
            </div>
            <div ref="form2">
              <!-- age -->
              <v-text-field
                v-model="contact.age"
                :name="gform.q6"
                label="Umur"
                placeholder="Isi umur anda"
                :rules="[rules.required]"
              ></v-text-field>

              <!-- reason -->
              <div>
                <div class="text-caption low-height mb-2">
                  <div>Sebab kehadiran anda</div>
                </div>
                <v-radio-group
                  v-model="contact.reason"
                  :name="gform.q7"
                  dense
                  row
                  :rules="[rules.required]"
                  class="pa-0 my-1"
                >
                  <v-radio value="chronic-disease">
                    <template #label>
                      <div class="text-caption">
                        <small>Temujanji Penyakit Kronik</small>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="check-up">
                    <template #label>
                      <div class="text-caption">
                        <small>Saringan / Pemeriksaan Berkala</small>
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </div>

              <!-- age -->
              <v-textarea
                v-model="contact.checkUp"
                :name="gform.q8"
                dense
                label="Tujuan saringan kesihatan"
                placeholder="Keperluan majikan, Keperluan perlesenan seperti JPJ, Keperluan pembelajaran, Lain-Lain, nyatakan"
              ></v-textarea>

              <!-- symtom1 -->
              <v-text-field
                v-model="contact.symtom1"
                :name="gform.q9"
                label="Gejala / Simptom Utama"
                placeholder="Isi Gejala / Simptom Utama"
                :rules="[rules.required]"
              ></v-text-field>

              <!-- symtom2 -->
              <v-text-field
                v-model="contact.symtom2"
                :name="gform.q10"
                label="Gejala / Simptom Kedua"
                placeholder="Isi Gejala / Simptom Kedua"
              ></v-text-field>

              <!-- symtom1 -->
              <v-text-field
                v-model="contact.pain"
                :name="gform.q11"
                label="Gejala / Simptom Kedua"
                placeholder="Isi Gejala / Simptom Kedua"
              ></v-text-field>

              <!-- action btn -->
              <div class="mt-4 d-flex justify-end">
                <v-btn
                  min-width="60"
                  small
                  outlined
                  color="primary"
                  class="text-capitalize"
                  @click="viewQuestion(0)"
                >
                  <v-icon left small>mdi-chevron-left-circle</v-icon>
                  <b>Kembali</b>
                </v-btn>

                <v-btn
                  v-if="validateForm2"
                  min-width="60"
                  small
                  depressed
                  color="primary"
                  class="text-capitalize ml-1"
                  @click="viewQuestion(2)"
                >
                  <b>Seterusnya</b>
                  <v-icon right small>mdi-chevron-right-circle</v-icon>
                </v-btn>
              </div>
            </div>
          </div>

          <!-- personal infos -->
          <div v-show="question === 2">
            <div>
              <div class="text-body-2 mb-2">
                <b>Maklumat Pesakit</b>
              </div>
              <div ref="form3">
                <!-- name -->
                <v-text-field
                  v-model="contact.name"
                  :name="gform.q12"
                  label="Nama"
                  placeholder="Isi nama pesakit"
                  :rules="[rules.required]"
                ></v-text-field>

                <!-- guardian -->
                <v-text-field
                  v-model="contact.guardian"
                  :name="gform.q13"
                  label="Penjaga"
                  placeholder="Isi nama penjaga"
                  :rules="[rules.required]"
                ></v-text-field>

                <!-- ic -->
                <v-text-field
                  v-model="contact.ic"
                  :name="gform.q14"
                  label="No. IC"
                  placeholder="Isi nombor IC"
                  :rules="[rules.required]"
                ></v-text-field>

                <!-- address -->
                <v-textarea
                  v-model="contact.address"
                  :name="gform.q15"
                  dense
                  label="Alamat"
                  placeholder="Isi alamat anda"
                  :rules="[rules.required]"
                ></v-textarea>

                <!-- phone -->
                <v-text-field
                  v-model="contact.phone"
                  :name="gform.q16"
                  label="Phone"
                  placeholder="Isi no phone anda"
                  :rules="[rules.required]"
                ></v-text-field>

                <!-- payment -->
                <div>
                  <div class="text-caption low-height">
                    <div>Pilih cara pembayaran</div>
                  </div>
                  <v-radio-group
                    v-model="contact.payment"
                    :name="gform.q17"
                    dense
                    row
                    :rules="[rules.required]"
                    class="pa-0 my-1"
                  >
                    <v-radio value="cash">
                      <template #label>
                        <div class="text-caption">
                          <small>Tunai</small>
                        </div>
                      </template>
                    </v-radio>
                    <v-radio value="credit-card">
                      <template #label>
                        <div class="text-caption">
                          <small>Kad Kredit</small>
                        </div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </div>

                <!-- attendance -->
                <div>
                  <div class="text-caption low-height">
                    <div>Pernah hadir ke institusi ini?</div>
                  </div>
                  <v-radio-group
                    v-model="contact.attendance"
                    :name="gform.q18"
                    dense
                    row
                    :rules="[rules.required]"
                    class="pa-0 my-1"
                  >
                    <v-radio value="yes">
                      <template #label>
                        <div class="text-caption">
                          <small>Ya</small>
                        </div>
                      </template>
                    </v-radio>
                    <v-radio value="no">
                      <template #label>
                        <div class="text-caption">
                          <small>Tidak</small>
                        </div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </div>
              </div>
            </div>

            <!-- submit btn -->
            <div class="mt-4 d-flex justify-end">
              <v-btn
                min-width="60"
                small
                outlined
                color="primary"
                class="text-capitalize mr-1"
                @click="viewQuestion(1)"
              >
                <v-icon left small>mdi-chevron-left-circle</v-icon>
                <b>Kembali</b>
              </v-btn>

              <v-btn
                type="submit"
                min-width="60"
                small
                depressed
                color="success"
                class="text-capitalize"
                @click="appointment"
              >
                <b>{{ appoint.name }}</b>
                <v-icon right small>{{ appoint.icon }}</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-sheet class="transparent"></v-sheet>
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
  data() {
    return {
      currentRef: '',
      question: 0,
      contact: {
        covid1: '',
        covid2: '',
        covid3: '',
        covid4: '',
        covid5: '',
        age: '',
        reason: '',
        checkUp: '',
        symtom1: '',
        symtom2: '',
        pain: '',
        name: '',
        guardian: '',
        ic: '',
        address: '',
        phone: '',
        payment: 'cash',
        attendance: 'yes',
      },
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid email.'
        },
      },
      gform: {
        formAction:
          'https://docs.google.com/forms/u/5/d/e/1FAIpQLSdauoIqZ0LK_VucB4_Da1IY3R8trKKRrip0w24PePIPzlkjPg/formResponse',
        q1: 'entry.649074621',
        q2: 'entry.876746265',
        q3: 'entry.386512973',
        q4: 'entry.344350079',
        q5: 'entry.1417679534',
        q6: 'entry.2032461910',
        q7: 'entry.1704396010',
        q8: 'entry.184695687',
        q9: 'entry.295858233',
        q10: 'entry.965218457',
        q11: 'entry.436512618',
        q12: 'entry.1287687200',
        q13: 'entry.194349688',
        q14: 'entry.2094361932',
        q15: 'entry.497987447',
        q16: 'entry.1498906782',
        q17: 'entry.1531033742',
        q18: 'entry.1805043090',
      },
    }
  },
  computed: {
    clinic() {
      return this.selected
    },
    phone() {
      return this.clinic.contact
    },
    appoint() {
      const name = this.clinic.is_mobile === 'TRUE' ? 'Whatsapp' : 'Hantar'
      const icon =
        this.clinic.is_mobile === 'TRUE'
          ? 'mdi-whatsapp'
          : 'mdi-chevron-right-circle'
      return { name, icon }
    },
    validateForm1() {
      if (
        !this.contact.covid1 ||
        !this.contact.covid2 ||
        !this.contact.covid3 ||
        !this.contact.covid4 ||
        !this.contact.covid5
      )
        return false
      else return true
    },
    validateForm2() {
      if (
        !this.contact.age ||
        !this.contact.reason ||
        !this.contact.checkUp ||
        !this.contact.symtom1 ||
        !this.contact.pain ||
        !this.contact.symtom2
      )
        return false
      else return true
    },
  },
  methods: {
    viewQuestion(num) {
      this.question = num
    },
    close() {
      this.$emit('close')
    },
    appointment(e) {
      const valid = this.$refs.form.validate()
      if (!valid) {
        this.$snackbar.show('Please check your input', 'error')
        e.preventDefault()
        return
      }
      // const msg = `Hi, saya ${this.name}. Saya mahu tetapkan temujanji.`
      // const uri = encodeURI(msg)
      // const url = `https://wa.me/6${this.phone}?text=${uri}`
      // window.open(url, '_blank')
      // this.$snackbar.show('Sending whatsapp...')
      this.$snackbar.show('Temujanji anda sedang diproses. Terima kasih')
      setTimeout(() => {
        this.$emit('close')
      }, 500)
    },
  },
}
</script>

<style></style>
