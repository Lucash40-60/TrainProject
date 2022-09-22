<template>
    <div>
        <h1 class="text-center text-lg">
            Create a Projet 
        </h1>

        <form method="post" class="my-3 flex flex-col w-screen align-middle justify-evenly">
            <!-- INPUT AUTEUR -->
            <div class="my-3 flex flex-row justify-evenly align-middle">
                <label>
                    Nom Projet
                </label>
                <input class="border-solid border-black bg-slate-100"
                    v-model="nomProjet" 
                    />
            </div>

            <!-- INPUT projet -->
            <div class="my-3 flex flex-row justify-evenly align-middle">
                <label>
                    Domaine Projet
                </label>
                <input type="text" class="border-solid border-black bg-slate-100"
                    v-model="domaineProjet"
                    />
            </div>

            <div class="my-3 flex flex-row justify-evenly align-middle">
                <label>
                    Utilisateurs associés 
                </label>
                <select class="border-solid border-black bg-slate-100"
                    v-model="usersProjets">
                    
                    <option v-for="(dataU, index) in dataUsers" :key="index">
                        {{ dataU.nomuser }}
                    </option>
                </select>
            </div>

            <router-link to="/" v-on:click="NewData(nomProjet, domaineProjet, usersProjets)">
                <input type="submit" class="btn w-1/5 m-auto rounded-md bg-blue-300" value="Envoyer"/>
            </router-link>
        </form>
    </div>
</template>
  
<script setup>
    import axios from 'axios'
    import {useStore} from 'vuex'; 
    import { onMounted, ref } from 'vue';

    let dataUsers = ref()
    const store = useStore(); 
    // data() {
    //     return {
    //         nomProjet: null, 
    //         domaineProjet: null, 
    //         usersProjets: null
    //     };
    // }

    onMounted(() => {
        store.commit('GetAllProjets'); 
  
        axios.get('http://localhost:3000/utilisateurs').then((res) => {
          dataUsers.value = res.data
          console.log("tab projets", dataUsers);
        })
    })

    function NewData(nomProjet, domaineProjet, usersProjets) {
        console.log("Data projet envoyées", nomProjet, domaineProjet, usersProjets)
        axios.post('http://localhost:3000/projets/new',{
            nomProjet: nomProjet, 
            domaineProjet: domaineProjet, 
            usersProjets: usersProjets
        },{
            'content-type': 'application/json', 
            'Access-Control-Allow-Origin': '*'
        }).then(function (reponse) {
            console.log(reponse);
        })
        .catch(function (erreur) {
            console.log(erreur);
        });
    }

</script>