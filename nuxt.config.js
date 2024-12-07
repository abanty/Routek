export default defineNuxtConfig({
  app: {
    head: {
      title: "Routek innovación digital",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          charset: "utf-8",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/images/logo_absy_icon.png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap",
        },
      ],
      script: [
        {
          src: "/js/bootstrap.bundle.js",
          type: "text/javascript",
          defer: true,
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ["~/assets/css/style.css", "~/assets/css/fontawesome.css", 'animate.css/animate.min.css'],
  plugins: ["~/plugins/glightbox.client.js"],
  devtools: { enabled: true },
});
