<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <h2>{{ route.params.slug }}</h2>
</template>
