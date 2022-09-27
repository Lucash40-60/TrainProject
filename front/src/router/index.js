import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateProjet from '../views/CreateProjet.vue'
import AllProjects from '../views/AllProjects.vue'
import ProjectSelect from '../views/ProjectSelect.vue'
import CreerReunion from '../views/CreerReunion.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, 
  {
    path: '/createprojet',
    name: 'CreateProjet',
    component: CreateProjet
  }, 
  {
    path: '/allproject',
    name: 'AllProjects',
    component: AllProjects
  }, 
  {
    path: '/oneproject/:nomprojet:idprojet',
    name: 'ProjectSelect',
    component: ProjectSelect,
    props: {
      default: true,
      ProjectSelect: true
    }
  }, 
  {
    path: '/createreunion/:idprojet:nomprojet',
    name: 'CreerReunion',
    component: CreerReunion, 
    props: {
      default: true,
      CreateReunion: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router