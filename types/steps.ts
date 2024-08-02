import type { Component } from 'vue'

export type Step = {
  id: number;
  name: string;
  component: Component;
  next?: number;
}

export type stepResponse = {
  id: number;
  name: string;
  response: any;
  done: boolean;
}