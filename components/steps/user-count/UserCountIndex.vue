<script setup lang="ts">
import Continue from '~/components/steps/user-count/options/Continue.vue'
</script>

<template>
  <div class="mt-8 h-[90%]">
    <div
      class="rounded-lg border border-[#9974f680] bg-[#eae2f2] py-[28px] px-[12px]"
    >
      <h2
        class="text-[28px] font-[700] leading-[38px] text-[#6a3aa2] text-center"
      >
        42+ million people
      </h2>
      <p class="text-center">already use Astrology Answers</p>
      <div
        class="flex flex-col items-center justify-center text-center bg-[#fbfbff] rounded-lg p-[24px] [@applyy_p-[21px_28px]] w-full mt-[24px] mb-[32px]"
      >
        <NuxtImg
          alt="Quotes"
          src="/svgs/quotes.svg"
          class="mx-auto w-[16px] md:w-[16px] lg:w-[16px] mb-6"
        />
        <p>
          Astrology Answers aims to illuminate interpersonal connections using
          astrological signs
        </p>
        <NuxtImg
          alt="Quotes"
          src="/new-york-times.webp"
          class="mx-auto w-[134px] md:w-[19px] lg:w-[19px] mt-6"
        />
      </div>
      <p
        class="text-[12px] font-[5 00] leading-[18px] text-[#201f1f] mb-[16px] text-center"
      >
        MENTIONED IN
      </p>
      <NuxtImg
        src="/partners.webp"
        class="mx-auto w-[304px] md:w-[156px] lg:w-[180px]"
      />
    </div>

    <Continue />

    <p
      class="mx-[30px] font-[400] text-[12px] text-center text-gray-500 leading-[18px]"
    >
      Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012, Nicosia, Cyprus
    </p>
  </div>
</template>
