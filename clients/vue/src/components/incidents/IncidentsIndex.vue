<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useIncidentStore } from '../../store/incidents';
import { SideBarAvailableComponents, useSideBarStore } from '../../store/sidebar';
import IncidentsCard from '../common/IncidentCard.vue';

const incidentStore = useIncidentStore();
const theSideBarStore = useSideBarStore();

const { incidents } = storeToRefs(useIncidentStore());

onMounted(async () => {
  await incidentStore.all();
});

function addNewIncident(): void {
  theSideBarStore.openSideBar(SideBarAvailableComponents.INCIDENTS_CREATE_NEW);
}
</script>

<template>
  <h4>Incidents</h4>
  <button class="btn btn-primary" @click="addNewIncident()">
    New Incident
  </button>

  <div class="row list" v-if="incidents.length > 0">
    <div class="col">
      <IncidentsCard
        class="my-2"
        v-for="item in incidents"
        :key="item.id"
        :incident="item"
        :basePath="'incidents'"
      ></IncidentsCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
