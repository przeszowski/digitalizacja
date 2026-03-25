<script setup lang="ts">
const features = [
  '2–4 miesiące pracy kilkuosobowego zespołu,',
  'wizja lokalna 1–3 razy,',
  'przegląd procesów w firmie,',
  'przegląd infrastruktury,',
  'rekomendacje i długoterminowy plan rozwoju,',
  '15 szczegółowych makiet MVP globalnego systemu.',
]
</script>

<template>
  <section data-testid="section-workshop" class="py-20 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-12 items-center">

        <div class="reveal-left flex-1 min-w-0">
          <h2 class="font-poppins text-[clamp(32px,4.5vw,54px)] text-brand-dark tracking-[-1.6px] leading-tight mb-8">
            Warsztat Digitalizacja<span class="text-brand-blue">360</span>
          </h2>

          <div class="font-poppins text-[16px] leading-[1.6] text-brand-gray-light mb-8 space-y-1">
            <p>Cena: <span class="text-brand-dark font-medium">12 000 – 24 000 PLN</span></p>
            <p>Forma: <span class="text-brand-dark font-medium">stacjonarnie / online / hybrydowo</span></p>
            <p>Czas trwania: <span class="text-brand-dark font-medium">ustalany indywidualnie</span></p>
          </div>

          <p class="font-poppins text-[16px] leading-[1.6] text-brand-gray-light mb-6">Cena obejmuje:</p>

          <ul class="flex flex-col gap-4 mb-10">
            <li v-for="feat in features" :key="feat" class="flex items-start gap-3">
              <BrandIcon />
              <p class="font-poppins text-[15px] leading-[1.45] text-brand-gray-light">{{ feat }}</p>
            </li>
          </ul>

          <ContactButton />
        </div>

        <div class="reveal-right shrink-0 w-full lg:w-[434px]">
          <div class="rounded-xl overflow-hidden h-[400px] lg:h-[441px]">
            <img
              src="/images/warsztat.png"
              alt="Warsztat Digitalizacja360"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
