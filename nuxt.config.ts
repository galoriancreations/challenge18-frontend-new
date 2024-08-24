// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  app: {
    head: {
      titleTemplate: "%s – Ting Global",
      title: "Ting Global",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Livvic:wght@400;500;600;700;900&&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&&family=Comfortaa:wght@300;400;500;600;700&display=swap"
        }
      ]
    },

    pageTransition: {
      name: "page",
      mode: "out-in"
    }
  },

  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/lib/scss/main.scss"
  ],

  components: [
    { path: "~/components/layout", pathPrefix: false },
    { path: "~/components/UI", pathPrefix: false }
  ],

  modules: ["@pinia/nuxt"],

  build: {
    transpile: ["vuetify"]
  },

  runtimeConfig: {
    public: {}
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/lib/scss/abstracts.scss" as *;'
        }
      }
    },
    define: {
      "process.env.DEBUG": false
    }
  }
});
