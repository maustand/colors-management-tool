<script setup lang="ts">
import { useSideBarStore, SideBarAvailableComponents } from '../../../store/sidebar';
import { storeToRefs } from 'pinia';
import IncidentCreateNew from '../IncidentCreateNew.vue';

const theSideBarStore = useSideBarStore();
const { isSideBarOpen, componentName } = storeToRefs(useSideBarStore());
</script>

<template>
  <div
    class="sidenav d-flex flex-column"
    :class="[isSideBarOpen ? ['p-4', 'opened'] : '']"
  >
    <button type="button" class="close-btn btn ms-auto" @click="theSideBarStore.closeSideBar()">X</button>
  
    <IncidentCreateNew v-if="componentName === SideBarAvailableComponents.INCIDENTS_CREATE_NEW"></IncidentCreateNew>

  </div>
</template>

<style scoped lang="scss">
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #f8f8f8; /* Black*/
  overflow-x: hidden;
  transition: 0.5s;

  &.opened {
    width: 25rem;
  }
}
</style>
