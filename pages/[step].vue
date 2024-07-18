<script setup lang="ts">
const route = useRoute()
const params = route.params
</script>

<template>
  <div class="page-component">
    {{ params }}
  </div>
</template>

<style scoped></style>
