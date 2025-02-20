<template>
  <div id="app">
    <HeaderComponent />
    <main>
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
/* Global CSS-reset för att ta bort standardmarginaler */
html, body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

main {
  min-height: 80vh;
}
</style>
