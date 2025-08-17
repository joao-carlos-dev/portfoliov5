<script setup>
import ContatoComponent from './components/ContatoComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import ProjetosComponent from './components/ProjetosComponent.vue';
import SobreComponent from './components/SobreComponent.vue';

</script>

<template>
  <main>
    <HeroComponent />
    <SobreComponent />
    <ProjetosComponent />
    <ContatoComponent />
  </main>
</template>

<style scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
</style>
