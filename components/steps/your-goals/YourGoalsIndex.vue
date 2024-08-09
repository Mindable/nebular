<script setup lang="ts">
import Options from '~/components/reusables/Options.vue'
import { options } from '~/components/steps/your-goals/options/data'
import { useStepResponseStore } from '~/stores/stepResponseStore'

const responseStore = useStepResponseStore()

const dynamicOptions = computed(() => {
  const prevResponse = responseStore.responses.at(
    responseStore.responses.findIndex(r => r.name === 'your-profile'),
  )

  return prevResponse?.response as string
})
const currentStepOptions = computed(() => {
  const dynamicValue = dynamicOptions.value as keyof typeof options
  if (dynamicValue in options) {
    return options[dynamicValue]
  } else {
    console.error(`Invalid dynamic option value: ${dynamicValue}`)
    return []
  }
})
</script>

<template>
  <div class="flex flex-col w-full leading-6 text-black">
    <h2
      class="self-start mx-0 mt-5 mb-10 text-2xl font-bold leading-7 text-left lg:text-3xl text-zinc-800"
    >
      What is your goal?
    </h2>
    <div
      class="flex-grow my-0 mx-auto w-full leading-6 text-center text-black"
      style="max-width: 708px"
    >
      <Options :options="currentStepOptions" />
    </div>
  </div>
</template>
