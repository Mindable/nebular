import StartIndex from '~/components/steps/start/StartIndex.vue'
import type { Step } from '~/types/app'
import Male from '~/components/steps/start/options/Male.vue'
import Female from '~/components/steps/start/options/Female.vue'
import UserCountIndex from '~/components/steps/user-count/UserCountIndex.vue'
import Continue from '~/components/steps/user-count/options/Continue.vue'
import YourProfileIndex from '~/components/steps/your-profile/YourProfileIndex.vue'
import YourGoalsIndex from '~/components/steps/your-goals/YourGoalsIndex.vue'

export const useStepStore = defineStore('step', () => {
  const app = useAppStore()

  const steps: Step[] = [
    {
      id: 1,
      name: 'start',
      component: StartIndex,
      options: [Male, Female],
      stepperGroup: 1,
      next: 2,
    },
    {
      id: 2,
      name: 'user-count',
      component: UserCountIndex,
      options: [Continue],
      stepperGroup: 1,
      next: 3,
    },
    {
      id: 3,
      name: 'your-profile',
      component: YourProfileIndex,
      options: [],
      stepperGroup: 1,
      showStepper: true,
      next: 4,
    },
    {
      id: 4,
      name: 'your-goal',
      component: YourGoalsIndex,
      options: [],
      stepperGroup: 2,
      showStepper: true,
    },
  ]
  const currentStepName = ref('start')
  const currentStep = computed(() => {
    return steps.find(s => s.name == currentStepName.value)
  })

  const stepResponseStore = useStepResponseStore()

  onMounted(() => {
    const lastResponse = stepResponseStore.getLastResponseStepName()
    if (lastResponse) {
      app.setLoadingTrue()
      updateCurrentStepName(lastResponse)
      goToNextStep()
    }
    app.setLoadingFalse()
  })

  const updateCurrentStepName = (name: string) => {
    currentStepName.value = name
  }

  const goToNextStep = () => {
    if (currentStep.value) {
      app.setLoadingTrue()
      const currentId = currentStep.value.id
      const nextId = currentId + 1
      const nextObj = steps.find(s => s.id === nextId)
      if (nextObj) {
        navigateTo(`/${nextObj.name}`)
        app.setLoadingFalse()
      }
    }
  }

  return {
    steps,
    currentStepName,
    currentStep,
    goToNextStep,
    updateCurrentStepName,
  }
})
