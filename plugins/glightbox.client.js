import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      glightbox: GLightbox,
    },
  };
});
