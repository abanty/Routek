<template>
    <landingHeader />
    <div>
        <NuxtPage />
    </div>
    <landingFooter />
</template>

<style>
 
.page-enter-active,
.page-leave-active {
    transition: all 0.15s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>