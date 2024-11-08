import { createApp } from 'vue';

import App from './App.vue';
import router from './plugins/router';
import pinia from './plugins/pinia';
import vuetify from './plugins/vuetify';

const app = createApp(App);

app
.use(router)
.use(pinia)
.use(vuetify)
.mount('#app');
