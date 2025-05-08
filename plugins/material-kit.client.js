// plugins/material-kit.client.js

import "~/assets/js/material-input.js";
import "~/assets/js/ripple-effect.js";
import "~/assets/scss/material-kit.scss";


export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use();
})