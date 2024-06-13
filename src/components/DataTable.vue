<!-- src/components/DataTable.vue -->
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
  import { fetchItems } from '../db'; // 正しいパスに修正
  
  export default {
    name: 'DataTable',
    setup() {
      const items = ref([]);
  
      async function fetchData() {
        items.value = await fetchItems(); // fetchItems を直接呼び出す
      }
  
      onMounted(fetchData);
  
      return {
        items,
      };
    },
  };
  </script>
  