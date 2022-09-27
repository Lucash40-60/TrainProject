<template>
    <div>
        <h1 class="text-center text-3xl mt-8">
            Créer un projet 
        </h1>

        <form method="post" class="my-3 flex flex-col w-screen align-middle justify-evenly">
            <div class="my-3 flex flex-row justify-evenly align-middle">
                <label>
                    Nom Projet
                </label>
                <input class="border-solid border-black bg-slate-100"
                    v-model="nomProjet" 
                    />
            </div>

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

            <router-link class="mx-auto w-1/5" to="/" v-on:click="NewData(nomProjet, domaineProjet, usersProjets)">
                <input type="submit" class="btn py-1 w-full rounded-md bg-blue-300" value="Envoyer"/>
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
    let nomProjet = ref()
    let domaineProjet = ref()
    let usersProjets = ref()
    
    onMounted(() => {
        store.commit('GetAllProjets'); 

        axios.get('http://localhost:3000/utilisateurs').then((res) => {
            dataUsers.value = res.data
            console.log("tab utilisateurs PROJET", dataUsers);
        })
    })

    function NewData(nomProjet, domaineProjet, usersProjets) {
        axios.post('http://localhost:3000/projets/new',{
            nomProjet: nomProjet, 
            domaineProjet: domaineProjet, 
            usersProjets: this.usersProjets
        },{
            'content-type': 'application/json', 
            'Access-Control-Allow-Origin': '*'
        }).then(function (reponse) {
            console.log(reponse);
        })
        .catch(function (erreur) {
            console.log(erreur);
        });

        console.log('USER INSERER', usersProjets)
    }
</script>