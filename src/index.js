import "normalize.css";
import "@/scss/main.scss";
import Vue from "vue";
import App from "@/App";

const app = new Vue({
  render: h => h(App),
}).$mount("#app");

console.log("initialize...", app);
