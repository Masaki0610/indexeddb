// src/db.js
import Dexie from 'dexie';

const db = new Dexie('MyDatabase');
db.version(1).stores({
  items: '++id,name,description',
});

// データを取得する関数を定義
export async function fetchItems() {
  return await db.items.toArray();
}

// ダミーデータを生成して登録する関数
export async function generateDummyData(numRows) {
  const batchSize = 1000; // 一度に登録するバッチサイズ
  const batches = Math.ceil(numRows / batchSize);

  for (let batch = 0; batch < batches; batch++) {
    const data = [];
    const startId = batch * batchSize;

    for (let i = 0; i < batchSize && startId + i < numRows; i++) {
      data.push({
        name: `Item ${startId + i + 1}`,
        description: `Description ${startId + i + 1}`,
      });
    }

    await db.items.bulkAdd(data);
  }
}
