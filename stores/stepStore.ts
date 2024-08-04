import StartIndex from '~/components/steps/start/StartIndex.vue'
import UserCount from '~/components/steps/UserCount.vue'
import YourProfile from '~/components/steps/YourProfile.vue'
import YourGoals from '~/components/steps/YourGoals.vue'
import type { Step } from '~/types/steps'
import Male from '~/components/steps/start/options/Male.vue'
import Female from '~/components/steps/start/options/Female.vue'

export const useStepStore = defineStore('step', () => {
  const steps: Step[] = [
    {
      id: 1,
      name: 'start',
      component: StartIndex,
      options: [Male, Female],
      next: 2,
    },
    {
      id: 2,
      name: 'user-count',
      component: UserCount,
      next: 3,
    },
    {
      id: 3,
      name: 'your-profile',
      component: YourProfile,
      next: 4,
    },
    {
      id: 4,
      name: 'your-goal',
      component: YourGoals,
    },
  ]

  const currentStepName = ref('start')
  const currentStep = computed(() => {
    return steps.find(s => s.name == currentStepName.value)
  })

  const updateCurrentStepName = (name: string) => {
    currentStepName.value = name
  }

  const goToNextStep = () => {
    if (currentStep.value) {
      const currentId = currentStep.value.id
      const nextId = currentId + 1
      const nextObj = steps.find(s => s.id === nextId)
      console.log(nextObj)
      if (nextObj) navigateTo(`/${nextObj.name}`)
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
