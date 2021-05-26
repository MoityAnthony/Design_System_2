import { createApp } from 'vue';
import App from './App.vue';
import Home from './views/Home.vue';
import router from './router';

const app = createApp(App).use(router);
app.component("Home", Home);
app.use(router);
app.mount('#app');
