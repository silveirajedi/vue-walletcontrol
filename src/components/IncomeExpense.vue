<template>
  <div class="inc-exp-container">
    <div>
      <h4>{{ t('message.income') }}</h4>
      <p id="money-plus" class="money plus">{{ t('message.currency') }} {{ props.income }}</p>
    </div>
    <div>
      <h4>{{ t('message.expense') }}</h4>
      <p id="money-minus" class="money minus">{{ t('message.currency') }} {{ props.expense }}</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  income: {
    type: Number,
    required: true
  },
  expense: {
    type: Number,
    required: true
  }
})

const { t } = useI18n()
</script>
