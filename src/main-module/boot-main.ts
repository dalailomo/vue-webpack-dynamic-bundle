import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';

import './class-component-hooks';
import { loadSubmodules } from './sub-module-loader';

import router from './router';
import store from './store';
import { instances } from './shell';

const theme: any = {
    theme: {
        primary: '#366897',
    },
};
Vue.use(Vuetify, theme);

loadSubmodules(() => {
    Vue.mixin({
        data: function() {
          return {
            get shellInstances() {
              return instances;
            }
          };
        }
    });

    // tslint:disable
    const vue = new Vue({
        el: '#app-root',
        router: router,
        store: store,
        render: h => h(require('./components/app.vue')),
    });
});
