<template>
    <section id="contact" class="get-started">
        <div class="container">
            <div class="row text-center mt-5">
                <h1 class="display-3 fw-bold text-capitalize">Contáctame</h1>
                <div class="heading-line"></div>
                <p class="lh-lg">
                    Dando vida a tus ideas en el mundo digital.
                </p>
            </div>

            <!-- START THE CTA CONTENT  -->
            <div class="row text-white">
                <div class="col-12 col-lg-6 gradient shadow p-3">
                    <div class="cta-info w-100">
                        <h4 class="display-4 fw-bold">100% Satisfacción garantizada</h4>
                        <p class="lh-lg">
                            Implementamos las últimas tecnologías en HTML, CSS, JavaScript, y frameworks de backend como
                            Node.js o Django para crear sitios web robustos y eficientes.
                        </p>
                        <!-- <h3 class="display-3--brief">What will be the next step?</h3>
              <ul class="cta-info__list">
                <li>We'll prepare the proposal.</li>
                <li>we'll discuss it together.</li>
                <li>let's start the discussion.</li>
              </ul> -->
                    </div>
                </div>
                <div class="col-12 col-lg-6 bg-white shadow p-3">
                    <div class="form w-100 pb-2">
                        <h4 class="display-3--title mb-5">Crea y Conecta !</h4>
                        <form action="#" class="row">
                            <div class="col-lg-6 col-md mb-3">
                                <input v-model="valoresMsg.nombres" type="text" placeholder="Nombres" id="inputFirstName"
                                    class="shadow form-control form-control-lg" />
                            </div>
                            <div class="col-lg-6 col-md mb-3">
                                <input v-model="valoresMsg.apellidos" type="text" placeholder="Apellidos" id="inputLastName"
                                    class="shadow form-control form-control-lg" />
                            </div>
                            <div class="col-lg-12 mb-3">
                                <input v-model="valoresMsg.email" type="email" placeholder="Correo" id="inputEmail"
                                    class="shadow form-control form-control-lg" />
                            </div>
                            <div class="col-lg-12 mb-3">
                                <textarea v-model="valoresMsg.mensaje" name="message"
                                    placeholder="Describe tus requerimientos" id="message" rows="8"
                                    class="shadow form-control form-control-lg"></textarea>
                            </div>
                            <div class="text-center d-grid mt-1">
                                <button @click="sendMail" type="button" class="btn btn-primary rounded-pill pt-3 pb-3">
                                    Enviar
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </div>
                            <div v-if="showMsg" style="display: flex; justify-content: space-evenly;">
                                <div style="" class="alert alert-success px-4 py-1 mt-3 mb-0" role="alert">
                                    Mensaje enviado !!
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const valoresMsg = ref({ nombres: '', apellidos: '', email: '', mensaje: '' })
let showMsg = ref<Boolean>(false)

const sendMail = () => {
    console.log('Son mis valores:', valoresMsg.value.nombres);
    showMsg.value = true;

    setTimeout(() => {
        showMsg.value = false;
    }, 3000);

}
</script>