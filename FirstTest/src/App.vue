<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <nav class="top-menu">
      <ul class="menu-items">
        <a>
          <RouterLink to="/ex1">Ex1</RouterLink>
          <RouterLink to="/ex2">Ex2</RouterLink>
          <RouterLink to="/ex3">Ex3</RouterLink>
          <RouterLink to="/ex4">Ex4</RouterLink>
          <RouterLink to="/ex5">Ex5</RouterLink>          
        </a>
      </ul>
    </nav>


    <nav>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.top-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.menu-items {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

</style>
