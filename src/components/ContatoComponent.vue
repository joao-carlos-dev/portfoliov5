<template>
    <div class="contato">
        <div class="contato-title">
            <h2 class="title">{{ contatoTitle }}</h2>
        </div>

        <div class="entraContato">
            <div class="email">
                <h5 class="subtitle">{{ email }}</h5>
                <a href="mailto:joaocarlosifsc@hotmail.com">joaocarlosifsc@hotmail.com</a>
            </div>

            <h5 class="subtitle">{{ github }}</h5>
            <a href="https://github.com/joao-carlos-dev" target="_blank"
                rel="noopener noreferrer">https://github.com/joao-carlos-dev</a>

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
const github = ref('Github');
const redes = ref('Minhas redes sociais');
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/telegraf');

.contato {
    background-color: #93a9ff;
    display: flex;
    width: 1280px;
    height: 600px;
    text-align: center;
    margin: 0 auto;
}

.title {
    color: #191919;
    font-size: 42px;
    font-weight: bold;
    font-family: "Antonio", sans-serif;
    text-align: left;
    text-transform: uppercase;
    line-height: 1.2;
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

.subtitle {
    font-size: 16px;
    font-family: 'Telegraf', sans-serif;
    color: #ffffff;
}

.entraContato a {
    text-decoration: none;
    color: #ffffff;
    font-size: 28px;
    font-weight: bold;
    font-family: "Antonio", sans-serif;
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
    color: #333;
    transition: color 0.3s ease;
}

/* Mude a cor no hover para a cor da marca */
.whatsapp:hover {
    color: #25D366;
}

.linkedin:hover {
    color: #0A66C2;
}
</style>