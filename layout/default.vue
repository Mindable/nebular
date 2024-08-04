<script setup lang="ts">
const colorMode = useColorMode()

onMounted(() => {
  colorMode.preference = 'light'
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped></style>
