import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false

Vue.component('app-hello-world',HelloWorld);
new Vue({
  render: h => h(App),
}).$mount('#app')
