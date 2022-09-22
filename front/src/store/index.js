import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    GetAllUsers (state) {
      fetch("http://localhost:3000/utilisateurs")
      .then(res => res.json())
      .then(data => {
        // console.log("Duplicate"); 
        state.dataUser = data; 
      }); 
    }, 
    GetAllProjets (state) {
      fetch("http://localhost:3000/projets")
      .then(res => res.json())
      .then(data => {
        // console.log("Duplicate"); 
        state.dataProjet = data; 
      }); 
    }
  },
  actions: {
  },
  modules: {
  }
})
