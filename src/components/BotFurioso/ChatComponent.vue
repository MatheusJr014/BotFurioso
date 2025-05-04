<template>
    <div class="d-flex flex-column bg-black" style="height: 50rem;">
        <div class="flex-grow-1 d-flex flex-column container py-2">
            <div
                class="bg-dark rounded shadow border border-light border-opacity-25 flex-grow-1 d-flex flex-column overflow-hidden">
                <div class="bg-black p-3 border-bottom border-light border-opacity-25">
                    <div class="d-flex align-items-center gap-2">
                        <div class="logo-container-sm">
                            <img src="../../assets/furia-esports-seeklogo.png" alt="FURIA" width="24" height="24"
                                class="logo-image" />
                        </div>
                        <h2 class="text-white fw-bold mb-0">FURIA AI Assistant</h2>
                    </div>
                    <p class="text-secondary small mt-1">Pergunte sobre times, jogadores, eventos e mais</p>
                </div>

                <div class="flex-grow-1 overflow-auto p-3" ref="messageContainer" style="max-height: 600px;">
                    <div v-for="(message, index) in messages" :key="index" class="mb-3">
                        <div :class="['d-flex', 'gap-2', message.role === 'user' ? 'flex-row-reverse' : '']">
                            <div :class="['avatar', message.role === 'user' ? 'bg-secondary' : '', 'rounded-circle', 'd-flex', 'align-items-center', 'justify-content-center']"
                                style="width: 40px; height: 40px;">
                                <span v-if="message.role === 'user'" class="text-white small">YOU</span>
                                <div v-else class="logo-container-xs">
                                    <img src="../../assets/furia-esports-seeklogo.png" alt="FURIA" width="30"
                                        height="30" class="logo-image" />
                                </div>
                            </div>

                            <div
                                :class="['rounded p-3', 'mw-75', message.role === 'user' ? 'bg-secondary text-white' : 'bg-black border border-light border-opacity-25 text-white']">
                                <div v-html="formatMessage(message.content)"></div>
                            </div>
                        </div>
                    </div>
                    <div v-if="isTyping" class="mb-3">
                        <div class="d-flex gap-2">
                            <div class="avatar rounded-circle d-flex align-items-center justify-content-center"
                                style="width: 40px; height: 40px;">
                                <div class="logo-container-xs">
                                    <img src="../../assets/furia-esports-seeklogo.png" alt="FURIA" width="30"
                                        height="30" class="logo-image" />
                                </div>
                            </div>
                            <div class="rounded p-3 mw-75 bg-black border border-light border-opacity-25 text-white">
                                <span class="typing-dots">Digitando<span>.</span><span>.</span><span>.</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="handleSend" class="p-3 border-top border-light border-opacity-25 bg-black">
                    <div class="d-flex gap-2">
                        <input type="text" v-model="input" placeholder="Digite sua mensagem..."
                            class="form-control bg-dark text-white flex-grow-1 border-secondary" />
                        <button type="submit" class="btn btn-light text-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-send" viewBox="0 0 16 16">
                                <path
                                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { GoogleGenAI } from "@google/genai";

export default {
    name: 'FuriaChat',
    data() {
        return {
            input: '',
            messages: [
                {
                    role: 'assistant',
                    content: 'Olá! Eu sou o assistente virtual da FURIA ESPORTS. Como posso ajudar você hoje?'
                }
            ],
            ai: null,
            isTyping: false,
        }
    },
    methods: {
        async handleSend() {
            if (this.input.trim() === '') return;
            this.messages.push({
                role: 'user',
                content: this.input
            });

            const userMessage = this.input;
            this.input = '';

            this.$nextTick(() => {
                this.scrollToBottom();
            });

            try {
                if (!this.ai) {
                    this.ai = new GoogleGenAI({ apiKey: "AIzaSyCPOkC2MmXXCJLlcZKd5xOeIgZzOwruF4o" });
                }
                this.isTyping = true;

                const result = await this.ai.models.generateContent({
                    model: "gemini-2.0-flash",
                    contents: [
                        {
                            role: "user",
                            parts: [
                                {
                                    text: `Você é o FURIA Bot, o assistente virtual oficial para os fãs da FURIA ESPORTS. 
                                Seu papel é responder com entusiasmo e paixão sobre o time de CS (Counter Strike) da FURIA.
                                Sempre seja amigável, motivador e, se possível, inclua curiosidades, títulos ou fatos sobre o time.
                                Evite respostas frias ou formais. Use emojis relacionados a esports, torcida e jogos.` },
                                { text: userMessage }
                            ]
                        }
                    ]
                });

                this.isTyping = false;

                const candidates = result?.candidates || result?.response?.candidates;
                const text = candidates?.[0]?.content?.parts?.[0]?.text || "Desculpe, não consegui gerar uma resposta.";

                this.messages.push({
                    role: 'assistant',
                    content: text
                });

                this.$nextTick(() => {
                    this.scrollToBottom();
                });

            } catch (error) {
                console.error(error);
                this.isTyping = false;
                this.messages.push({
                    role: 'assistant',
                    content: 'Oops, erro ao falar com o FURIABot!'
                });

                this.$nextTick(() => {
                    this.scrollToBottom();
                });
            }
        },
        formatMessage(content) {
            if (!content) return '';
            let formatted = content.replace(/\*(.*?)\*/g, '<b>$1</b>');
            formatted = formatted.replace(/\n/g, '<br>');
            return formatted;
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

.typing-dots span {
  opacity: 0;
  animation: blink 1.4s infinite;
}

.typing-dots span:nth-child(1) {
  animation-delay: 0s;
}
.typing-dots span:nth-child(2) {
  animation-delay: 0.2s;
}
.typing-dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
