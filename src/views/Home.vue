<script setup>
import { GoogleGenerativeAI  } from "@google/generative-ai";
import { ref } from 'vue';

const userInput = ref("");
const botResponse = ref("");


const ai = new GoogleGenerativeAI("AIzaSyCPOkC2MmXXCJLlcZKd5xOeIgZzOwruF4o" );
async function sendMessage() {
    try {
        const model = await ai.getGenerativeModel({
            model: "gemini-1.5-pro",
        });
        const result = await model.generateContent([
            { text: userInput.value } 
        ]);

        const response = await result.response;
        const text = response.text();

        botResponse.value = text;
        userInput.value = "";
    } catch (error) {
        console.error(error);
        botResponse.value = "Oops, erro ao falar com o FURIABot!";
    }
}



</script>

<template>
    <div class="chat-container">
        <h1>FURIA Fan Chat 🎮🖤</h1>
        <div class="chat-box">
            <div v-if="botResponse">{{ botResponse }}</div>
        </div>
        <input v-model="userInput" placeholder="Mande sua pergunta para o FURIABot" />
        <button @click="sendMessage">Enviar</button>
    </div>
</template>

<style scoped>
.chat-container {
    max-width: 600px;
    margin: auto;
    padding: 2rem;
    text-align: center;
}

.chat-box {
    min-height: 100px;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
}

input {
    width: 80%;
    padding: 0.5rem;
}

button {
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
}
</style>
