// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
    ssr: true,
   
    css: ['./assets/styles/reset.css'],
    components: [
      '~/components/atoms/',
      '~/components/molecules/',
      '~/components/organisms/',
    ],
  
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/responsive.scss" as *;',
        },
      },
    },
  },
})
