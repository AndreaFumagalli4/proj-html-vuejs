<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/MainComponents/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>

  <header>
    <AppHeader />
  </header>

  <main>
    <AppMain />
  </main>

  <footer>
    <AppFooter />
  </footer>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

  .green-button {
    color: $sec-bg-color;
    background-color: $detail-color;
    font-weight: bold;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 10px;
  }

  header {
    background-color: $third-bg-color;
  }

  p {
    font-size: $text-fs;
  }

</style>
