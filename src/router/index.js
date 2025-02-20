import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import EventsPage from '../views/EventsPage.vue'
import ContactPage from '../views/ContactPage.vue'
import Integritetspolicy from '../views/Integrity.vue';
import TOC from '../views/TermsofconditionPage.vue';
import Cookiepolicy from '../views/Cookiepolicy.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/om-oss', name: 'About', component: AboutPage },
  { path: '/evenemang', name: 'Events', component: EventsPage },
  { path: '/kontakt', name: 'Contact', component: ContactPage },
  { path: '/integritetspolicy', name: 'Integritetspolicy', component: Integritetspolicy },
  { path: '/villkor', name: 'Vilkor', component: TOC },
  {path: '/cookiepolicy', name: 'Cookiepolicy', component: Cookiepolicy}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
