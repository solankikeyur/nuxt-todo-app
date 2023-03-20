// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
   },
   runtimeConfig:{
    public: {
        MODE: process.env.MODE
    }
   },
   modules: [
    '@pinia/nuxt',
    '@nuxtjs/supabase'
   ],
   app: {
    head: {
        link: [
            {rel: 'icon', href: '/favicon.png', type: 'image/x-icon'}
        ]
    }
   }
   
})