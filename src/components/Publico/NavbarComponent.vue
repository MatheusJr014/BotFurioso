<template>
    <div>
        <header
            class="w-100 bg-black border-bottom border-light border-opacity-25 p-3 d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-3">
                <div class="logo-container">
                    <img src="../../assets/furia-esports-seeklogo.png" alt="FURIA ESPORTS Logo" width="40" height="40"
                        class="logo-image" />
                </div>
                <router-link to="/" class="text-white fw-bold fs-4 mb-0 text-decoration-none">FURIA ESPORTS</router-link>
            </div>
            <div class="d-none d-md-flex align-items-center gap-3">
                <a href="https://draft5.gg/" class="btn btn-outline-light border-0 text-white hover-effect">Notícias</a>
                <a href="https://www.furia.gg/" class="btn btn-outline-light border-0 text-white hover-effect">Loja</a>
                <router-link to="/sobre" class="btn btn-outline-light border-0 text-white hover-effect">
                    Sobre
                </router-link>
            
            </div>
        </header>
    </div>
</template>
<script>

</script>
