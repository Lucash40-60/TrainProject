<template>
    <div class="w-full">
        <h1 class="w-full text-center font-sans text-3xl mt-8">
            Page du projet {{nomProjet}}
        </h1>
        <div class="w-full mx-auto my-6 flex flex-row justify-evenly">
            <div class="flex flex-col w-1/6 mx-auto align-middle">
                <p>
                    id Projet :
                </p>
                <p>
                    {{idProjet}}
                </p>
            </div>
            <div class="flex flex-col w-1/6 mx-auto align-middle">
                <p>
                    Domaine du projet : 
                </p>
                <div v-for="element in this.dataProjets" v-bind:key="element">
                    <div v-if="element.idprojet == router.currentRoute.value.params.idprojet">
                        {{ element.domaineprojet }}
                    </div>
                </div>
            </div>   
        </div>
        <div class="w-1/2 flex flex-row mx-auto justify-center">
            <div class="flex flex-col mx-6 align-middle">
                <p>
                    Notes réunion du projet {{ nomprojet }}
                </p>
            </div>
            <div class="flex flex-col w-max align-middle" v-for="element in this.dataReunions" v-bind:key="element">
                <div v-if="element.idprojet == router.currentRoute.value.params.idprojet">
                    {{ element.notesreunion }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import { onMounted, ref } from 'vue';
    import axios from 'axios'

    const router = useRouter()

    let dataProjets = ref()
    let dataReunions = ref()
    let element = ref()

    let idProjet = router.currentRoute.value.params.idprojet;
    let nomProjet = router.currentRoute.value.params.nomprojet;

    let testRouter = router.currentRoute.value; 
    console.log('PARAMS ROUTE', testRouter); 

    onMounted(() => {
        axios.get('http://localhost:3000/projets').then((res) => {
            console.log("idProjetRoute", idProjet)
            console.log("nomProjetRoute", nomProjet)
            dataProjets.value = res.data
            element = dataProjets.value
            console.log("element", element)
            // console.log("tab projets", dataProjets);
            // console.log("DATA PROJET VALUE", dataProjets.value);
        })


        axios.get('http://localhost:3000/reunions').then((res) => {
            dataReunions.value = res.data
            element.value = dataReunions.value
            console.log("elementreunion", element)
            for(element.value of element){
                console.log("elementreunionvalue", element.value)
            }
        })
    })
</script>
