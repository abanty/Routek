<template>
    <section id="portfolio" class="portfolio">
        <div class="container">
            <div class="row text-center mt-5">
                <h1 class="display-3 fw-bold text-capitalize">Proyectos</h1>
                <div class="heading-line"></div>
                <p class="lead">
                    Proyectos custom, personalizados o a medida, tu satisfaccion es primero.
                </p>
            </div>
            <!-- FILTER BUTTONS  -->
            <div class="row mt-4 mb-4 g-3 text-center">
                <div class="col-md-12">
                    <template v-for="(button, index) of ButtonsGalery" :key="index">
                        <button @click="filtrarGaleria(button.valor, index)"
                            :class="`btn btn-outline-primary btn-sm ${button.active ? 'active' : ''}`" type="button">{{
                                button.desc }}</button>
                    </template>
                </div>
            </div>

            <!-- START THE PORTFOLIO ITEMS  -->
            <div class="row">

                <!-- PROYECTO 1  -->
                <template v-for="(foto, index) of ItemsGalery" :key="index">

                    <div class="col-lg-4 col-md-6">
                        <div class="portfolio-box shadow">
                            <a :href="foto.src" class="glightboxPortafolio" :data-gallery="foto.galeria">
                                <img :src="foto.src" alt="image" />
                                <div class="portfolio-info">
                                    <div class="caption">
                                        <h4>{{ foto.project }}</h4>
                                        <p>{{ foto.desc }}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div v-if="foto.breakpoint" class="w-100"></div>
                </template>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const { $glightbox } = useNuxtApp();

