import './assets/main.css';
import 'aos/dist/aos.css'; // Import AOS CSS
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AOS from 'aos'; // Import AOS library
import './axios';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');

app.use(AOS.init()); // Initialize AOS
