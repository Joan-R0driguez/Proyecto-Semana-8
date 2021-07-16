import router from "./router";
import global from "../src/assets/styles.css"

window.addEventListener("load",router(window.location.hash));
window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });