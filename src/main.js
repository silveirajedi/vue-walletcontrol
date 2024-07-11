import './assets/style.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      balance: 'Your Balance',
      income: 'Income',
      expense: 'Expense',
      history: 'History',
      transaction: 'Add new transaction',
      description: 'Description',
      description_info: 'Enter description...',
      amount: 'Amount',
      amount_explain: 'Expense: Negative(-), Income: Positive(+)',
      amount_info: 'Enter amount...',
      add_button: 'Add transaction',
      currency: 'US$'
    }
  },
  ptbr: {
    message: {
      balance: 'Seu Saldo',
      income: 'Receitas',
      expense: 'Despesas',
      history: 'Histórico',
      transaction: 'Adicionar nova transação',
      description: 'Descrição',
      description_info: 'Insira a descrição...',
      amount: 'Valor',
      amount_explain: 'Despesas: Negativo(-), Receitas: Positivo(+)',
      amount_info: 'Insira o valor...',
      add_button: 'Adicionar transação',
      currency: 'R$'
    }
  }
}

const i18n = createI18n({
  locale: 'ptbr',
  fallbackLocale: 'ptbr',
  messages
})

const app = createApp(App)
app.use(Toast)
app.use(i18n)
app.mount('#app')
