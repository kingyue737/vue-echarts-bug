import Vue from "vue";
import VueCompositionAPI, { createApp, h } from "@vue/composition-api";
import VChart from "vue-echarts";

import App from "./App.vue";

Vue.use(VueCompositionAPI);

const app = createApp({
  render: () => h(App),
});

app.component(VChart);
app.mount("#app");
