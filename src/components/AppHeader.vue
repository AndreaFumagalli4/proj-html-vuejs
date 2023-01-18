<script>

export default {
  name: 'AppHeader',

  data() {
    return {
      linksList: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop',]
    }
  }
}
</script>

<template>
  <section class="container flex flex-align-center">
    <div class="logo-container">
      <img src="../assets/images/dark-logo.png" alt="Main Logo">
    </div>
    <div class="flex">
      <ul class="flex">
        <li v-for="link in linksList">
          <a href="#">
            {{ link }}
            <i class="fa-solid fa-angle-down"></i>
          </a>
        </li>
      </ul>
      <ul class="flex">
        <li>
          <a href="#">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-regular fa-circle-user"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="flex">
      <input type="text" placeholder="Search...">
      <button>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
  
  section.container {
    height: 100px;
    color: $titles-color;
    font-size: $text-fs;
    div.logo-container {
      width: 150px;
  
      img {
        width: 100%;
      }
    }
  }
</style>