// VARIABLES 
const ButtonsGalery = ref([
    { valor: 'all', desc: 'Todos los Proyectos', class: '', style: '', active: false },
    { valor: 'gallery1', desc: 'QHATU', class: '', style: '', active: true },
    { valor: 'gallery2', desc: 'DZR', class: '', style: '', active: false },
    { valor: 'gallery3', desc: 'STC', class: '', style: '', active: false },
    { valor: 'gallery4', desc: 'GM NORTE', class: '', style: '', active: false },
    { valor: 'gallery5', desc: 'FNH 2021', class: '', style: '', active: false },
    { valor: 'gallery6', desc: 'COT-MARKET', class: '', style: '', active: false },
    { valor: 'gallery7', desc: 'PANEL C-Market', class: '', style: '', active: false },
    { valor: 'gallery8', desc: 'SYSVEN', class: '', style: '', active: false },
    { valor: 'gallery9', desc: 'LABS', class: '', style: '', active: false },
    { valor: 'gallery10', desc: 'M&B', class: '', style: '', active: false },
    { valor: 'gallery11', desc: 'LANDINGS', class: '', style: '', active: false },
    { valor: 'gallery12', desc: 'MARKETPLACE', class: '', style: '', active: false },
])
const ItemsGalery = ref([

    // PROYECTO #1
    { galeria: 'gallery1', src: '/images/portfolio/SistemasControlQhatu/1.jpg', project: 'QHATU ELECTRONICS', desc: 'Control de productos de computadoras', breakpoint: false },
    { galeria: 'gallery1', src: '/images/portfolio/SistemasControlQhatu/2.jpg', project: 'QHATU ELECTRONICS', desc: 'Control de productos de computadoras', breakpoint: false },
    { galeria: 'gallery1', src: '/images/portfolio/SistemasControlQhatu/3.jpg', project: 'QHATU ELECTRONICS', desc: 'Control de productos de computadoras', breakpoint: false },
    { galeria: 'gallery1', src: '/images/portfolio/SistemasControlQhatu/4.jpg', project: 'QHATU ELECTRONICS', desc: 'Control de productos de computadoras', breakpoint: false },
    { galeria: 'gallery1', src: '/images/portfolio/SistemasControlQhatu/5.jpg', project: 'QHATU ELECTRONICS', desc: 'Control de productos de computadoras', breakpoint: false },
    { galeria: 'gallery1', src: '/images/portfolio/SistemasControlQhatu/6.jpg', project: 'QHATU ELECTRONICS', desc: 'Control de productos de computadoras', breakpoint: false },
    { galeria: 'gallery1', src: '/images/portfolio/SistemasControlQhatu/7.jpg', project: 'QHATU ELECTRONICS', desc: 'Control de productos de computadoras', breakpoint: true },

    // PROYECTO #2
    { galeria: 'gallery2', src: '/images/portfolio/SistemasPrestamosDZR - CLIENTE/1.jpg', project: 'DZR SYSTEMS', desc: 'Sistema de prestamos', breakpoint: false },
    { galeria: 'gallery2', src: '/images/portfolio/SistemasPrestamosDZR - CLIENTE/2.jpg', project: 'DZR SYSTEMS', desc: 'Sistema de prestamos', breakpoint: false },
    { galeria: 'gallery2', src: '/images/portfolio/SistemasPrestamosDZR - CLIENTE/3.jpg', project: 'DZR SYSTEMS', desc: 'Sistema de prestamos', breakpoint: false },
    { galeria: 'gallery2', src: '/images/portfolio/SistemasPrestamosDZR - CLIENTE/4.jpg', project: 'DZR SYSTEMS', desc: 'Sistema de prestamos', breakpoint: false },
    { galeria: 'gallery2', src: '/images/portfolio/SistemasPrestamosDZR - CLIENTE/5.jpg', project: 'DZR SYSTEMS', desc: 'Sistema de prestamos', breakpoint: false },
    { galeria: 'gallery2', src: '/images/portfolio/SistemasPrestamosDZR - CLIENTE/6.jpg', project: 'DZR SYSTEMS', desc: 'Sistema de prestamos', breakpoint: false },
    { galeria: 'gallery2', src: '/images/portfolio/SistemasPrestamosDZR - CLIENTE/7.jpg', project: 'DZR SYSTEMS', desc: 'Sistema de prestamos', breakpoint: false },
    { galeria: 'gallery2', src: '/images/portfolio/SistemasPrestamosDZR - CLIENTE/8.jpg', project: 'DZR SYSTEMS', desc: 'Sistema de prestamos', breakpoint: true },

    // PROYECTO #3 --- BUSCAR MAS IMAGENES
    { galeria: 'gallery3', src: '/images/portfolio/SistemaControlSTC - CLIENTE/1.jpg', project: 'STC CONTROL', desc: 'Control de inventarios en tiendas de ropa', breakpoint: false },
    { galeria: 'gallery3', src: '/images/portfolio/SistemaControlSTC - CLIENTE/2.jpg', project: 'STC CONTROL', desc: 'Control de inventarios en tiendas de ropa', breakpoint: false },
    { galeria: 'gallery3', src: '/images/portfolio/SistemaControlSTC - CLIENTE/3.jpg', project: 'STC CONTROL', desc: 'Control de inventarios en tiendas de ropa', breakpoint: false },
    { galeria: 'gallery3', src: '/images/portfolio/SistemaControlSTC - CLIENTE/4.jpg', project: 'STC CONTROL', desc: 'Control de inventarios en tiendas de ropa', breakpoint: false },
    { galeria: 'gallery3', src: '/images/portfolio/SistemaControlSTC - CLIENTE/5.jpg', project: 'STC CONTROL', desc: 'Control de inventarios en tiendas de ropa', breakpoint: true },

    // PROYECTO #4
    { galeria: 'gallery4', src: '/images/portfolio/SISTEMA GM_NORTE/1.jpg', project: 'GM NORTE PROJECTS', desc: 'Sistemas de proyectos de arquitectura', breakpoint: false },
    { galeria: 'gallery4', src: '/images/portfolio/SISTEMA GM_NORTE/2.jpg', project: 'GM NORTE PROJECTS', desc: 'Sistemas de proyectos de arquitectura', breakpoint: false },
    { galeria: 'gallery4', src: '/images/portfolio/SISTEMA GM_NORTE/3.jpg', project: 'GM NORTE PROJECTS', desc: 'Sistemas de proyectos de arquitectura', breakpoint: false },
    { galeria: 'gallery4', src: '/images/portfolio/SISTEMA GM_NORTE/4.jpg', project: 'GM NORTE PROJECTS', desc: 'Sistemas de proyectos de arquitectura', breakpoint: false },
    { galeria: 'gallery4', src: '/images/portfolio/SISTEMA GM_NORTE/5.jpg', project: 'GM NORTE PROJECTS', desc: 'Sistemas de proyectos de arquitectura', breakpoint: false },
    { galeria: 'gallery4', src: '/images/portfolio/SISTEMA GM_NORTE/6.jpg', project: 'GM NORTE PROJECTS', desc: 'Sistemas de proyectos de arquitectura', breakpoint: false },
    { galeria: 'gallery4', src: '/images/portfolio/SISTEMA GM_NORTE/7.jpg', project: 'GM NORTE PROJECTS', desc: 'Sistemas de proyectos de arquitectura', breakpoint: false },
    { galeria: 'gallery4', src: '/images/portfolio/SISTEMA GM_NORTE/8.jpg', project: 'GM NORTE PROJECTS', desc: 'Sistemas de proyectos de arquitectura', breakpoint: false },
    { galeria: 'gallery4', src: '/images/portfolio/SISTEMA GM_NORTE/9.jpg', project: 'GM NORTE PROJECTS', desc: 'Sistemas de proyectos de arquitectura', breakpoint: true },

    // PROYECTO #5
    { galeria: 'gallery5', src: '/images/portfolio/SistemaHondurasCLIENTE/1.jpg', project: 'FNH-2021 PROJECTS', desc: 'Sistema contable y reportes de Fuerza Naval Honduras', breakpoint: false },
    { galeria: 'gallery5', src: '/images/portfolio/SistemaHondurasCLIENTE/2.jpg', project: 'FNH-2021 PROJECTS', desc: 'Sistema contable y reportes de Fuerza Naval Honduras', breakpoint: false },
    { galeria: 'gallery5', src: '/images/portfolio/SistemaHondurasCLIENTE/3.jpg', project: 'FNH-2021 PROJECTS', desc: 'Sistema contable y reportes de Fuerza Naval Honduras', breakpoint: false },
    { galeria: 'gallery5', src: '/images/portfolio/SistemaHondurasCLIENTE/4.jpg', project: 'FNH-2021 PROJECTS', desc: 'Sistema contable y reportes de Fuerza Naval Honduras', breakpoint: false },
    { galeria: 'gallery5', src: '/images/portfolio/SistemaHondurasCLIENTE/5.jpg', project: 'FNH-2021 PROJECTS', desc: 'Sistema contable y reportes de Fuerza Naval Honduras', breakpoint: false },
    { galeria: 'gallery5', src: '/images/portfolio/SistemaHondurasCLIENTE/6.jpg', project: 'FNH-2021 PROJECTS', desc: 'Sistema contable y reportes de Fuerza Naval Honduras', breakpoint: false },
    { galeria: 'gallery5', src: '/images/portfolio/SistemaHondurasCLIENTE/7.jpg', project: 'FNH-2021 PROJECTS', desc: 'Sistema contable y reportes de Fuerza Naval Honduras', breakpoint: true },

    // PROYECTO #6
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/1.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: false },
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/2.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: false },
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/3.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: false },
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/4.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: false },
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/5.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: false },
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/6.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: false },
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/7.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: false },
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/8.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: false },
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/9.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: false },
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/10.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: false },
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/11.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: false },
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/12.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: false },
    { galeria: 'gallery6', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/CLIENTE WEB/13.jpg', project: 'C-MARKET PROJECTS', desc: 'Cotizador de productos', breakpoint: true },

    // PROYECTO #7
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/1.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/2.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/3.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/4.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/5.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/6.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/7.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/8.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/9.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/10.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/11.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/12.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/13.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: false },
    { galeria: 'gallery7', src: '/images/portfolio/ECOMMERCE PANEL - CLIENTE/PANELWEB/14.jpg', project: 'PANEL C-MARKET PROJECTS', desc: 'Panel de administracion del cotizador market', breakpoint: true },

    // PROYECTO #8
    { galeria: 'gallery8', src: '/images/portfolio/SistemasFarmaciaSysven - CLIENTE/1.jpg', project: 'SYSVEN PROJECTS', desc: 'Sistema de Farmacia', breakpoint: false },
    { galeria: 'gallery8', src: '/images/portfolio/SistemasFarmaciaSysven - CLIENTE/2.jpg', project: 'SYSVEN PROJECTS', desc: 'Sistema de Farmacia', breakpoint: false },
    { galeria: 'gallery8', src: '/images/portfolio/SistemasFarmaciaSysven - CLIENTE/3.jpg', project: 'SYSVEN PROJECTS', desc: 'Sistema de Farmacia', breakpoint: false },
    { galeria: 'gallery8', src: '/images/portfolio/SistemasFarmaciaSysven - CLIENTE/4.jpg', project: 'SYSVEN PROJECTS', desc: 'Sistema de Farmacia', breakpoint: false },
    { galeria: 'gallery8', src: '/images/portfolio/SistemasFarmaciaSysven - CLIENTE/5.jpg', project: 'SYSVEN PROJECTS', desc: 'Sistema de Farmacia', breakpoint: false },
    { galeria: 'gallery8', src: '/images/portfolio/SistemasFarmaciaSysven - CLIENTE/6.jpg', project: 'SYSVEN PROJECTS', desc: 'Sistema de Farmacia', breakpoint: false },
    { galeria: 'gallery8', src: '/images/portfolio/SistemasFarmaciaSysven - CLIENTE/7.jpg', project: 'SYSVEN PROJECTS', desc: 'Sistema de Farmacia', breakpoint: false },
    { galeria: 'gallery8', src: '/images/portfolio/SistemasFarmaciaSysven - CLIENTE/8.jpg', project: 'SYSVEN PROJECTS', desc: 'Sistema de Farmacia', breakpoint: false },
    { galeria: 'gallery8', src: '/images/portfolio/SistemasFarmaciaSysven - CLIENTE/9.jpg', project: 'SYSVEN PROJECTS', desc: 'Sistema de Farmacia', breakpoint: true },

    // PROYECTO #9
    { galeria: 'gallery9', src: '/images/portfolio/SistemaPedidosHector - CLIENTE/1.jpg', project: 'LABS PROJECTS', desc: 'Sistema de pedidos a laboratorios', breakpoint: false },
    { galeria: 'gallery9', src: '/images/portfolio/SistemaPedidosHector - CLIENTE/2.jpg', project: 'LABS PROJECTS', desc: 'Sistema de pedidos a laboratorios', breakpoint: false },
    { galeria: 'gallery9', src: '/images/portfolio/SistemaPedidosHector - CLIENTE/3.jpg', project: 'LABS PROJECTS', desc: 'Sistema de pedidos a laboratorios', breakpoint: false },
    { galeria: 'gallery9', src: '/images/portfolio/SistemaPedidosHector - CLIENTE/4.jpg', project: 'LABS PROJECTS', desc: 'Sistema de pedidos a laboratorios', breakpoint: false },
    { galeria: 'gallery9', src: '/images/portfolio/SistemaPedidosHector - CLIENTE/5.jpg', project: 'LABS PROJECTS', desc: 'Sistema de pedidos a laboratorios', breakpoint: false },
    { galeria: 'gallery9', src: '/images/portfolio/SistemaPedidosHector - CLIENTE/6.jpg', project: 'LABS PROJECTS', desc: 'Sistema de pedidos a laboratorios', breakpoint: false },
    { galeria: 'gallery9', src: '/images/portfolio/SistemaPedidosHector - CLIENTE/7.jpg', project: 'LABS PROJECTS', desc: 'Sistema de pedidos a laboratorios', breakpoint: true },

    // PROYECTO #10
    { galeria: 'gallery10', src: '/images/portfolio/CotizacionesFrancisco - CLIENTE/1.jpg', project: 'COTIZADOR PROJECTS', desc: 'Sistema de cotizaciones personalizado para puertas levadizas', breakpoint: false },
    { galeria: 'gallery10', src: '/images/portfolio/CotizacionesFrancisco - CLIENTE/2.jpg', project: 'COTIZADOR PROJECTS', desc: 'Sistema de cotizaciones personalizado para puertas levadizas', breakpoint: false },
    { galeria: 'gallery10', src: '/images/portfolio/CotizacionesFrancisco - CLIENTE/3.jpg', project: 'COTIZADOR PROJECTS', desc: 'Sistema de cotizaciones personalizado para puertas levadizas', breakpoint: false },
    { galeria: 'gallery10', src: '/images/portfolio/CotizacionesFrancisco - CLIENTE/4.jpg', project: 'COTIZADOR PROJECTS', desc: 'Sistema de cotizaciones personalizado para puertas levadizas', breakpoint: false },
    { galeria: 'gallery10', src: '/images/portfolio/CotizacionesFrancisco - CLIENTE/5.jpg', project: 'COTIZADOR PROJECTS', desc: 'Sistema de cotizaciones personalizado para puertas levadizas', breakpoint: false },
    { galeria: 'gallery10', src: '/images/portfolio/CotizacionesFrancisco - CLIENTE/6.jpg', project: 'COTIZADOR PROJECTS', desc: 'Sistema de cotizaciones personalizado para puertas levadizas', breakpoint: true },


    // PROYECTO #11
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/1.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/2.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/3.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/4.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/5.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/6.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/7.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/8.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/9.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/10.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/11.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/12.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/13.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: false },
    { galeria: 'gallery11', src: '/images/portfolio/PAGINAS WEB - CLIENTE/14.jpg', project: 'LANDING PAGE', desc: 'Paginas web o landing de clientes', breakpoint: true },


    // PROYECTO #12
    { galeria: 'gallery12', src: '/images/portfolio/MARKETPLACE/1.jpg', project: 'MARKETPLACE', desc: 'MarketPlace de productos', breakpoint: false },
    { galeria: 'gallery12', src: '/images/portfolio/MARKETPLACE/2.jpg', project: 'MARKETPLACE', desc: 'MarketPlace de productos', breakpoint: false },
    { galeria: 'gallery12', src: '/images/portfolio/MARKETPLACE/3.jpg', project: 'MARKETPLACE', desc: 'MarketPlace de productos', breakpoint: false },
    { galeria: 'gallery12', src: '/images/portfolio/MARKETPLACE/4.jpg', project: 'MARKETPLACE', desc: 'MarketPlace de productos', breakpoint: false },
    { galeria: 'gallery12', src: '/images/portfolio/MARKETPLACE/5.jpg', project: 'MARKETPLACE', desc: 'MarketPlace de productos', breakpoint: false },
    { galeria: 'gallery12', src: '/images/portfolio/MARKETPLACE/6.jpg', project: 'MARKETPLACE', desc: 'MarketPlace de productos', breakpoint: false },
    { galeria: 'gallery12', src: '/images/portfolio/MARKETPLACE/7.jpg', project: 'MARKETPLACE', desc: 'MarketPlace de productos', breakpoint: true },
    // PROYECTO #13


]);


