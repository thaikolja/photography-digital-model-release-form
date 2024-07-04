// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-05",
  modules: [
  	"@nuxt/fonts",
	"@nuxtjs/tailwindcss",
	"@vueuse/nuxt",
	"@nuxtjs/i18n"
  ],
  runtimeConfig: {
      apiKey: '' // Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
      public: {
         // baseURL: '' // Exposed to the frontend as well.
      }
  },
  css: [
  	'~/assets/css/global.css'
  ],
  fonts: {
  	families: []
  }
})