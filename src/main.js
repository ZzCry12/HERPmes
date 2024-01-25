// main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { createRouter, createWebHistory } from 'vue-router';


import HomePage from './components/HomePage.vue';
import PagContacto from './components/pag_contacto.vue';
import AboutUs from './components/pag_aboutus.vue';
import Testimonios from './components/pag_testimonios.vue';

const routes = [
    { path: '/', component: HomePage, name: 'HomePage' }, // Ruta para la página de inicio
    { path: '/pag_contacto', component: PagContacto, name: 'pag_contacto' }, //contacto
    { path: '/pag_aboutus', component: AboutUs, name: 'pag_aboutus' }, //Aboutus
    { path: '/pag_testimonios', component: Testimonios, name: 'pag_testimonios' }, //pag contacto
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const vuetify = createVuetify({
    icons: {
        iconfont: 'md',
    },
    components,
    directives,
});

createApp(App).use(router).use(vuetify).mount('#app');
