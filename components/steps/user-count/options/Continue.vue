<script setup lang="ts">
import { useEventBus } from '@vueuse/core'
import GradientButton from '~/components/reusables/GradientButton.vue'

const { emit } = useEventBus<string>('response')
</script>
<template>
  <GradientButton
    @click="emit('true')"
    class="!my-[30px] !mx-auto"
    type="button"
    >Continue
  </GradientButton>
</template>
