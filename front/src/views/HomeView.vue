<template>
  <div>
    <h1 class="mx-0 text-2xl text-center">
      Test projet Usermind
    </h1>
    <div class="w-screen flex flex-row justify-evenly mt-6">
      <div class="flex flex-col">
        <h2>
          Users 
        </h2>
          <div v-for="(dataU, index) in dataUsers" :key="index">
            <span>
              {{dataU.iduser}} - {{dataU.nomuser}} - {{dataU.ageuser}}
            </span>
          </div>
      </div>
      <div class="flex flex-col">
        <h2>
          Projets 
        </h2>
          <div v-for="(dataP, index) in dataProjets" :key="index">
            <span>
              {{dataP.idprojet}} - {{dataP.nomprojet}} - {{dataP.domaineprojet}}
            </span>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {useStore} from 'vuex'; 
  import { onMounted, ref } from 'vue';
  import axios from 'axios'

  let dataUsers = ref()
  let dataProjets = ref()
  const store = useStore(); 

  onMounted(() => {

    store.commit('GetAllUsers'); 
    store.commit('GetAllProjets'); 

      axios.get('http://localhost:3000/utilisateurs').then((res) => {
        dataUsers.value = res.data
        console.log("tab users", dataUsers);
      })
      axios.get('http://localhost:3000/projets').then((res) => {
        dataProjets.value = res.data
        console.log("tab projets", dataProjets);
      })
  })
</script>
