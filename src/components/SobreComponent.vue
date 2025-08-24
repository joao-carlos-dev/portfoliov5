<template>
  <div class="sobre">
    <h2 class="sobre-title">{{ sobreTitle }}</h2>
    <div class="sobre-info">
      <div class="sobre-card">
        <h4 class="sobre-subtitle">{{ local }}</h4>
        <h2 class="sobre-desc">{{ cidade }}</h2>
      </div>

      <div class="sobre-card">
        <h4 class="sobre-subtitle">{{ trabalho }}</h4>
        <h2 class="sobre-desc">{{ localTrabalho }}</h2>
      </div>

      <div class="sobre-card">
        <h4 class="sobre-subtitle">{{ funcao }}</h4>
        <h2 class="sobre-desc">{{ funcaodesc }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sobreTitle = ref('um breve histórico');
const local = ref('moro em');
const cidade = ref('Imbituba, Santa Catarina');
const trabalho = ref('Trabalho como');
const localTrabalho = ref('Freelancer');
const funcao = ref('minha função');
const funcaodesc = ref('Desenvolvedor front-end');

</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/telegraf');

.sobre {
  background-image: linear-gradient(90deg, #000000, #737373);
  background-size: cover;
  background-position: center;
  color: white;
  /* Cor do texto */
  /* display: flex; */
  /* justify-content: center;
    align-items: center; */
  /* height: 100vh; */
  /* Ocupa a altura total da tela */
  /* width: 1280px; */
  max-height: 600px;
  text-align: center;
  margin: 0 auto;
}

.sobre-title {
  font-family: 'Telegraf', sans-serif;
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  padding-top: 40px;
  padding-bottom: 20px;
}

.sobre-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sobre-card {
  width: 90%;
  height: auto;
  border: 1px solid #93a9ff;
  padding: 15px;
  margin-bottom: 20px;
}

.sobre-card:last-child {
  margin-right: 0;
}

.sobre-subtitle {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #93a9ff;
  padding-top: 71px;
  padding-bottom: 57px;
}

.sobre-desc {
  font-family: "Antonio", sans-serif;
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
}

/* Media Query para Tablets (481px a 1024px) */
@media screen and (min-width: 481px) and (max-width: 1024px) {
  .sobre-title {
    font-size: 36px;
    padding-top: 50px;
    padding-bottom: 30px;
  }

  .sobre-info {
    flex-direction: row;
    flex-wrap: wrap;
    /* Permite que os cards quebrem a linha */
    justify-content: center;
  }

  .sobre-card {
    width: 45%;
    /* 2 cards por linha */
    margin: 10px;
  }
}

/* Media Query para Desktops (acima de 1025px) */
@media screen and (min-width: 1025px) {
  .sobre-title {
    font-size: 42px;
    padding-top: 78px;
    padding-bottom: 38px;
  }

  .sobre-info {
    flex-direction: row;
    justify-content: center;
  }

  .sobre-card {
    width: 370px;
    /* Largura original */
    height: 414px;
    /* Altura original */
    margin-right: 50px;
    margin-bottom: 0;
  }
}
</style>
