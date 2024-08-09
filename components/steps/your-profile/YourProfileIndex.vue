<script setup lang="ts">
import Options from '~/components/reusables/Options.vue'
import { options } from '~/components/steps/your-profile/options/data'
</script>

<template>
  <div class="flex flex-col w-full leading-6 text-black">
    <h2
      class="self-start mx-0 mt-5 mb-10 text-2xl font-bold leading-7 text-left lg:text-3xl text-zinc-800"
    >
      So we can get to know you better, tell us about your relationship status.
    </h2>
    <div
      class="flex-grow my-0 mx-auto w-full leading-6 text-center text-black"
      style="max-width: 708px"
    >
      <Options :options="options" />
    </div>
  </div>
</template>
