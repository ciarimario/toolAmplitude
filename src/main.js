import { createApp } from 'vue'
import App from './App.vue'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import router from './router'

const app = createApp(App).use(router);

app.component('VueDatePicker', VueDatePicker);
app.mount('#app')
