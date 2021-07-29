import { createApp } from 'vue';

// CSS Imports go before App.vue import so CSS cascades correctly
import './assets/css/reset.css';
import './assets/css/fonts.css';

import App from './App.vue';
import router from './router/index';
import store from './store/index';

import BaseButton from './components/ui/BaseButton.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseCard from './components/ui/BaseCard.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-button', BaseButton);
app.component('base-spinner', BaseSpinner);
app.component('base-card', BaseCard);

app.mount('#app');
