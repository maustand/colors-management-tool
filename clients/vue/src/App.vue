<script setup lang="ts">
import { storeToRefs } from 'pinia';
import TheSideBar from './components/common/layout/TheSideBar.vue';
import { useSideBarStore } from './store/sidebar';

const { isSideBarOpen, sidebarComponent } = storeToRefs(useSideBarStore());
</script>

<template>
  <p>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/incidents">Go to incidents</router-link>
  </p>

  <router-view></router-view>

  <TheSideBar />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
