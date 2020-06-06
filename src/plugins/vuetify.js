import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa',
    },
    theme: {
        themes: {
            light: {
                primary: '#011627',
                secondary: '#4C66B6',
                google: '#4285F4',
                facebook: '#1A529B',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});
