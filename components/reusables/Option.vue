<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

withDefaults(
  defineProps<{
    image?: string
    value?: any
    label?: string
  }>(),
  {
    value: false,
    label: 'Default label',
  },
)

const { emit } = useEventBus<string>('response')
</script>
<template>
  <div
    @click="emit(value)"
    class="flex items-center px-6 mx-auto mb-5 w-full leading-6 text-left text-black bg-violet-100 border border-solid cursor-pointer border-neutral-200"
    style="
      justify-content: left;
      border-radius: 10px;
      min-height: 64px;
      max-width: 360px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      list-style: outside none none;
    "
  >
    <NuxtImg
      v-if="image"
      :src="image"
      class="mr-3 text-left cursor-pointer inline-block w-9 h-9 text-black align-top bg-no-repeat bg-contain lg:h-12 lg:w-12"
      style="list-style: outside none none"
    />
    <p
      class="m-0 text-sm leading-5 text-black"
      style="list-style: outside none none"
    >
      {{ label }}
    </p>
  </div>
</template>
