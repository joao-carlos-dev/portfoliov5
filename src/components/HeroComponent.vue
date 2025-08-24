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
  display: flex;
  /* flex-direction: column; */
  max-height: 600px;
  /* height: auto; */
  text-align: center;
  margin: 0px auto;
  /* padding: 20px; */
  align-items: center;
  justify-content: center;
}

.hero-content {
  background-image: linear-gradient(90deg, #a6a6a6, #ffffff);
  padding: 40px;
  display: flex;
  border-radius: 8px;
}

.perfil {
  width: 150px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 50%;
}

.hero-text {
  max-width: 556px;
  max-height: 583px;
  margin-left: 166px;
  /* margin-top: 20px; */
}

.title {
  font-family: "Antonio", sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
  text-transform: uppercase;
}

.nome {
  font-family: "Antonio", sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #93a9ff;
  line-height: 1;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 16px;
  margin: 10px 0 0;
  font-family: 'Telegraf', sans-serif;
  font-weight: bold;
}

/* Media Query para Tablets (481px a 1024px) */
@media screen and (min-width: 390px) and (max-width: 1024px) {
  .hero {
    flex-direction: column;
    height: 450px;
  }

  .hero-text {
    margin-left: 20px;
    text-align: left;
    /* max-width: 250px;
    max-height: 250px; */
  }

  .perfil {
    width: 250px;
  }

  .title,
  .nome {
    padding-top: 8px;
    font-size: 35px;
    text-align: center;
  }

  .subtitle {
    font-size: 18px;
    text-align: center;
  }
}

/* Media Query para Desktops (acima de 1025px) */
@media screen and (min-width: 1025px) {
  .hero {
    flex-direction: row;
    height: 600px;
  }

  .hero-text {
    margin-left: 116px;
    text-align: left;
  }

  .perfil {
    width: 350px;
  }

  .title,
  .nome {
    font-size: 86px;
  }

  .subtitle {
    font-size: 21px;
  }
}
</style>
