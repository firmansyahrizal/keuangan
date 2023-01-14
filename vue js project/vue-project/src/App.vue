<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div>
    <table border="1">
      <tr>
        <th>Tanggal</th>
        <th>Kategori</th>
        <th>Jumlah</th>
        <th>Aksi</th>
      </tr>
      <tr v-for="transaction in transactions" :key="transaction.id">
        <td>{{ transaction.date }}</td>
        <td>{{ transaction.category }}</td>
        <td>{{ transaction.amount }}</td>
        <td>
          <button @click="editTransaction(transaction)">Edit</button>
        </td>
      </tr>
    </table>
    <div v-if="editingTransaction">
      <form @submit.prevent="updateTransaction">
        <label for="date">Tanggal:</label>
        <input type="text" v-model="editingTransaction.date" id="date">
      
        <label for="category">Kategori:</label>
        <input type="text" v-model="editingTransaction.category" id="category">
      
        <label for="amount">Jumlah:</label>
        <input type="text" v-model="editingTransaction.amount" id="amount">
      
        <button type="submit">Simpan Perubahan</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ['id', 'date', 'category'],
      transactions: [
        { id: 1, date: '01/01/2022', category: 'Pengeluaran', amount: '100000' },
        { id: 2, date: '01/02/2022', category: 'Pemasukan', amount: '200000' },
        { id: 3, date: '01/03/2022', category: 'Pengeluaran', amount: '50000' },
      ],
      editingTransaction: null,
    };
  },
  methods: {
    editTransaction(transaction) {
      this.editingTransaction = transaction;
    },
    updateTransaction() {
      //logic for updating the transaction
    },
  },
}
</script>
