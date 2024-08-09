<script setup lang="ts">
import { defineProps } from 'vue'
import Option from '~/components/reusables/Option.vue'
import type { option } from '~/types/app'

defineProps<{
  options: option[]
}>()
</script>
<template>
  <ul>
    <li
      class="leading-6 text-center text-black"
      style="list-style: outside none none"
    >
      <Option
        v-for="(option, i) in options"
        :key="i"
        :image="option.image"
        :label="option.label"
        :value="option.value"
      />
    </li>
  </ul>
</template>
