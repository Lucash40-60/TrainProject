<template>
    <div>
      <h1 class="mx-0 mt-8 text-3xl text-center">
        Tous les projets
      </h1>
      <div class="w-screen flex flex-col justify-evenly mt-6">
        <div class="w-full text-lg h-12 my-auto flex flex-row justify-around bg-slate-100">
            <span>
                idProjet
            </span>
            <span>
                Nom Projet
            </span>
            <span>
                Domaine Projet
            </span>
            <span>
                Reunion
            </span>
        </div>
        <div class="w-full mt-6 flex flex-row justify-around text-center" v-for="(dataP, index) in dataProjets" :key="index">
            <span class="w-1/4">
                {{dataP.idprojet}}
            </span>
            <router-link :to="{
                  path: '/oneproject',
                  name: 'ProjectSelect',
                  params: { 
                      nomprojet: dataP.nomprojet, 
                      idprojet: dataP.idprojet
                    },
                }"
                class="w-1/4">
                {{dataP.nomprojet}}
            </router-link>
            <span class="w-1/4">
                {{dataP.domaineprojet}}
            </span>
            <router-link class="w-1/4 btn py-2 px-2 mx-3 rounded-xl bg-cyan-400"  
                :to="{
                  path: '/createreunion',
                  name: 'CreerReunion',
                  params: { 
                      idprojet: dataP.idprojet, 
                      nomprojet: dataP.nomprojet
                    },
                }"
                >
                  Creer une réunion
            </router-link>
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
    let idprojet = ref(); 
  
    onMounted(() => {
        store.commit('GetAllProjets'); 
  
        axios.get('http://localhost:3000/projets').then((res) => {
          dataProjets.value = res.data
          idprojet.value = res.data
          console.log("RESPONSE", res.data)
          console.log("IDPROJET", idprojet.value)
          console.log("tab projets", dataProjets);
        })
    })
  </script>
  