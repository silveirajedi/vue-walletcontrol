<template>
  <h4>{{ t('message.balance') }}</h4>
  <h1 id="balance">{{ t('message.currency') }} {{ props.total }}</h1>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  total: {
    type: Number,
    required: true
  }
})

const { t } = useI18n()
</script>
