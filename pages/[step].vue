<script setup lang="ts">
import Logo from '~/components/reusables/logo.vue'

const data = useStepStore()
</script>

<template>
  <div class="page-component">
    <Logo />

    <component :is="data.currentStep?.component" />
  </div>
</template>

<style scoped></style>
