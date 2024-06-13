// main.js
/* eslint-disable no-unused-vars */
import { db, generateDummyData } from './db';
/* eslint-enable no-unused-vars */

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.mount('#app');
