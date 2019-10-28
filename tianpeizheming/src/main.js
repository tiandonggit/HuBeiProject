import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Carousel, CarouselItem, Pagination } from "element-ui";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Pagination);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.afterEach(() => {
  window.scrollTo(0, 0);
});