const filtrarGaleria = (galeria: string, index: number) => {

    ButtonsGalery.value.forEach((element, i) => {
        element.active = index === i ? true : false;
    });
    //aserción de no nulidad O condicionar si existe elemento.parentElement
    const elementos = document.querySelectorAll('.glightboxPortafolio');
    elementos.forEach((elemento) => {
        elemento.parentElement!.classList.remove('slide-up');

        if (galeria === 'all' || elemento.getAttribute('data-gallery') === galeria) {
            elemento.parentElement!.style.display = '';
        } else {
            elemento.parentElement!.classList.add('slide-up');
            elemento.parentElement!.addEventListener('animationend', () => {
                elemento.parentElement!.style.display = 'none';
            }, { once: true });
        }
    });

    $glightbox().reload();
};

onMounted(() => {

    filtrarGaleria('gallery1', 1)

    $glightbox({
        selector: '.glightboxPortafolio'
    });

});
</script>
<style scoped>
/* Estilos para el efecto Fade Out */
.fade-out {
    animation: fadeOutAnimation 0.5s forwards;
    /* Ajusta la duración según necesites */
}

@keyframes fadeOutAnimation {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

.slide-up {
    animation: slideUpAnimation 0.5s forwards;
}

@keyframes slideUpAnimation {
    from {
        transform: translateY(0);
        opacity: 1;
    }

    to {
        transform: translateY(-20px);
        /* Ajusta según la intensidad deseada */
        opacity: 0;
    }
}

.zoom-out {
    animation: zoomOutAnimation 0.5s forwards;
}

@keyframes zoomOutAnimation {
    from {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(0.5);
        /* Ajusta para controlar el nivel de "zoom out" */
        opacity: 0;
    }
}
</style>