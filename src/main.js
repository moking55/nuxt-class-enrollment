import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);

app.use(createPinia());
app.use(VueSweetalert2);
app.use(router);

app.mount("#app");
