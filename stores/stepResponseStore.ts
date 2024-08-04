import type { stepResponse } from '~/types/steps'
import { useEventBus } from '@vueuse/core'

export const useStepResponseStore = defineStore('stepResponse', () => {
  const { emit } = useEventBus<boolean>('navigate')
  const responses = ref<stepResponse[]>([])

  const stepStore = useStepStore()
  const updateResponse = (step: string, response: any) => {
    const hasResponse = responses.value.findIndex(r => r.name == step)
    if (hasResponse < 0) {
      const foundCurrentStep = stepStore.steps.find(s => s.name == step)
      if (
        foundCurrentStep &&
        foundCurrentStep.name == stepStore.currentStepName
      ) {
        const currentResponse = {
          id: foundCurrentStep.id,
          name: foundCurrentStep.name,
          response: response,
          done: true,
        }
        responses.value.push(currentResponse)
        responses.value.sort((a, b) => a.id - b.id)
      } else {
        return
      }
    } else {
      responses.value[hasResponse].response = response
      responses.value[hasResponse].done = true
    }
    emit(true)
  }

  return {
    responses,
    updateResponse,
  }
})
