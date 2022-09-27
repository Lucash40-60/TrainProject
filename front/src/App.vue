<template>
  <div id="app" class="w-screen overflow-hidden">
    <nav class="m-0 h-12 flex flex-row bg-cyan-400 list-none ">
      <div class="my-auto flex flex-rox w-full text-xl">
        <a class="mx-3" href="/">UserMind</a>
        <div class="flex flex-row mr-auto">
          <li class="mx-3">
            <router-link to="/allproject">
              Tous les projets
            </router-link>
          </li>
          <li class="mx-3">
            <router-link to="/createprojet">
              Créer un projet
            </router-link>
          </li>
        </div>
        <div class="flex flex-row ml-auto">
          <li class="mx-3">
            <a href="#">
              Sign Up
            </a>
          </li>
          <li class="mx-3">
            <a href="#">
              Login
            </a>
          </li>
        </div>
      </div>
    </nav>
  </div>
  <router-view/>
</template>