<script setup lang="ts">
const features = [
  'klarowne rekomendacje zamiast ogólnych wniosków,',
  'plan działań dopasowany do możliwości firmy,',
  'priorytety, które realnie wpływają na efektywność,',
  'podstawę do bezpiecznych decyzji technologicznych i finansowych.',
]
</script>

<template>
  <section data-testid="section-recommendations" class="py-20 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-12 items-center">

        <div class="reveal-left flex-1 min-w-0">
          <h2 class="font-poppins text-[clamp(32px,4.5vw,54px)] text-black tracking-[-1.6px] leading-tight mb-8">
            Rekomendacje<br>i jasny plan działania
          </h2>
          <p class="font-poppins text-[16px] leading-[1.6] text-brand-gray-light mb-2">
            Po warsztatach otrzymujesz konkretne rekomendacje oraz spójny plan digitalizacji, który porządkuje decyzje i eliminuje przypadkowe inwestycje. Wiesz dokładnie, co robić dalej, w jakiej kolejności i z jakim celem biznesowym.
          </p>
          <p class="font-poppins text-[16px] leading-[1.6] text-brand-gray-light mb-8">Co zyskujesz:</p>

          <ul class="flex flex-col gap-4">
            <li v-for="feat in features" :key="feat" class="flex items-start gap-3">
              <BrandIcon />
              <p class="font-poppins text-[15px] leading-[1.45] text-brand-gray-light">{{ feat }}</p>
            </li>
          </ul>
        </div>

        <div class="reveal-right shrink-0 w-full lg:w-[447px]">
          <div class="rounded-xl overflow-hidden h-[400px] lg:h-[472px]">
            <img
              src="/images/plan-dzialan.png"
              alt="Rekomendacje i plan działania"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
