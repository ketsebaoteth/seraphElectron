import 'quill/dist/quill.snow.css';
import { createApp } from 'vue';
import VueQuillEditor from 'vue-quill-editor';
import App from './App.vue';
import './assets/index.css';

const app = createApp(App);

app.use(VueQuillEditor);

app.mount('#app');