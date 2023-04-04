import { createRouter, createWebHistory } from 'vue-router';
import DashboardIndex from './components/dashboard/DashboardIndex.vue';
import IncidentsIndex from './components/incidents/IncidentsIndex.vue';
import IncidentShow from './components/incidents/IncidentShow.vue';

const routes = [
  { path: '/', component: DashboardIndex },
  { path: '/incidents', component: IncidentsIndex },
  { path: '/incidents/:id', component: IncidentShow },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
