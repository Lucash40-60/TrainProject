<template>
    <div>
        <h1>
            Create a Projet 
        </h1>

        <form method="post">
            <!-- INPUT AUTEUR -->
            <div>
                <label>
                    Nom Projet
                </label>
                <input type="text"
                    v-model="nomProjet"
                    />
            </div>

            <!-- INPUT projet -->
            <div>
                <label>
                    Domaine Projet
                </label>
                <input type="text" 
                    v-model="domaineProjet"
                    />
            </div>

            <input type="submit" v-on:click="NewData()" value="Envoyer"/>
        </form>
    </div>
</template>
  
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                nomProjet: null, 
                domaineProjet: null
            };
        },

        methods: {
            NewData() {
                axios.post('http://localhost:3000/projets/new',{
                    nomProjet: this.nomProjet, 
                    domaineProjet: this.domaineProjet
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