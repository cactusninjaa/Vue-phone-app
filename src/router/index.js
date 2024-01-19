import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import JournalView from '@/views/JournalView.vue'
import KeyboardView from '@/views/KeyboardView.vue'
import FormView from '@/views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'journal',
      component: JournalView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/keyboard',
      name: 'keyboard',
      component: KeyboardView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    },
  ]
})

export default router
