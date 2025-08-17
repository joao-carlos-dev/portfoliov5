<template>
    <div class="hero">
        <div class="hero-content">
            <img src="../assets/foto_perfil.png" alt="foto perfil João Carlos" class="perfil" />
        </div>
        <div class="hero-text">
            <h1 class="title">{{ title }}</h1>
            <h1 class="nome">{{ nome }}</h1>
            <h4 class="subtitle"> {{ subtitle }}</h4>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Olá, pessoal, meu nome é');
const nome = ref('João Carlos Borges');
const subtitle = ref('Sou Desenvolvedor Front End');
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/telegraf');

.hero {
    background-image: linear-gradient(90deg, #000000, #737373);
    background-size: cover;
    background-position: center;
    color: white;
    /* Cor do texto */
    display: flex;
    /* justify-content: center;
    align-items: center; */
    /* height: 100vh; */
    /* Ocupa a altura total da tela */
    width: 1280px;
    max-height: 600px;
    text-align: center;
    margin: 0 auto;
}

.hero-content {
    background-image: linear-gradient(90deg, #a6a6a6, #ffffff);
    padding: 40px;
    display: flex;
}

.perfil {
    width: 350px;
    height: auto;
    margin-bottom: 20px;
}

.hero-text {
    max-width: 556px;
    max-height: 583px;
    margin-left: 116px;
}

.title {
    font-family: "Antonio", sans-serif;
    font-size: 86px;
    font-weight: bold;
    margin: 0;
    line-height: 1.2;
    text-transform: uppercase;
}

.nome {
    font-family: "Antonio", sans-serif;
    font-size: 86px;
    font-weight: bold;
    color: #93a9ff;
    line-height: 1;
    margin-bottom: 20px;
}

.subtitle {
    font-size: 21px;
    margin: 10px 0 0;
    font-family: 'Telegraf', sans-serif;
    font-weight: bold;
}
</style>