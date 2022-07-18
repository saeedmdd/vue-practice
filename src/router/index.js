import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import About from '@/views/About.vue'
import EventDetail from "@/views/EventDetail";

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },{
  path: '/event/detail/:id',
    name: 'EventDetails',
    props:true,
    component: EventDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
