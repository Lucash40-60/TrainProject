import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateProjet from '../views/CreateProjet.vue'
import AllProjects from '../views/AllProjects.vue'


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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
