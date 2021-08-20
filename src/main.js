import { createApp } from 'vue';

// CSS Imports go before App.vue import so CSS cascades correctly
import './assets/css/reset.css';
import './assets/css/fonts.css';

import App from './App.vue';
import router from './router/index';
import store from './store/index';

import BaseButton from './components/ui/BaseButton.vue';
import BaseRipple from './components/ui/BaseRipple.vue';
import BaseCard from './components/ui/BaseCard.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-button', BaseButton);
app.component('base-ripple', BaseRipple);
app.component('base-card', BaseCard);

app.mount('#app');
