<script setup>
import ContatoComponent from './components/ContatoComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import SobreComponent from './components/SobreComponent.vue';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const cards = [
  {
    titleProjeto: 'Projeto Geovani Diretor',
    descProjeto: 'O objetivo do projeto era, além de mostrar os principais tópicos da campanha, também informar quais os documentos o público votante precisaria levar na hora da votação. Além disso, também era disponibilizado o Plano de Gestão completo para baixar em PDF. Tecnologias utilizadas: HTML, CSS e JavaScript.',
    linkGithub: 'https://github.com/joao-carlos-dev/projeto_geovani_diretor',
    linkDeploy: 'https://geovaniparadiretor.vercel.app/',
  },
  {
    titleProjeto: 'Efood',
    descProjeto: 'Projeto final do curso Full Stack Python, dos módulos relacionados ao front-end. Que tinha como objetivo de criar uma aplicação, com o tema delivery de comida. Criar desde a página de apresentação dos produtos, adicionar ao carrinho, formulário de comprar, entrega. Tecnologias utilizadas, React, Typescript, styled components, redux e entre outras.',
    linkGithub: 'https://github.com/joao-carlos-dev/EFood',
    linkDeploy: 'https://efood-mu-coral.vercel.app/',
  },
  {
    titleProjeto: 'Freguesia de Mirim',
    descProjeto: 'Website sobre a Freguesia de Mirim (Imbituba-SC), explorando história e cultura local. Utiliza HTML, CSS (minificado e responsivo), JavaScript, Bootstrap, Swiper e Google Fonts. Gulp otimiza CSS e imagens. Apresenta notícias, história da Sociedade Cultural, informações sobre a Lagoa do Mirim, eventos culturais (Festa do Divino, exposições), detalhes de visitação e contato. Design responsivo e otimizado para desempenho. Contribuições são bem-vindas via GitHub.',
    linkGithub: 'https://github.com/joao-carlos-dev/freguesia_de_mirim/tree/main',
    linkDeploy: 'https://scfreguesiademirim.web.app/',
  }
];
</script>

<template>
  <main>
    <HeroComponent />
    <SobreComponent />

    <div class="projetos">
      <div class="projetos-title">
        <h2 class="title">aqui está uma mostra do meu</h2>
        <h2 class="titleAzul">trabalho</h2>
      </div>

      <Carousel :items-to-show="1" :wrap-around="true" class="projetos-carrossel">
        <Slide v-for="(card, index) in cards" :key="index">
          <div class="projeto-card">
            <div class="projeto-info">
              <h4 class="title-projeto">{{ card.titleProjeto }}</h4>
              <p class="desc-projeto">{{ card.descProjeto }}</p>
              <div class="links">
                <a class="acessar" :href="card.linkGithub" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a class="acessar" :href="card.linkDeploy" target="_blank" rel="noopener noreferrer">Deploy</a>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>


    </div>

    <ContatoComponent />
  </main>
</template>

<style scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

/* Estilos para o carrossel Vue3 Carousel */
.projetos-carrossel {
  flex: 1;
  width: 50%;
}

.carousel__slide {
  padding: 0px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: #fff;
  background-color: #93a9ff;
  border-radius: 50%;
}

/* Container geral da seção */
.projetos {
  background-image: linear-gradient(90deg, #000000, #737373);
  display: flex;
  align-items: center;
  padding: 60px;
  color: white;
  max-width: 1280px;
  min-height: 600px;
  box-sizing: border-box;
  margin: 0 auto;
}

/* Títulos */
.projetos-title {
  flex: 1;
  text-align: left;
}

.title,
.titleAzul {
  font-family: "Antonio", sans-serif;
  font-size: 39px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  line-height: 1.2;
}

.titleAzul {
  color: #93a9ff;
}

.projeto-card {
  width: 100%;
  height: 300px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #93a9ff;
  color: white;
  border-radius: 20px;
}

.projeto-info {
  text-align: left;
  padding: 20px;
  width: 100%;
}

.title-projeto {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #93a9ff;
  margin-bottom: 12px;
}

.desc-projeto {
  font-family: "Antonio", sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-transform: uppercase;
  padding-bottom: 20px;
}

.links {
  display: flex;
  gap: 8px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;
}

.acessar {
  text-decoration: none;
  background-color: #93a9ff;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  transition: background 0.2s;
  color: black;
}

.acessar:hover {
  background-color: #7a8fe3;
}
</style>
