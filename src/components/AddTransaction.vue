<template>
  <h3>{{ t('message.transaction') }}</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">{{ t('message.description') }}</label>
      <input type="text" id="text" v-model="text" :placeholder="t('message.description_info')" />
    </div>
    <div class="form-control">
      <label for="amount"
        >{{ t('message.amount') }} <br />
        <span style="font-size: 0.7em">{{ t('message.amount_explain') }}</span></label
      >
      <input type="text" id="amount" v-model="amount" :placeholder="t('message.amount_info')" />
    </div>
    <button class="btn">{{ t('message.add_button') }}</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'

const text = ref('')
const amount = ref('')

const emit = defineEmits(['transactionSubmitted'])

const toast = useToast()
const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('Both fields must be filled')
    return
  }

  const transctionData = {
    text: text.value,
    amount: parseFloat(amount.value)
  }

  emit('transactionSubmitted', transctionData)

  text.value = ''
  amount.value = ''
}

const { t } = useI18n()
</script>
