<template>
  <div class="contato">
    <div class="contato-title">
      <h2 class="title">{{ contatoTitle }}</h2>
    </div>

    <div class="entraContato">
      <div class="email">
        <h5 class="subtitle">{{ email }}</h5>
        <a class="link" href="mailto:joaocarlosifsc@hotmail.com">joaocarlosifsc@hotmail.com</a>
      </div>

      <h5 class="subtitle">{{ curriculo }}</h5>
      <a class="link" href="../assets/curriculo/Currículo João Carlos.pdf" download="Currículo João Carlos.pdf">
        Acesse o meu Currículo em PDF
      </a>

      <div class="redes">
        <h5 class="subtitle">{{ redes }}</h5>


        <a href="https://wa.me/48991268854" target="_blank" class="icon-link whatsapp">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>

        <a href="https://www.linkedin.com/in/joao-carlos-borges/" target="_blank" class="icon-link linkedin">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const contatoTitle = ref('séra um prazer trabalhar com todos vocês!');
const email = ref('E-mail');
const curriculo = ref('Currículo');
const redes = ref('Minhas redes sociais');
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/telegraf');

.contato {
  background-color: #93a9ff;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 600px;
  margin: 0 auto;
}

.title {
  color: #191919;
  font-size: 28px;
  font-weight: bold;
  font-family: "Antonio", sans-serif;
  text-align: left;
  text-transform: uppercase;
  line-height: 1.2;
  padding-top: 183pxpx;
  padding-left: 138px;
  width: 435px;
  height: 210px;
}

.entraContato {
  /* padding: 20px 0;
  text-align: center; */
  padding-top: 183px;
  padding-left: 246px;
  text-align: left;
}

.email {
  padding-bottom: 81px;
}

.subtitle {
  font-size: 16px;
  font-family: 'Telegraf', sans-serif;
  color: #ffffff;
}

.link {
  text-decoration: none;
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  font-family: "Antonio", sans-serif;
  transition: color 0.8s ease;
}

.link:hover {
  color: #0A66C2;
}

.redes {
  padding-top: 81px;
  display: block;
  gap: 15px;
  justify-content: center;
}

.icon-link {
  font-size: 2rem;
  /* Aumenta o tamanho do ícone */
  color: #ffffff;
  transition: color 0.8s ease;
}

/* Mude a cor no hover para a cor da marca */
.whatsapp:hover {
  color: #25D366;
}

.linkedin:hover {
  color: #0A66C2;
}

/* Media Query para Tablets (481px a 1024px) */
@media screen and (min-width: 481px) and (max-width: 1024px) {
  .contato {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px;
    height: 600px;
  }

  .title {
    font-size: 36px;
    padding: 0 20px;
  }

  .entraContato {
    padding: 0 20px;
    text-align: left;
  }

  .email {
    padding-bottom: 40px;
  }

  .redes {
    padding-top: 40px;
    display: block;
  }
}

/* Media Query para Desktops (acima de 1025px) */
@media screen and (min-width: 1025px) {
  .contato {
    flex-direction: row;
    height: 600px;
    padding: 0;
  }

  .title {
    font-size: 42px;
    text-align: left;
    padding-top: 183px;
    padding-left: 138px;
    width: 435px;
    height: 210px;
  }

  .entraContato {
    padding-top: 183px;
    padding-left: 246px;
    text-align: left;
  }

  .email {
    padding-bottom: 81px;
  }

  .redes {
    padding-top: 81px;
    display: flex;
  }
}
</style>
