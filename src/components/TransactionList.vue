<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transation in props.transactions"
      :key="transation.id"
      :class="transation.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transation.text }} <span>$ {{ transation.amount }}</span
      ><button @click="deleteTransaction(transation.id)" class="delete-btn">x</button>
    </li>
  </ul>
</template>

<script setup>
const emit = defineEmits(['transactionDeleted'])

const props = defineProps({
  transactions: {
    type: Array,
    required: true
  }
})

const deleteTransaction = (id) => {
  emit('transactionDeleted', id)
}
</script>
