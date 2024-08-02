import Start from '~/components/steps/Start.vue'
import UserCount from '~/components/steps/UserCount.vue'
import YourProfile from '~/components/steps/YourProfile.vue'
import YourGoals from '~/components/steps/YourGoals.vue'
import type { Step } from '~/types/steps'

export const useStepStore = defineStore('step', () => {
    const steps: Step[] = [
        {
          id: 1,
          name: 'start',
          component: Start,
          next: 2,
        },
        {
          id: 2,
          name: 'user_count',
          component: UserCount,
          next: 3,
        },
        {
          id: 3,
          name: 'your_profile',
          component: YourProfile,
          next: 4,
        },
        {
          id: 4,
          name: 'your_goal',
          component: YourGoals,
        },
      ]

      const currentStepName = ref(useRoute().params.step || 'start')
      const currentStep = computed(() => steps.find(s => s.name === currentStepName.value))

      return {
        steps, 
        currentStepName, 
        currentStep,
      }
})