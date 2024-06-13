<!-- src/App.vue -->
<template>
  <div id="app">
    <button @click="registerTestData">1万レコードのテストデータを登録する</button>
    <div v-if="loading">データ登録中...</div>
    <div v-if="message">{{ message }}</div>
    <DataTable v-if="!loading && !message" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { generateDummyData } from './db';
import DataTable from './components/DataTable.vue';

export default {
  name: 'App',
  components: {
    DataTable,
  },
  setup() {
    const loading = ref(false);
    const message = ref('');

    async function registerTestData() {
      loading.value = true;
      try {
        await generateDummyData(10000);
        message.value = 'テストデータの登録が完了しました';
      } catch (error) {
        console.error('テストデータの登録中にエラーが発生しました', error);
        message.value = 'エラーが発生しました';
      } finally {
        loading.value = false;
      }
    }

    return {
      loading,
      message,
      registerTestData,
    };
  },
};
</script>
