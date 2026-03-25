<script setup lang="ts">
const features = [
  'szybszy zwrot z inwestycji,',
  'pełną kontrolę nad zakresem i budżetem,',
  'mniejsze ryzyko błędnych decyzji,',
  'możliwość rozwoju systemu wraz z firmą.',
]
</script>

<template>
  <section data-testid="section-stages" class="py-20 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col-reverse lg:flex-row gap-12 items-center">

        <div class="reveal-left shrink-0 w-full lg:w-[431px]">
          <div class="rounded-xl overflow-hidden h-[400px] lg:h-[489px]">
            <img
              src="/images/praca-w-etapach.png"
              alt="Praca w etapach – wdrożenie digitalizacji"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div class="reveal-right flex-1 min-w-0">
          <h2 class="font-poppins text-[clamp(32px,4.5vw,54px)] text-black tracking-[-1.6px] leading-tight mb-8">
            Praca w etapach<br>to oszczędność finansowa
          </h2>
          <p class="font-poppins text-[16px] leading-[1.6] text-brand-gray-light mb-2">
            Działania wdrażane są etapami, dzięki czemu system zaczyna przynosić korzyści możliwie najszybciej, bez dużych jednorazowych kosztów. Każdy etap ma jasno określony cel i mierzalny efekt biznesowy.
          </p>
          <p class="font-poppins text-[16px] leading-[1.6] text-brand-gray-light mb-8">Co to daje firmie:</p>

          <ul class="flex flex-col gap-4">
            <li v-for="feat in features" :key="feat" class="flex items-start gap-3">
              <BrandIcon />
              <p class="font-poppins text-[15px] leading-[1.45] text-brand-gray-light">{{ feat }}</p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>
