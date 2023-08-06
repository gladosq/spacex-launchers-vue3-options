import {createApp} from 'vue';
import './assets/styles/scaffolding.scss';
import './assets/styles/font-family.scss';
import App from './App.vue';
import {router} from './router/index.js';
import {createPinia} from 'pinia';

const pinia = createPinia();

const app = createApp(App);
app.use(pinia).use(router).mount('#app');
