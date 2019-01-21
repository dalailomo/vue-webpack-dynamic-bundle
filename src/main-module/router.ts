import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from './components/home/home.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: HomeComponent }
    ]
});

export default router;
