<template>
    <div>
        <h1 class="text-center text-3xl mt-8">
            Créer une réunion pour le projet {{nomProjet}}
        </h1>

        <div class="w-full flex flex-row justify-center">

            <div class="w-1/2 my-5 ml-5 flex flex-col align-middle">
                <span>
                    Id Projet : {{idProjet}}
                </span>
                <span>
                    Nom Projet : {{ nomProjet}}
                </span>
            </div>

            <form method="post" class="w-1/2 my-5 m-auto flex flex-col align-middle justify-start">
                <div class="my-3 flex flex-row justify-center align-start">
                    <label for="Notes" class="mx-2">
                        Prises de notes
                    </label>
                    <textarea class="mx-2" id="Notes" name="story" rows="5" cols="50" v-model="notesReunion" placeholder="Prenez vos notes ici">
                    </textarea>                    
                </div>

                <router-link class="mx-auto w-1/6" to="/" v-on:click="NewData(notesReunion, idProjet)">
                    <input type="submit" class="btn py-1 w-full rounded-md bg-blue-300" value="Envoyer"/>
                </router-link>
            </form>
        </div>
    </div>
</template>
  
<script setup>
    import axios from 'axios'
    import {useStore} from 'vuex'; 
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router'
    const router = useRouter()

    let dataUsers = ref()
    const store = useStore();

    let notesReunion = ref(); 

    let idProjet = router.currentRoute.value.params.idprojet; 
    let nomProjet = router.currentRoute.value.params.nomprojet; 

    console.log("ID PROJET ROUTER", idProjet)

    console.log("ROUTER", router.currentRoute)

    let dataProjets = ref()
    let idprojet = ref(); 
    let nomprojet = ref(); 

    // idprojet.value = router.params.idprojet

    // console.log(this.$router.query.idprojet) //outputs 'yay'

    onMounted(() => {
        store.commit('GetAllProjets'); 

        axios.get('http://localhost:3000/utilisateurs').then((res) => {
            dataUsers.value = res.data
            console.log("tab utilisateurs", dataUsers);
        })

        axios.get('http://localhost:3000/projets').then((res) => {
            dataProjets.value = res.data
            idprojet.value = res.data
            nomprojet.value = res.data
            dataUsers.value = res.data
            console.log("tab PROJET", dataUsers);
        })
    })

    function NewData(notesReunion, idProjet) {
        axios.post('http://localhost:3000/reunion/new',{
            notesReunion: notesReunion, 
            idProjet: this.idProjet
        },{
            'content-type': 'application/json', 
            'Access-Control-Allow-Origin': '*'
        }).then(function (reponse) {
            console.log(reponse);
        })
        .catch(function (erreur) {
            console.log(erreur);
        });

        console.log('REUNION PROJET INSERER', idProjet)
    }

</script>