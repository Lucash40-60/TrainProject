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
                    v-model="usersProjets" v-for="(dataU, index) in dataUsers" :key="index"
                    >
                    <option>
                        {{ dataU }}
                    </option>
                </select>
            </div>

            <input type="submit" class="btn w-1/5 m-auto rounded-md bg-blue-300" v-on:click="NewData()" value="Envoyer"/>
        </form>
    </div>
</template>
  
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                nomProjet: null, 
                domaineProjet: null, 
                usersProjets: null
            };
        },

        methods: {
            NewData() {
                axios.post('http://localhost:3000/projets/new',{
                    nomProjet: this.nomProjet, 
                    domaineProjet: this.domaineProjet, 
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
                this.$router.push('/');
            }
        }
    }
</script>