import type { stepResponse } from "~/types/steps"

const stepStore = useStepStore();
export const useStepResponseStore = defineStore('stepResponse', () => {
    const responses = ref<stepResponse[]>([
        {
            id: 1,
            name: 'start',
            response: null,
            done: false,
        }
    ])

    const currentResponseObject = computed(() => {
        let responseObject = responses.value.find(r => r.name === stepStore.currentStepName);
        if (!responseObject) {
            const currentStep = stepStore.currentStep;
            if (currentStep) {
                responseObject = {
                    id: currentStep.id,
                    name: currentStep.name,
                    response: null,
                    done: false,
                };
                responses.value.push(responseObject);
            }
        }

        return responseObject;
    })

    return {
        responses,
        currentResponseObject,
    }
}) 
