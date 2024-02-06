import "@fontsource/fira-sans/400.css";
import "@fontsource/fira-sans/700.css";
import "./assets/main.css";

import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(VueQueryPlugin);
app.use(router);

app.mount("#app");
