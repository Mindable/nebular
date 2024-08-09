<script setup lang="ts">
const stepData = useStepStore()

const maxGroupFromSteps = computed(
  () => stepData.steps[stepData.steps.length - 1].stepperGroup,
)
const currentGroupFromSteps = computed(
  () => stepData.currentStep?.stepperGroup || 1,
)
</script>
<template>
  <div>
    <ol class="flex items-center w-full !text-xs">
      <li
        v-for="number in maxGroupFromSteps"
        :key="number"
        class="flex items-center"
        :class="{
          'dark:after:border-blue-800 after:border-[#e4daf2] text-[#593b9a] dark:text-[#593b9a]':
            currentGroupFromSteps === number,
          'dark:after:border-gray-700 after:border-gray-100':
            currentGroupFromSteps !== number,
          'w-full after:content-[\'\'] after:w-full after:h-1 after:border-b after:border-4 after:inline-block':
            number !== maxGroupFromSteps,
        }"
      >
        <span
          class="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full lg:h-5 lg:w-5 dark:bg-blue-800 shrink-0"
          :class="{
            '!dark:bg-gray-700 !bg-gray-100': currentGroupFromSteps !== number,
          }"
        >
          {{ number }}
        </span>
      </li>
    </ol>
    <p
      class="relative mx-0 mt-1 mb-5 text-sm leading-5 text-center text-indigo-400"
    >
      Your profile
    </p>
  </div>
</template>
