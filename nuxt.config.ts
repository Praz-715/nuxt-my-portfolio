// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Teguh Prasetyo',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Round' },
      ],
      script: [
        { src: 'https://kit.fontawesome.com/42d5adcbca.js', crossorigin: "anonymous" },
        // { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', defer: true, crossorigin: "anonymous", tagPosition: 'bodyClose' },
      ]
    },
  },
  css: ['bootstrap/dist/css/bootstrap.min.css', 'vue-prism-editor/dist/prismeditor.min.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/eslint',
    'nuxt-svgo',
  ],
  vite: {
    plugins: [require('vite-svg-loader')()],
  },
})