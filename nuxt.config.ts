// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: { enabled: true },  
    modules: [    "@nuxt/eslint"  ],
    eslint: {

    },
    css: ['./assets/styles/reset.css'],
    components: [
      '~/components/atoms/',
      '~/components/molecules/',
      '~/components/organisms/',
    ],
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
