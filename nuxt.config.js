export default {
   /*
    ** Rendering mode
    ** Doc: https://nuxtjs.org/api/configuration-mode
    */
   mode: "universal",

   /*
    ** Headers of the page
    ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
    */
   head: {
      title: "SSR Dynamic Refresh",
      meta: [
         { charset: "utf-8" },
         { name: "viewport", content: "width=device-width, initial-scale=1" },
         {
            hid: "description",
            name: "description",
            content: "SSR Dynamic Refresh Example"
         }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
   },

   /*
    ** Global CSS
    ** Doc: https://nuxtjs.org/api/configuration-css
    */
   css: [],

   /*
    ** Plugins to load before mounting the App
    ** Doc: https://nuxtjs.org/guide/plugins
    */
   plugins: [],

   /*
    ** Nuxt.js modules
    ** Doc: https://nuxtjs.org/guide/modules
    */
   modules: [
      // Doc: https://http.nuxtjs.org
      "@nuxt/http",
      // TODO: Remove it if you want to eject from codeSandbox
      "./codesandbox"
   ],

   /*
    ** HTTP module configuration
    */
   http: {
      // See https://http.nuxtjs.org/api/#options
   },

   generate: {
      // Without the next line, F5 on dynamic routes
      // will fail
      //fallback: true
   },

   /*
    ** Build configuration
    ** Doc: https://nuxtjs.org/api/configuration-build
    */
   build: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {}
   }
};
