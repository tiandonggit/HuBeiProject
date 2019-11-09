import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";

Vue.use(VueRouter);

const honoraryCertificate = () =>
  import(
    /* webpackChunkName: "honoraryCertificate" */ "../views/honoraryCertificate.vue"
  );
const aboutUs = () =>
  import(/* webpackChunkName: "aboutUs" */ "../views/aboutUs.vue");
const caseShows = () =>
  import(/* webpackChunkName: "caseShows" */ "../views/caseShows.vue");
const caseDetails = () =>
  import(/* webpackChunkName: "caseDetails" */ "../views/caseDetails.vue");
const productCenter = () =>
  import(/* webpackChunkName: "productCenter" */ "../views/productCenter.vue");
const contactUs = () =>
  import(/* webpackChunkName: "contactUs" */ "../views/contactUs.vue");
const productDetails = () =>
  import(/* webpackChunkName: "productDetails" */ "../views/productDetails.vue");
const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/honoraryCertificate",
    name: "honoraryCertificate",
    component: honoraryCertificate
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    component: aboutUs
  },
  {
    path: "/caseShows",
    name: "caseShows",
    component: caseShows
  },
  {
    path: "/caseDetails",
    name: "caseDetails",
    component: caseDetails
  },
  {
    path: "/productCenter",
    name: "productCenter",
    component: productCenter
  },
  {
    path: "/contactUs",
    name: "contactUs",
    component: contactUs
  },
  {
    path: "/productDetails",
    name: "productDetails",
    component: productDetails
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
