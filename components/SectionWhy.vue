<script setup lang="ts">
const cards = [
  {
    title: 'Zyskaj czas',
    desc: 'Czy Tobie lub Twoim managerom brakuje czasu, by dopilnować wszystkiego w firmie? Pomożemy Ci usprawnić procesy, byś mógł skupić się na rozwoju strategicznym.',
  },
  {
    title: 'Podnieś wydajność',
    desc: 'Czy chciałbyś podnieść efektywność swojej firmy i stworzyć automatyzacje, które generują konkretne zyski i/lub oszczędności?',
  },
  {
    title: 'Kontroluj firmę i podnieś bezpieczeństwo',
    desc: 'Czy chciałbyś całą firmą sterować z poziomu telefonu komórkowego z dowolnego miejsca na ziemi i być na bieżąco z tym co się aktualnie dzieje?',
  },
]
</script>

<template>
  <section data-testid="section-why" class="py-16 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <h2 class="reveal font-poppins text-[clamp(36px,5vw,54px)] text-black tracking-[-1.6px] leading-[0.9] mb-10 pl-2">
        Dlaczego warto?
      </h2>

      <div class="stagger grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          v-for="card in cards"
          :key="card.title"
          class="reveal card-hover bg-white rounded-xl p-10 flex flex-col gap-6 items-center text-center border border-[#e9e9e9]"
        >
          <BrandIcon />
          <div class="flex flex-col gap-5">
            <h3 class="font-poppins text-[18px] text-black tracking-[-0.5px] leading-tight">{{ card.title }}</h3>
            <p class="font-poppins text-[15px] text-[#4c4c4c] leading-[1.6] tracking-[-0.075px]">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
