// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  pages: true,
  experimental: {
    payloadExtraction: false
  },
  modules: ['nuxt-icon', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app:{
   
    head: {
      title: 'Nnoje Udochukwu',
      htmlAttrs: {
        lang: 'en',
        class: 'light'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: 'my website description'
        }
    ],
    }
  }
  
})
