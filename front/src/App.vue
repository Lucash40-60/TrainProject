<template>
  <nav class="m-0 h-8 w-screen bg-cyan-400 flex flex-row justify-evenly">
    <router-link to="/">Home</router-link>
    <router-link to="/createprojet">Créer projet</router-link>
    <router-link to="/">Tous les projets</router-link>
  </nav>
  <router-view/>
</template>
