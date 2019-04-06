import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  mounted() {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'));
  },
}).$mount('#app');
