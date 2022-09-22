<template>
    <div>
      <h1 class="mx-0 text-2xl text-center">
        Tous les projets
      </h1>
      <div class="w-screen flex flex-col justify-evenly mt-6">
        <div class="w-full h-10 py-3 mb-5 flex flex-row align-middle justify-around bg-slate-100">
            <span>
                idProjet
            </span>
            <span>
                Nom Projet
            </span>
            <span>
                Domaine Projet
            </span>
        </div>
        <div class="w-full m-3 flex flex-row justify-around" v-for="(dataP, index) in dataProjets" :key="index">
            <span>
                {{dataP.idprojet}}
            </span>
            <span>
                {{dataP.nomprojet}}
            </span>
            <span>
                {{dataP.domaineprojet}}
            </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import {useStore} from 'vuex'; 
    import { onMounted, ref } from 'vue';
    import axios from 'axios'
  
    let dataProjets = ref()
    const store = useStore(); 
  
    onMounted(() => {
        store.commit('GetAllProjets'); 
  
        axios.get('http://localhost:3000/projets').then((res) => {
          dataProjets.value = res.data
          console.log("tab projets", dataProjets);
        })
    })
  </script>
  