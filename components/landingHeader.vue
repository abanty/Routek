<template>
    <nav class="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
        <div class="container">          

            <a class="navbar-brand animate__animated  animate__backInLeft" href="https://www.facebook.com/absytech2023" target="_blank">
                <img width="196" height="38" src="/images/logo_absy.png" alt="logo image" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NuxtLink to="/" class="nav-link">Inicio</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <!-- <NuxtLink to="/#services" class="nav-link">Servicios</NuxtLink> -->
                        <NuxtLink to="/extras" class="nav-link">Servicios</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/#portfolio" class="nav-link">Proyectos</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/#contact" class="nav-link">Contáctanos</NuxtLink>
                    </li>
                    <!-- <li class="nav-item">
                        <NuxtLink to="/extras" class="nav-link">Extras</NuxtLink>
                    </li>  
                     <li class="nav-item">
                        <NuxtLink to="/files" class="nav-link">Archivos</NuxtLink>
                    </li> -->
                </ul>
                <a style="font-size: 30px; margin-left: 20px; color: #09a453;" href="https://www.facebook.com/absytech2023" target="_blank"> <i class="fab fa-facebook"></i></a>

            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const GoWhatsapp = (number: string): void => {
    window.open('https://wa.me/' + number, '_blank')
}

</script>