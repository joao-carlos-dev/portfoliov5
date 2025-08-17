<template>
    <div class="projetos">
        <div class="projetos-title">
            <h2 class="title">{{ title }}</h2>
            <h2 class="titleAzul">{{ titleAzul }}</h2>
        </div>

        <div class="projetos-cards">
            <div class="projeto-card">
                <h4 class="title-projeto">{{ titleProjeto }}</h4>
                <p class="desc-projeto">{{ descProjeto }}</p>
                <button class="acessar">
                    <a href="https://github.com/joao-carlos-dev/projeto_geovani_diretor" target="_blank"
                        rel="noopener noreferrer">GitHub</a>
                </button>

                <button class="acessar">
                    <a href="https://geovaniparadiretor.vercel.app/" target="_blank"
                        rel="noopener noreferrer">Deploy</a>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref('aqui está uma mostra do meu');
const titleAzul = ref('trabalho');
const titleProjeto = ref('Projeto Geovani Diretor');
const descProjeto = ref('O objetivo do projeto era, além de mostrar os principais tópicos da campanha, também informar quais os documentos o público votante precisaria levar na hora da votação. Além disso, também era disponibilizado o Plano de Gestão completo para baixar em PDF. Tecnologias utilizadas: HTML, CSS e JavaScript.');

</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/telegraf');

.projetos {
    display: flex;
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
    width: 1280px;
    max-height: 600px;
    text-align: center;
    margin: 0 auto;
}

.title {
    font-family: "Antonio", sans-serif;
    font-size: 39px;
    font-weight: bold;
    text-align: left;
    padding-left: 77px;
    padding-top: 186px;
    text-transform: uppercase;
    line-height: 1.2;
}

.titleAzul {
    font-family: "Antonio", sans-serif;
    font-size: 39px;
    font-weight: bold;
    text-align: left;
    padding-left: 77px;
    text-transform: uppercase;
    color: #93a9ff;
    line-height: 1.2;
}

.projetos-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding-top: 114px;
    padding-left: 231px;
    padding-bottom: 18px;
}

.projeto-card {
    width: 370px;
    height: 314px;
    border: 1px solid #93a9ff;
}

.title-projeto {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: #93a9ff;
    padding-top: 32px;
    padding-bottom: 28px;
}

.desc-projeto {
    font-family: "Antonio", sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 1.2;
}

.acessar a {
    text-decoration: none;
    color: white;
}

.acessar {
    margin-top: 8px;
    padding: 4px;
    margin-left: 8px;
    border-radius: 2px;
    border: none;
    background-color: #93a9ff;
}
</style>