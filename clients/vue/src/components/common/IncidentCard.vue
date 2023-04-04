<script setup lang="ts">
import { Incident } from '@/interfaces/incident';

interface IncidentsCardProps {
  incident: Incident;
  basePath: string;
}

const props = withDefaults(defineProps<IncidentsCardProps>(), {
  basePath: '',
});
</script>

<template>
  <a
    :href="`/${props.basePath}/${props.incident.id}`"
    class="text-decoration-none link"
  >
    <div class="col-1">
      <div class="color-box rounded"></div>
    </div>
    <div class="col-3 name">{{ props.incident.name }}</div>
    <div class="col">{{ props.incident.createdAt }}</div>
    <div class="col">{{ props.incident.updatedAt }}</div>
    <div class="col">{{ props.incident.createdBy }}</div>
  </a>
</template>

<style scoped lang="scss">
:host {
  display: block;
}

.link {
  display: flex;
  height: 4.438rem;
  background-color: #fff;
  padding: 1rem;
  color: #797979;
  align-items: center;

  &:hover {
    border: 0.06rem solid #077df9 !important;
    .name {
      color: #077df9;
    }
  }
}

.color-box {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
