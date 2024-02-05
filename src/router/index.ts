import { createRouter, createWebHistory } from 'vue-router'


import DefaultLayout from '../layouts/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegistrationView from '../views/RegistrationView.vue';
import NotFoundViewVue from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: HomeView,
      },
      {
        path: '/Login',
        name: 'Login',
        component: LoginView,
      },
      {
        path: '/Registration',
        name: 'Registration',
        component: RegistrationView,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundViewVue,
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition ||  new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth' })
      }, 300)
    })
  }  
});

export default router;