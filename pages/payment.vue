<template>
  <v-row no-gutters justify="center" align="center">
    <v-col cols="12" sm="10" md="8" class="px-2">
      <!-- nav -->
      <index-nav id="nav"></index-nav>

      <v-container>
        <h1>Fill in the form below</h1>
        <!-- the submit event will no longer reload the page -->
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="detail">Detail</label><br />
            <input
              id="detail"
              v-model="form.detail"
              type="text"
              placeholder="Please fill in your detail"
            />
          </div>
          <div class="form-group">
            <label for="amount">Amount</label><br />
            <input
              id="amount"
              v-model="form.amount"
              type="text"
              placeholder="Please fill in your amount"
            />
          </div>
          <div class="form-group">
            <label for="order_id">Order ID</label><br />
            <input
              id="order_id"
              v-model="form.order_id"
              type="text"
              placeholder="Please fill in your order ID"
              value="1612195721"
            />
          </div>
          <div class="form-group">
            <label for="name">Name</label><br />
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Please fill in your name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label><br />
            <input
              id="email"
              v-model="form.email"
              type="text"
              placeholder="Please fill in your email"
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone</label><br />
            <input
              id="phone"
              v-model="form.phone"
              type="text"
              placeholder="Please fill in your phone"
            />
          </div>
          <div class="form-group">
            <v-btn light type="submit" class="btn btn-primary">Submit</v-btn>
          </div>
        </form>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
import { hash } from 'js-md5'
export default {
  data() {
    return {
      merchant_id: '549158372830569',
      secret_key: '18584-810',
      form: {
        detail: '',
        amount: '',
        order_id: '',
        hash: '',
        name: '',
        email: '',
        phone: '',
      },
    }
  },
  methods: {
    submitForm() {
      // 1
      // const decodeDetail = decodeURIComponent(this.detail)
      // const decodeAmount = decodeURIComponent(this.amount)
      // const decodeOrderId = decodeURIComponent(this.order_id)
      // this.hash = hash(this.secret_key.decodeDetail.decodeAmount.decodeOrderId)
      // 2
      // this.hash = hash(
      //   this.secret_key
      //     .decodeURIComponent(this.detail)
      //     .decodeURIComponent(this.amount)
      //     .decodeURIComponent(this.order_id)
      // )
      // 3
      this.hash = hash(
        this.secret_key
          .decodeForm(this.detail)
          .decodeForm(this.amount)
          .decodeForm(this.order_id)
      )
      axios
        .get('https://app.senangpay.my/payment/' + this.merchant_id, this.form)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    decodeForm(form) {
      return decodeURI(form)
    },
  },
}
</script>
<style scoped></style>
