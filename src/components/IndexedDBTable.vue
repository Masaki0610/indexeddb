<!-- src/components/IndexedDBTable.vue -->
<template>
    <div>
      <h2>IndexedDB Contents</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { fetchItems } from '../db';
  
  export default {
    name: 'IndexedDBTable',
    setup() {
      const items = ref([]);
  
      // データを取得する関数を実行
      async function fetchData() {
        items.value = await fetchItems();
      }
  
      // コンポーネントがマウントされた時にデータを取得
      onMounted(fetchData);
  
      return {
        items,
      };
    },
  };
  </script>
  