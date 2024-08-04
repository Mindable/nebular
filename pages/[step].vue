<script setup lang="ts">
import Logo from '~/components/reusables/logo.vue'

const stepData = useStepStore()
const stepResponse = useStepResponseStore()
const { on: responseEvent } = useEventBus<string>('response')
const { on: navigateEvent } = useEventBus<string>('response')
const route = useRoute()
const { updateCurrentStepName } = useStepStore()

responseEvent(r => {
  if (stepData.currentStep) {
    stepResponse.updateResponse(stepData.currentStep.name, r)
  }
})

navigateEvent(go => {
  if (go) {
    stepData.goToNextStep()
  }
})

watch(
  () => route.params.step,
  newStep => {
    console.log('one')
    if (typeof newStep === 'string') updateCurrentStepName(newStep)
  },
)

onMounted(() => {
  updateCurrentStepName(route.params.step as string)
})
</script>

<template>
  <div class="page-component">
    <Logo />
    <component :key="Math.random()" :is="stepData.currentStep?.component" />
  </div>
</template>
