<script setup lang="ts">
import { useEventBus } from '@vueuse/core'

const { emit } = useEventBus<string>('response')
</script>
<template>
  <NuxtImg
    @click="emit('female')"
    src="/svgs/female.svg"
    class="mx-auto w-[160px] md:w-[180px] lg:w-[180px]"
  />
</template>
