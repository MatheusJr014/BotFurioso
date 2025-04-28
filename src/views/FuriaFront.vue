<template>
    <div class="min-vh-100 d-flex flex-column bg-dark">
      <!-- Header -->
      <header class="w-100 bg-black border-bottom border-warning border-opacity-25 p-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-2">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nPovCfeGp0KS9jJQU4W0IrfMCcS9XJ.png" alt="FURIA ESPORTS Logo" width="40" height="40" class="object-fit-contain" />
          <h1 class="text-warning fw-bold fs-4 mb-0">FURIA ESPORTS</h1>
        </div>
        <div class="d-none d-md-flex align-items-center gap-3">
          <button class="btn btn-dark text-white hover-warning">Equipes</button>
          <button class="btn btn-dark text-white hover-warning">Notícias</button>
          <button class="btn btn-dark text-white hover-warning">Loja</button>
          <button class="btn btn-dark text-white hover-warning">Sobre</button>
        </div>
      </header>
  
      <!-- Chat Container -->
      <div class="flex-grow-1 d-flex flex-column container py-4">
        <div class="bg-black rounded shadow border border-warning border-opacity-25 flex-grow-1 d-flex flex-column overflow-hidden">
          <!-- Chat Header -->
          <div class="bg-black p-3 border-bottom border-warning border-opacity-25">
            <h2 class="text-warning fw-bold">FURIA AI Assistant</h2>
            <p class="text-secondary small">Pergunte sobre times, jogadores, eventos e mais</p>
          </div>
          
          <!-- Messages -->
          <div class="flex-grow-1 overflow-auto p-3" ref="messageContainer">
            <div v-for="(message, index) in messages" :key="index" class="mb-3">
              <div :class="['d-flex', 'gap-2', message.role === 'user' ? 'flex-row-reverse' : '']">
                <div :class="['avatar', message.role === 'user' ? 'bg-secondary' : 'bg-warning bg-opacity-25', 'rounded-circle', 'd-flex', 'align-items-center', 'justify-content-center']" style="width: 40px; height: 40px;">
                  <span v-if="message.role === 'user'" class="text-white small">YOU</span>
                  <img v-else src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nPovCfeGp0KS9jJQU4W0IrfMCcS9XJ.png" alt="FURIA" width="30" height="30" />
                </div>
                
                <div :class="['rounded p-3', 'mw-75', message.role === 'user' ? 'bg-secondary text-white' : 'bg-warning bg-opacity-10 border border-warning border-opacity-25 text-white']">
                  {{ message.content }}
                </div>
              </div>
            </div>
          </div>
          
          <!-- Input -->
          <form @submit.prevent="handleSend" class="p-3 border-top border-warning border-opacity-25 bg-black">
            <div class="d-flex gap-2">
              <input
                type="text"
                v-model="input"
                placeholder="Digite sua mensagem..."
                class="form-control bg-dark text-white flex-grow-1"
              />
              <button type="submit" class="btn btn-warning text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <!-- Footer -->
      <footer class="w-100 bg-black border-top border-warning border-opacity-25 p-3 text-center text-secondary small">
        © {{ new Date().getFullYear() }} FURIA ESPORTS. Todos os direitos reservados.
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FuriaChat',
    data() {
      return {
        input: '',
        messages: [
          {
            role: 'assistant',
            content: 'Olá! Eu sou o assistente virtual da FURIA ESPORTS. Como posso ajudar você hoje?',
          },
        ]
      }
    },
    methods: {
      handleSend() {
        if (this.input.trim() === '') return;
        
        // Add user message
        this.messages.push({ 
          role: 'user', 
          content: this.input 
        });
        
        const userMessage = this.input;
        this.input = '';
        
        // Scroll to bottom
        this.$nextTick(() => {
          this.scrollToBottom();
        });
        
        // Simulate AI response
        setTimeout(() => {
          this.messages.push({ 
            role: 'assistant', 
            content: 'Obrigado por sua mensagem! Nossa equipe está trabalhando para implementar respostas inteligentes. Em breve responderei todas as suas perguntas sobre a FURIA ESPORTS!' 
          });
          
          // Scroll to bottom again after response
          this.$nextTick(() => {
            this.scrollToBottom();
          });
        }, 1000);
      },
      scrollToBottom() {
        if (this.$refs.messageContainer) {
          this.$refs.messageContainer.scrollTop = this.$refs.messageContainer.scrollHeight;
        }
      }
    },
    mounted() {
      this.scrollToBottom();
    }
  }
  </script>
  
  <style>
  /* Custom styles to complement Bootstrap */
  .hover-warning:hover {
    color: #ffc107 !important;
  }
  
  .bg-black {
    background-color: #121212 !important;
  }
  
  .mw-75 {
    max-width: 75%;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: #121212;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 193, 7, 0.3);
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 193, 7, 0.5);
  }
  
  /* Ensure Bootstrap is imported */
  /* In your main.js or index.js file, make sure to include:
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap/dist/js/bootstrap.js'
  */
  </style>