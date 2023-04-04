<script setup lang="ts">
import { ref } from 'vue';
import { Incident } from '../../interfaces/incident';
import {} from '../../store/sidebar';

const incidentName = ref('');
const description = ref('');

function submitForm() {
  const newIncident: Partial<Incident> = {
    name: incidentName.value,
    description: description.value,

  };
  console.log(newIncident)
}
</script>

<template>
  <h4>Create New Incident</h4>

  <form id="frmIncidentCreateNew" @submit.prevent="submitForm" class="row">
    <div class="mb-3">
      <label for="NameCreateIncident" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        v-model="incidentName"
        id="NameCreateIncident"
        placeholder="Incident's Name"
      />
    </div>
    <div class="mb-3">
      <label for="descCreateIncident" class="form-label">Description</label>

      <textarea
        class="form-control"
        id="descCreateIncident"
        rows="3"
        v-model="description"
      ></textarea>
    </div>

    <div>
      <button type="submit" form="frmIncidentCreateNew" class="btn btn-success" @submit="submitForm()">Create</button>
    </div>
  </form>
</template>
 1