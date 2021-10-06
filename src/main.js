import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.component('nav-bar', require('./components/NavigationBar.vue').default);
Vue.component('contact-footer', require('./components/ContactFooter.vue').default);




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
