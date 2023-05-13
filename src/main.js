import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

const app = createApp(App, {
    devtools: true // bật devtools
});
app.use(store);
app.mount("#app");
