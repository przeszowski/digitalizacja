<script setup lang="ts">
const members = [
  {
    img: '/images/kamil-kaczmarczyk.png',
    name: 'Kamil Kaczmarczyk',
    bio: 'Praktyk biznesowy i strateg digitalizacji, który od lat wspiera firmy w porządkowaniu procesów i podejmowaniu trafnych decyzji technologicznych. Skupia się na realnych efektach biznesowych, optymalizacji kosztów oraz budowaniu planów rozwoju, które mają sens operacyjny.',
  },
  {
    img: '/images/sebastian-barnas.png',
    name: 'Sebastian Barnaś',
    bio: 'Ekspert w obszarze infrastruktury IT, cyberbezpieczeństwa i stabilnych środowisk technologicznych. Odpowiada za bezpieczeństwo danych, niezawodność systemów oraz solidne fundamenty techniczne, na których firmy mogą bezpiecznie się rozwijać.',
  },
]
</script>

<template>
  <section id="o-nas" data-testid="section-team" class="py-20 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">

      <div class="reveal mb-16 max-w-3xl">
        <h2 class="font-poppins text-[clamp(32px,4.5vw,54px)] text-brand-dark tracking-[-1.6px] leading-tight mb-6">
          Doświadczenie, które pracuje na Twój biznes
        </h2>
        <p class="font-poppins text-[16px] leading-[1.6] text-brand-gray-light">
          Digitalizacja360 tworzą doświadczeni praktycy biznesu i technologii, którzy łączą strategię, procesy i IT w jeden spójny model rozwoju firmy. Dzięki temu digitalizacja nie jest eksperymentem, ale świadomą decyzją opartą na wiedzy i doświadczeniu.
        </p>
      </div>

      <div class="stagger grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto">
        <div v-for="member in members" :key="member.name" class="reveal flex flex-col gap-8">
          <div class="aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              :src="member.img"
              :alt="member.name"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div>
            <h3 class="font-poppins text-[24px] font-normal text-black tracking-[-0.5px] mb-2">{{ member.name }}</h3>
            <p class="font-poppins text-[16px] leading-[1.5] text-[rgba(0,0,0,0.55)] tracking-[-0.08px]">{{ member.bio }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
