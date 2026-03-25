<script setup lang="ts">
const items = [
  { num: '01', text: 'Warsztaty prowadzone bezpośrednio w firmie klienta, oparte na analizie procesów, technologii i realnych wyzwań organizacji.' },
  { num: '02', text: 'Konkretne rekomendacje wynikające z warsztatów, jasno wskazujące obszary do zmiany, optymalizacji lub dalszego rozwoju.' },
  { num: '03', text: 'Projektowanie interfejsów aplikacji oraz architektury środowiska IT.' },
  { num: '04', text: 'Długoterminowy plan digitalizacji firmy, porządkujący działania w spójną roadmapę rozwoju technologicznego i organizacyjnego.' },
  { num: '05', text: 'Realizacja zaplanowanych działań w etapach, dostosowanych do możliwości czasowych, budżetowych i operacyjnych firmy.' },
  { num: '06', text: 'Wsparcie w pozyskaniu środków na digitalizację, w tym dofinansowań i programów wspierających rozwój technologiczny.' },
  { num: '07', text: 'Pomoc zespołu AGH i partnerów Digitalizacja360 w doborze rozwiązań, wdrożeniu oraz dalszym rozwoju firmy.', hasImage: true },
]
</script>

<template>
  <section id="czym-jest" data-testid="section-what" class="py-20 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        <div class="flex-1 min-w-0">
          <div class="border-t border-[#e9e9e9] mb-10" />

          <h2 class="reveal font-poppins text-[clamp(36px,5vw,54px)] text-black tracking-[-1.6px] leading-none mb-8">
            Czym jest Digitalizacja<span class="text-brand-blue">360</span>?
          </h2>

          <p class="reveal font-poppins text-[15px] leading-[1.6] text-[#4c4c4c] mb-6">
            <span class="text-brand-dark">Digitalizacja</span><span class="text-brand-blue">360</span>
            to proces kompleksowej transformacji firmy, realizowany w formie warsztatów prowadzonych przez doświadczonych praktyków biznesu i technologii.
            Pomagamy firmom uporządkować procesy, technologie i decyzje, tworząc jasny plan digitalizacji dopasowany do realnych potrzeb organizacji.
            Łączymy strategię, IT, dane i automatyzację w jeden spójny model rozwoju.
          </p>

          <p class="reveal font-poppins text-[15px] leading-[1.6] text-[#4c4c4c] mb-8">
            Co obejmuje <span class="text-brand-dark">Digitalizacja</span><span class="text-brand-blue">360:</span>
          </p>

          <ul class="stagger flex flex-col">
            <li
              v-for="item in items"
              :key="item.num"
              class="reveal flex gap-8 items-start border-t border-[#e9e9e9] py-4"
            >
              <span class="font-poppins font-bold text-[15px] text-[#4c4c4c] shrink-0 w-8">{{ item.num }}</span>
              <div class="flex-1 flex items-start justify-between gap-4">
                <p class="font-poppins text-[15px] leading-[1.6] text-black">{{ item.text }}</p>
                <img
                  v-if="item.hasImage"
                  src="/images/agh-logo.png"
                  alt="AGH – partner Digitalizacja360"
                  class="w-16 h-auto shrink-0 object-contain"
                  loading="lazy"
                />
              </div>
            </li>
          </ul>
        </div>

        <div class="reveal-right lg:w-80 xl:w-96 shrink-0 self-stretch">
          <div class="relative rounded-xl overflow-hidden h-full min-h-[400px] lg:min-h-[600px]">
            <img
              src="/images/quote-bg.png"
              alt=""
              class="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              aria-hidden="true"
            />
            <div class="absolute inset-0 flex items-end justify-center p-8">
              <blockquote class="text-center font-poppins text-[15px] leading-[1.6] text-[#30363d]">
                „<span class="font-semibold text-brand-blue">Plan na jeden spójny system</span>
                z główną bazą danych zintegrowany z zewnętrznymi aplikacjami w bezpiecznym środowisku"
              </blockquote>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
