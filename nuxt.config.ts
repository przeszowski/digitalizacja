export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      supabaseUrl: '',      // nadpisywane przez NUXT_PUBLIC_SUPABASE_URL w .env
      supabaseAnonKey: '',  // nadpisywane przez NUXT_PUBLIC_SUPABASE_ANON_KEY w .env
    },
  },

  app: {
    head: {
      title: 'Digitalizacja360',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Kompleksowa transformacja cyfrowa firmy – warsztaty, strategia, IT i automatyzacja w jednym spójnym modelu rozwoju.' },
        { property: 'og:title', content: 'Digitalizacja360' },
        { property: 'og:description', content: 'Kompleksowa transformacja cyfrowa firmy – warsztaty, strategia, IT i automatyzacja w jednym spójnym modelu rozwoju.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Lexend+Zetta:wght@400&family=Jost:wght@400&display=swap' },
      ],
    },
  },
})
