<template>
  <main class="container">
    <section class="billing-container">
      <h3 class="billing-title">結帳</h3>
      <div class="billing-stepper">
        <div
          class="step"
          :class="[{ active: step === 0 }, { checked: step > 0 }]"
        >
          <div class="circle-container"></div>
          <div class="label-container">寄送地址</div>
        </div>
        <div
          class="step"
          :class="[{ active: step === 1 }, { checked: step > 1 }]"
        >
          <div class="circle-container"></div>
          <span class="connect-line"></span>
          <div class="label-container">運送方式</div>
        </div>
        <div class="step" :class="[{ active: step === 2 }]">
          <div class="circle-container"></div>
          <span class="connect-line"></span>
          <div class="label-container">付款資訊</div>
        </div>
      </div>
      <!--表單區域-->
      <FormPage v-show="step === 0" v-on:page-one-data="handlePageOne" />
      <ShippingPage
        :initialShippingCost="shippingCost"
        v-on:after-select-shippingType="updateCost"
        v-show="step === 1"
      />
      <PaymentPage v-show="step === 2" v-on:page-two-data="handlePageTwo" />

      <!--按鈕區域-->
      <div class="button-container" :class="[{ active: step === 0 }]">
        <button
          class="btn btn-outline"
          v-show="step !== 0"
          v-on:click="prevStep()"
        >
          ← 上一步
        </button>
        <button
          class="btn btn-primary"
          :class="[{ active: step === 0 }]"
          v-on:click="nextStep()"
          type="button"
        >
          {{ step === 2 ? "確認送出" : "下一步 →" }}
        </button>
      </div>
    </section>

    <!--購物車區域 -->
    <shoppingCart :initialShippingCost="shippingCost" />
  </main>
</template>

<script>
import FormPage from '../components/FormPage.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import ShippingPage from '../components/ShippingPage.vue'
import PaymentPage from '../components/PaymentPage.vue'
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

export default {
  data () {
    return {
      step: 0,
      shippingCost: 0,
      form: {
        gender: 'male',
        name: '',
        phone: '',
        email: '',
        region: '',
        address: '',
        deliveryFee: 0,
        cardholder: '',
        cardNumber: '',
        expiryDate: '',
        cvc: ''
      }
    }
  },
  components: {
    FormPage: FormPage,
    ShoppingCart: ShoppingCart,
    ShippingPage: ShippingPage,
    PaymentPage: PaymentPage
  },
  methods: {
    handleSubmit () {
      const {
        name,
        phone,
        email,
        region,
        address,
        cardholder,
        cardNumber,
        expiryDate,
        cvc
      } = this.form
      if (
        !name ||
        !phone ||
        !email ||
        !region ||
        !address ||
        !cardholder ||
        !cardNumber ||
        !expiryDate ||
        !cvc
      ) {
        Toast.fire({
          icon: 'warning',
          title: '您尚有空白處未填寫'
        })
        return
      }
      localStorage.setItem('form-data-storage', JSON.stringify(this.form))
      Toast.fire({
        icon: 'success',
        title: '您的資料已送出成功'
      })
    },
    nextStep () {
      if (this.step < 2) {
        this.step = this.step + 1
      } else if (this.step === 2) {
        this.handleSubmit()
      }
    },
    prevStep () {
      this.step = this.step - 1
    },
    updateCost (fee) {
      this.shippingCost = fee
    },
    handlePageOne (formData) {
      this.form = { ...this.form, ...formData }
    },
    handlePageTwo (formData) {
      this.form = { ...this.form, ...formData }
    }
  },
  watch: {
    shippingCost: {
      handler: function () {
        this.form.deliveryFee = this.shippingCost
      }
    }
  }
}
</script>
