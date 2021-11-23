import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ProjectsByProducer from '../plugins/project/pages/projects-by-producer';
import Login from "../views/Login";
import Register from "../views/Register";
import Publications from "../views/Publications";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Perfil',

    component: () => import('../views/Perfil.vue')
  },
  {
    path: '/musical-producer/:id',
    name: 'MusicalProducer',
    component: () => import('../plugins/musical-producer/pages/producer-info')
  },
  {
    path: '/top-musical-producers',
    name: 'Top',
    component: () => import('../views/Top-Producers')
  },
  {
    path: '/contracts',
    name: 'Contracts',
    component: () => import('../views/Contracts')
  },
  {
    path: '/projects/:idPlayList',
    name: 'Projects',
    component: ProjectsByProducer
  },
  {
    path: '/playlists/:idProducer',
    name: 'PlayList',
    component: () => import('../plugins/playlist/pages/playlist-home')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
