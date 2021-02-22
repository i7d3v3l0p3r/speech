import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import App from './App.vue';
import './main.css';

const routes = [{ path: '/', component: Home }];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
