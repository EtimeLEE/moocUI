import Vue from 'vue';
import App from './App.vue';

import 'mooc-ui666/dist/css/index.css';
import MUI from 'mooc-ui666';
Vue.use(MUI);

// import '../components/css/demo.scss';
// import '../components/css/card.scss';
// import Demo from '../components/lib/demo';
// import Card from '../components/lib/card'

// Vue.use(Demo);
// Vue.use(Card);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
