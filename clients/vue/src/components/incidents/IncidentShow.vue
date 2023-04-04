<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

const currentId = route.params.id;

console.log(route.params.id);
</script>

<template>
  <h4 class="title">Incidents # {{ currentId }}</h4>
</template>

<style scoped lang="scss"></style>
