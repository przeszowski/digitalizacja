<script setup lang="ts">
const areas = [
  {
    title: 'Marketing i pozyskiwanie leadów',
    desc: 'Analizujemy działania marketingowe i źródła leadów, a następnie wskazujemy konkretne usprawnienia zwiększające liczbę i jakość zapytań. Pomagamy uporządkować proces od pierwszego kontaktu do przekazania leada do sprzedaży.',
  },
  {
    title: 'Sprzedaż i obsługa klienta (CRM)',
    desc: 'Sprawdzamy proces sprzedaży i wykorzystanie systemów CRM, a następnie proponujemy usprawnienia poprawiające obsługę klientów i kontrolę nad lejkiem sprzedaży. Celem jest szybsza reakcja i większa skuteczność zespołu.',
  },
  {
    title: 'Systemy dedykowane, ERP i integracje',
    desc: 'Analizujemy działanie systemów ERP i rozwiązań dedykowanych oraz ich integracje. Wskazujemy usprawnienia w przepływie danych i procesach, które zwiększają efektywność operacyjną.',
  },
  {
    title: 'Sklepy internetowe i strony WWW',
    desc: 'Oceniamy strony i sklepy internetowe pod kątem sprzedaży, marketingu i integracji z systemami. Proponujemy usprawnienia, które realnie wspierają pozyskiwanie klientów i automatyzację obsługi zamówień.',
  },
  {
    title: 'Outsourcing IT, helpdesk i infrastruktura',
    desc: 'Analizujemy sposób obsługi IT oraz współpracę z dostawcami zewnętrznymi. Pomagamy usprawnić wsparcie techniczne, stabilność systemów i bezpieczeństwo infrastruktury.',
  },
  {
    title: 'Nowe technologie i AI',
    desc: 'Badamy potencjał wykorzystania automatyzacji i AI w codziennej pracy firmy. Wskazujemy konkretne usprawnienia, które odciążają zespoły i przyspieszają realizację procesów.',
  },
]
</script>

<template>
  <section id="obszary" data-testid="section-areas" class="py-16 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <h2 class="reveal font-poppins text-[clamp(36px,5vw,54px)] text-brand-dark tracking-[-1.6px] leading-[0.9] mb-10 pl-2">
        Obszary Digitalizacji<span class="text-brand-blue">360</span>
      </h2>

      <div class="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="area in areas"
          :key="area.title"
          class="reveal card-hover bg-white rounded-xl p-10 flex flex-col gap-6 items-center text-center shadow-card"
        >
          <BrandIcon />
          <div class="flex flex-col gap-4">
            <h3 class="font-poppins text-[18px] text-black tracking-[-0.5px] leading-tight">{{ area.title }}</h3>
            <p class="font-poppins text-[15px] text-[#4c4c4c] leading-[1.6] tracking-[-0.075px]">{{ area.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
