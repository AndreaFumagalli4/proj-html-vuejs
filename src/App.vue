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

  section {
    margin-bottom: 3rem;
  }

  header {
    background-color: $third-bg-color;
  }

  p {
    font-size: $text-fs;
  }

  h3 {
    text-align: center;
    color: $subtitles-color;
    text-transform: uppercase;
    font-weight: 500;
    font-size: .8rem;
    padding: 1rem 0;
  }

  h2 {
    text-align: center;
    color: $titles-color;
    font-size: $titles-fs;

    span {
            color: $detail-color;
            text-transform: uppercase;
            font-weight: 400;
        }
  }

</style>
