import { StepsOne, StepsThree, StepsTwo } from '#build/components'

export const stepData = [
  {
    id: 1,
    name: 'start',
    component: StepsOne,
    nextSteps: {
      male: 2,
      female: 2,
    },
  },
  {
    id: 2,
    name: 'segway_one',
    component: StepsTwo,
    nextSteps: {
      next: 3,
    },
  },
  {
    id: 3,
    name: 'relationship',
    component: StepsThree,
    nextSteps: {
      next: 4,
    },
  },
  {
    id: 4,
    name: 'goal',
    component: StepsThree,
    nextSteps: {
      next: 4,
    },
  },
]
