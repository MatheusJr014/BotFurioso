<template>
   <div class="main">
        <NavbarComponent />
        <ChatComponent />
        <FooterComponent />
    </div>
</template>

<script>
import NavbarComponent from '../components/Publico/NavbarComponent.vue';
import FooterComponent from '../components/Publico/FooterComponent.vue'
import ChatComponent from '@/components/BotFurioso/ChatComponent.vue';
export default {
    components: {
        NavbarComponent,
        ChatComponent,
        FooterComponent

    }
};
</script>
<style>

.hover-effect {
    transition: all 0.3s ease;
}

.hover-effect:hover {
    transform: translateY(-2px);
    color: #ffffff !important;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.bg-black {
    background-color: #000000 !important;
}

.bg-dark {
    background-color: #121212 !important;
}

.mw-75 {
    max-width: 75%;
}

/* Logo container styles to make the logo stand out */
.logo-container {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.logo-container-sm {
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
}

.logo-container-xs {
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
}

.logo-image {
    object-fit: contain;
    max-width: 80%;
    max-height: 80%;
}


::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #121212;
}

::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}

.btn-light:hover {
    background-color: #f8f9fa;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

</style>