import type { option } from '~/types/app'

export const options: option[] = [
  {
    label: 'Single',
    value: 'single',
    image: '/red-heart.png',
  },
  {
    label: 'In a relationship',
    value: 'in_relationship',
    image: '/two-hearts.png',
  },
  {
    label: 'Married',
    value: 'married',
    image: '/ring.png',
  },
  {
    label: 'Complicated',
    value: 'complicated',
    image: '/broken_heart.png',
  },
  {
    label: 'Unsure / Other',
    value: 'unsure_other',
    image: '/thinking_face.png',
  },
]
