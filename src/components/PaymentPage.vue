<template>
  <div class="billing-info">
    <div class="form-container part-c">
      <h3 class="billing-title">付款資訊</h3>
      <div class="cardholder-container">
        <label for="cardholder">持卡人姓名</label>
        <br />
        <input
          v-model="formData.cardholder"
          id="cardholder"
          type="text"
          placeholder="John Doe"
          name="cardholder"
          required
        />
        <span class="tick"></span>
      </div>
      <div class="card-number-container">
        <label for="card-number">卡號</label>
        <br />
        <input
          v-model="formData.cardNumber"
          id="card-number"
          type="text"
          placeholder="1111 2222 3333 4444"
          name="card-number"
          pattern="[0-9]{16}"
          required
        />
        <span class="tick"></span>
      </div>
      <div class="expiry-date-container" required>
        <label for="expiry-date">有效期限</label>
        <br />
        <input
          v-model="formData.expiryDate"
          id="expiry-date"
          type="text"
          placeholder="MM/YY"
          name="expiry-date"
          required
        />
        <span class="tick"></span>
      </div>
      <div class="cvc-container">
        <label for="cvc">CVC/CCV</label>
        <br />
        <input
         v-model="formData.cvc"
        id="cvc" type="text" placeholder="123" name="cvc" required />
        <span class="tick"></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      formData: {
        cardholder: '',
        cardNumber: '',
        expiryDate: '',
        cvc: ''
      }
    }
  },
  watch: {
    formData: {
      handler: function () {
        this.$emit('page-two-data', this.formData)
      },
      deep: true
    }
  }

}
</script>
