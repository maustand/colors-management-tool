import { createRouter, createWebHistory } from 'vue-router';
import helloWord from './components/HelloWorld.vue'
import Test from './components/Test.vue'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  // dynamic segments start with a colon
  { path: '/', component: helloWord },
  { path: '/about', component: Test },
//   { path: '/about', component: About },
];

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
