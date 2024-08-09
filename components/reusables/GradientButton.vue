<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

withDefaults(
  defineProps<{
    type: 'button' | 'reset' | 'submit' | undefined
    width?: number | 'full'
  }>(),
  {
    type: 'button',
    width: 'full',
  },
)
</script>

<template>
  <button
    :type="type"
    :class="['gradient-button', width === 'full' ? 'w-full' : width ? `w-[${width}px]` : '']"
  >
    <slot />
  </button>
</template>
