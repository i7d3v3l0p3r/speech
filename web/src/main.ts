import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Room from './pages/Room.vue';
import App from './App.vue';
import './main.css';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/room/:id', component: Room, name: 'room' },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
