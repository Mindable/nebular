<script setup lang="ts">
import Logo from '~/components/reusables/logo.vue'
import Loading from '~/components/reusables/Loading.vue'
import Stepper from '~/components/reusables/Stepper.vue'

definePageMeta({
  layout: 'default',
})

const app = useAppStore()
const stepData = useStepStore()
const stepResponse = useStepResponseStore()
const { on: responseEvent } = useEventBus<string>('response')
const { on: navigateEvent } = useEventBus<boolean>('navigate')
const { updateCurrentStepName } = useStepStore()
const route = useRoute()

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
    if (typeof newStep === 'string') updateCurrentStepName(newStep)
  },
)

onMounted(() => {
  updateCurrentStepName(route.params.step as string)
})
</script>

<template>
  <div class="page-component">
    <Loading v-if="app.isLoading()" />
    <Logo />
    <Stepper class="my-4" v-if="stepData.currentStep?.showStepper" />
    <component :key="Math.random()" :is="stepData.currentStep?.component" />
  </div>
</template>
