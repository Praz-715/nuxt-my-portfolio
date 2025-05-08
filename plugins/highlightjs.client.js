import HljsVuePlugin from '@highlightjs/vue-plugin';
import 'highlight.js/styles/github-dark.css'; // Ganti dengan tema yang kamu suka
import 'highlight.js/styles/stackoverflow-light.css'; // Tema StackOverflow Light
// import 'highlight.js/styles/github.css'; // Tema Highlight.js
import 'highlight.js/lib/common'; 

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(HljsVuePlugin);
});