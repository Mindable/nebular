import type { stepResponse } from '~/types/app'
import { useEventBus } from '@vueuse/core'

export const useStepResponseStore = defineStore('stepResponse', () => {
  const { emit } = useEventBus<boolean>('navigate')
  const responses = ref<stepResponse[]>([])

  const stepStore = useStepStore()

  onMounted(() => {
    responses.value = getResponseFromLocalStorage()
  })
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

    storeResponseInLocalStorage()
    emit(true)
  }

  const storeResponseInLocalStorage = () => {
    localStorage.setItem('responses', JSON.stringify(responses.value))
  }

  const getResponseFromLocalStorage = (): stepResponse[] => {
    const response = localStorage.getItem('responses')
    return response ? (JSON.parse(response) as stepResponse[]) : []
  }

  const getLastResponseStepName = (): string | null => {
    const doneResponses = responses.value.filter(r => r.done)
    return doneResponses.length > 0
      ? doneResponses[doneResponses.length - 1].name
      : null
  }

  return {
    responses,
    updateResponse,
    storeResponseInLocalStorage,
    getResponseFromLocalStorage,
    getLastResponseStepName,
  }
})
