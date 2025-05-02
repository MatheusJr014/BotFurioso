<template>
    <div class="container py-4">
      <div class="row">
        <div class="col-12">
          <div class="p-4 rounded bg-dark text-white text-center">
            <div class="mb-4 d-flex justify-content-center">
              <div class="logo-container-lg">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furia-esports-seeklogo-N9G0ru4OWcY5t3PEnx5SLABhM7oS01.png" alt="FURIA" class="logo-image" />
              </div>
            </div>
            <h1 class="display-4 fw-bold mb-3">FURIA ESPORTS</h1>
            <h2 class="mb-4">Bem-vindo ao Chat Bot Oficial</h2>
            <p class="lead mb-4">Fale com nosso assistente virtual e fique por dentro das novidades.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <router-link to="/chat" class="btn btn-light btn-lg px-4 gap-3">Iniciar Chat</router-link>
              <router-link to="/equipes" class="btn btn-outline-light btn-lg px-4">Nossas Equipes</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  .logo-container-lg {
    width: 120px;
    height: 120px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
    margin-bottom: 1rem;
  }
  
  .logo-image {
    object-fit: contain;
    max-width: 80%;
    max-height: 80%;
  }
  </style>