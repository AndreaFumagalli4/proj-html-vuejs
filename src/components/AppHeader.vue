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
    <div class="flex lists">
      <ul class="flex links">
        <li v-for="link in linksList">
          <a href="#">
            {{ link }}
            <i class="fa-solid fa-angle-down"></i>
          </a>
        </li>
      </ul>
      <ul class="flex icons-list">
        <li>
          <a href="#">
            <i class="fa-solid fa-cart-shopping fa-lg"></i>
            <span class="notification">0</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-regular fa-circle-user fa-lg"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="flex input-el">
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
    height: 70px;
    color: $titles-color;
    font-size: $text-fs;
    div.logo-container {
      width: 150px;
  
      img {
        width: 100%;
      }
    }
  }

  div.lists {
    margin-left: auto;
    ul.links li {
      padding: 0 1rem;
  
      &:last-child {
        padding-right: 0;
      }
    }
  }

  div.lists ul.icons-list {
    margin-left: .3rem;
  }

  ul.icons-list li{
    padding-right: 1.5rem;
  }

  ul.icons-list li:first-child {
    position: relative;
  }

  div.input-el {
    position: relative;

    input{
    width: 150px;
    padding: .75rem;
    border: none;
    border-radius: 3px;
    }
  }

  div.input-el button {
    color: $detail-color;
    background-color: $sec-bg-color;
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }

  span.notification{
    font-size: .5rem;
    color: $sec-bg-color;
    font-size: 600;
    background-color: $detail-color;
    padding: .15rem .35rem;
    border-radius: 1rem;
    position: absolute;
    bottom: 11px;
    right: 14px;
  }
</style>
