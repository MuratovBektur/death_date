import Vue from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import router from './router'
import store from './store'

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },

  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
