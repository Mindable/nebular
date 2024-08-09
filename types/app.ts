import type { Component } from 'vue'

export type Step = {
  id: number
  name: string
  component: Component
  stepperGroup: number
  options?: Component[]
  showStepper?: boolean
  next?: number
}

export type stepResponse = {
  id: number
  name: string
  response: any
  done: boolean
}

export type option = {
  value?: any
  label?: string
  image?: string
}
