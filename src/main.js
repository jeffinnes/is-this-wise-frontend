import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import BaseButton from './components/ui/BaseButton.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-button', BaseButton);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
