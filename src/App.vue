<script setup>
import ContatoComponent from './components/ContatoComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import SobreComponent from './components/SobreComponent.vue';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const cards = [
  {
    titleProjeto: 'Freguesia de Mirim',
    descProjeto: 'Website sobre a Freguesia de Mirim (Imbituba-SC), explorando história e cultura local. Utiliza HTML, CSS (minificado e responsivo), JavaScript, Bootstrap, Swiper e Google Fonts. Gulp otimiza CSS e imagens. Apresenta notícias, história da Sociedade Cultural, informações sobre a Lagoa do Mirim, eventos culturais (Festa do Divino, exposições), detalhes de visitação e contato. Design responsivo e otimizado para desempenho. Contribuições são bem-vindas via GitHub.',
    linkGithub: 'https://github.com/joao-carlos-dev/freguesia_de_mirim/tree/main',
    linkDeploy: 'https://scfreguesiademirim.web.app/',
  },
  {
    titleProjeto: 'Zimba Lero Lero',
    descProjeto: 'Projeto final do curso Full Stack Python, na EBAC. Que tinha como objetivo fazer uma aplicação completa, back e front end. A aplicação é uma rede social, aonde o usuário pode fazer seu cadastro e login, ao entra na conta, pode fazer um post, seguir um outro usuário, fazer comentários, e futuras melhorias, poder colocar foto de perfil, editar e excluir comentário e posts e entre outras. No front end, foi utilizado o React com o Vite, React Router DOM. No back end, foi utilizado o python e o Django REST Framework (DRF).',
    linkGithub: 'https://github.com/joao-carlos-dev/zimbaleroleroback',
    linkDeploy: 'https://zimbalerolero-front.vercel.app',
  },
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
    titleProjeto: 'Landing Page',
    descProjeto: 'O objetivo do projeto era criar uma “Landing page” utilizando a automação de tarefas com o gulp e aplicar a metodologia BEM e o pré-processador SASS.',
    linkGithub: 'https://github.com/joao-carlos-dev/projeto_04_tarefa',
    linkDeploy: 'https://sobrenaturalserie.vercel.app/',
  },
  {
    titleProjeto: 'Biblioteca do Bootstrap',
    descProjeto: 'O objetivo deste projeto era criar uma página utilizando-se da biblioteca do Bootstrap e, por meio dela, criar um carrosel de imagens e menu responsivo. Na base desse projeto também foi utilizado o HTML e CSS.',
    linkGithub: 'https://github.com/joao-carlos-dev/curso_ebac_frontend/tree/mod_14_tarefa_projeto_03',
    linkDeploy: 'https://imbitubacity.web.app/',
  },
  {
    titleProjeto: 'Agenda de Contatos',
    descProjeto: 'Pojeto utilizando React, Styled Components e Redux. O React foi a biblioteca escolhida para criar interface, o Styled Components responsável por estilizar aplicação e o Redux para gerenciar o estado da aplicação do projeto. O projeto tem como foco criar uma lista de contatos, aonde podemos, consultar os contatos, por filtros, adicionar novos contatos, editar e remover contatos.',
    linkGithub: 'https://github.com/joao-carlos-dev/ListaDeContato',
    linkDeploy: 'https://lista-contato-virid.vercel.app/',
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
  width: 100%;
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
  display: none;
}

/* Container geral da seção */
.projetos {
  background-image: linear-gradient(90deg, #000000, #737373);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  color: white;
  /* max-width: 1280px; */
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
  font-size: 28px;
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
  overflow: hidden;
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
  text-align: justify;
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
  text-transform: uppercase;
  background-color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  transition: background 0.2s;
  color: #93a9ff;
}

.acessar:hover {
  background-color: #7a8fe3;
}

@media screen and (max-width: 480px) {
  .projetos {
    flex-direction: row;
    /* Layout em linha em telas maiores */
    padding: 60px;
    padding-top: 350px;
    height: auto;
    width: auto;
  }

  .projeto-info {
    padding: 0px;
  }

  .projetos-title {
    flex: 1;
    text-align: left;
    padding-right: 12px;
  }

  .title,
  .titleAzul {
    font-size: 29px;
  }

  .projetos-carrossel {
    width: 60%;
  }

  .title-projeto {
    font-size: 12px;
    margin: 0;
  }

  .desc-projeto {
    font-size: 10px;
    line-height: normal;
    padding-bottom: 2px;
  }

  .carousel__prev,
  .carousel__next {
    display: block;
    /* Mostra os botões novamente */
  }

  .links {
    margin-top: 8px;
  }

  .acessar {
    padding: 3px;
    font-size: 8px;
  }
}

@media screen and (min-width: 481px) and (max-width: 1024px) {
  .projetos {
    flex-direction: row;
    padding: 20px;
    padding-top: 300px;
  }

  .projeto-info {
    padding: 8px;
  }

  .projetos-title {
    text-align: left;
    margin-right: 20px;
    margin-bottom: 0;
  }

  .title,
  .titleAzul {
    font-size: 32px;
  }

  .title-projeto {
    margin-bottom: 4px;
    font-size: 14px;
  }

  .desc-projeto {
    line-height: normal;
    font-size: 12px;
    padding-bottom: 4px;
  }

  .projetos-carrossel {
    width: 60%;
  }
}

/* Media Query para Desktops (acima de 1025px) */
@media screen and (min-width: 1025px) {
  .projetos {
    flex-direction: row;
    padding: 60px;
  }

  .projetos-title {
    text-align: left;
    margin-right: 40px;
    margin-bottom: 0;
  }

  .title,
  .titleAzul {
    font-size: 39px;
  }

  .projetos-carrossel {
    width: 50%;
  }
}
</style>
