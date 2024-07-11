<template>
  <h2>Wallet Control</h2>
  <select v-model="locale" @change="changeLanguage">
    <option value="en">English</option>
    <option value="ptbr">Português</option>
  </select>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n()
const selectedLocale = ref(locale.value)

const changeLanguage = (event) => {
  locale.value = event.target.value
  selectedLocale.value = locale.value
}
</script>
