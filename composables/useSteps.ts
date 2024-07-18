import { stepData } from '~/data/stepData'

export const useSteps = (step: number) => {
  const steps = stepData
  const buildCurrentStep = (step: number) => {}

  return {
    buildCurrentStep,
  }
}
