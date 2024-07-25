// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/content"],

  components: [
    "~/components/",
    "~/components/atoms/",
    "~/components/molecules/",
    "~/components/organisms/",
    "~/components/content/"
  ],
  css: ["/assets/styles/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "/assets/styles/variables/index.scss" as *;'
        }
      }
    }
  }
})
