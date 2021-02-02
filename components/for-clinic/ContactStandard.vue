<template>
  <v-container class="white">
    <v-row justify="center" align="center">
      <v-col cols="11" sm="10">
        <!-- form -->
        <v-form ref="form">
          <v-row dense class="mb-6">
            <!-- header -->
            <v-col cols="12" class="mb-6">
              <div class="text-center">
                <div class="text-h6 text-sm-h5">
                  <b :class="`${themeColor}--text`">{{ content.title }}</b>
                </div>
                <div class="text-body-2">{{ content.subs }}</div>
              </div>
            </v-col>

            <v-col cols="12">
              <v-text-field
                dense
                :rules="rules.required"
                outlined
                :color="themeColor"
                label="Name"
                placeholder="Add your name"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                dense
                :rules="rules.required"
                outlined
                :color="themeColor"
                label="Email"
                placeholder="Add your email"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                dense
                :rules="rules.required"
                outlined
                :color="themeColor"
                label="Phone"
                placeholder="Add your phone"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                dense
                :rules="rules.required"
                outlined
                :color="themeColor"
                label="Message"
                placeholder="Add your message"
                hide-details
              >
              </v-textarea>
            </v-col>

            <v-col class="my-2 d-flex justify-end">
              <v-btn
                :color="themeColor"
                depressed
                class="text-capitalize white--text"
                @click="submit"
              >
                <b>Submit</b> <v-icon right>mdi-check-circle</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
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
      rules: {
        required: [(v) => !!v || 'Required'],
      },
      content: {
        title: 'Contact Form',
        subs: 'All customer contact will be send to your email or whatsapp',
      },
    }
  },
  methods: {
    submit() {
      const valid = this.$refs.form.validate()
      if (!valid) {
        this.$snackbar.show('Please check your input', 'error')
        return
      }
      this.$snackbar.show('Request Submited')
      this.$refs.form.reset()
      this.$emit('contact')
    },
  },
}
</script>

<style></style>
