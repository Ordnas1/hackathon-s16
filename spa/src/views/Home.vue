<template>
  <div class="home">
    <h1>Single Page Applications</h1>
    <p class="desc">Una <a href="https://es.wikipedia.org/wiki/Single-page_application">Single Page Application</a> o aplicación de página única es una
    página web que emula el comportamiento de una aplicación nativa al caber en solo una página. Esto nos permite brindar una mejor experiencia
    de usuario.</p>
    <p class="desc">Vue.js nos permite crear Single Page Applications de forma eficiente mediante el uso de Vue Router (Herramienta de
    enrutamiento) y Vuex (gestor de estado de Vue).</p>
    <p class="desc">Esta página ha sido creada usando lo siguiente:</p>

    <ul class="list">
      <li>Vue.js</li>
      <li>Vue Router</li>
      <li>Vuex</li>
      <li>Flexbox</li>
      <li>CSS Grid</li>
      <li>API Rest</li>
      
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped lang="scss">
  .desc {
    margin:1.5% 15%;
    text-align: justify;
    line-height: 1.5rem
  }

  .list {
    flex: 0 0 200px;
    align-self: flex-start;
    width: 10%;
    margin: 0 16.5%;
    padding: 0;
  }

  .list li {
    margin: 1rem 0;
  }
</style>