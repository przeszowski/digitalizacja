<script setup lang="ts">
const cards = [
  {
    title: 'Wsparcie w doborze odpowiednich form finansowania',
    desc: 'Pomagamy dobrać formę finansowania dopasowaną do planu digitalizacji i sytuacji firmy. Dzięki temu nie tracisz czasu na rozwiązania, które nie pasują do Twojego etapu rozwoju. Decyzje są szybsze i bezpieczniejsze.',
  },
  {
    title: 'Pomoc w przygotowaniu materiałów i prezentacji',
    desc: 'Wspieramy w przygotowaniu prezentacji, opisów i materiałów wymaganych przy pozyskiwaniu środków. Dzięki temu komunikacja jest jasna, spójna i oparta na konkretnym planie działań. Zwiększa to wiarygodność projektu.',
  },
  {
    title: 'Większe szanse na uzyskanie środków na rozwój',
    desc: 'Dobrze przygotowany plan digitalizacji znacząco zwiększa szanse na uzyskanie finansowania. Pokazujesz nie tylko pomysł, ale przemyślaną drogę realizacji. To realnie wpływa na decyzje po stronie finansującej.',
  },
]
</script>

<template>
  <section data-testid="section-funding" class="py-16 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <h2 class="reveal font-poppins text-[clamp(32px,4.5vw,54px)] text-brand-dark tracking-[-1.6px] leading-[0.9] mb-10 pl-2">
        Wsparcie w pozyskaniu środków<br class="hidden md:block"> na digitalizację
      </h2>

      <div class="stagger grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          v-for="card in cards"
          :key="card.title"
          class="reveal card-hover bg-white rounded-xl p-10 flex flex-col gap-6 items-center text-center shadow-card"
        >
          <BrandIcon />
          <div class="flex flex-col gap-4">
            <h3 class="font-poppins text-[18px] text-black tracking-[-0.5px] leading-tight">{{ card.title }}</h3>
            <p class="font-poppins text-[15px] text-[#4c4c4c] leading-[1.6] tracking-[-0.075px]">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
