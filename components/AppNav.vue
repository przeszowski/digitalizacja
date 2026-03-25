<script setup lang="ts">
const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Czym jest Digitalizacja', accent: '360', href: '#czym-jest', testId: 'nav-czym-jest' },
  { label: 'Obszary Digitalizacji',   accent: '360', href: '#obszary',   testId: 'nav-obszary' },
  { label: 'O nas',                   accent: '',    href: '#o-nas',     testId: 'nav-o-nas' },
  { label: 'Kontakt',                 accent: '',    href: '#kontakt',   testId: 'nav-kontakt' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 30
}

function scrollTo(href: string) {
  mobileOpen.value = false
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <!-- Desktop floating pill nav -->
  <nav
    aria-label="Nawigacja główna"
    class="fixed left-1/2 -translate-x-1/2 z-50 transition-[top] duration-300 hidden md:block"
    :style="{ top: scrolled ? '12px' : '16px' }"
  >
    <div
      data-testid="nav-inner"
      class="flex items-center gap-6 px-6 py-[14px] rounded-full backdrop-blur-md font-poppins font-semibold text-[14px] text-[#4c4c4c] tracking-[-0.35px] whitespace-nowrap transition-all duration-300"
      :class="scrolled ? 'bg-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.12)]' : 'bg-white/40 shadow-[0_2px_12px_rgba(0,0,0,0.06)]'"
    >
      <button
        v-for="link in navLinks"
        :key="link.href"
        :data-testid="link.testId"
        class="hover:text-brand-blue transition-colors duration-200"
        @click="scrollTo(link.href)"
      >
        {{ link.label }}<span v-if="link.accent" class="text-brand-blue">{{ link.accent }}</span>
      </button>
    </div>
  </nav>

  <!-- Mobile hamburger -->
  <button
    data-testid="mobile-menu-toggle"
    aria-label="Otwórz menu"
    :aria-expanded="mobileOpen"
    class="fixed top-4 right-4 z-50 md:hidden bg-white/80 backdrop-blur-md rounded-full w-11 h-11 flex items-center justify-center shadow-card"
    @click="mobileOpen = !mobileOpen"
  >
    <span class="flex flex-col gap-[5px]" aria-hidden="true">
      <span class="block w-5 h-[2px] bg-brand-dark rounded-full transition-all duration-200" :class="mobileOpen ? 'rotate-45 translate-y-[7px]' : ''" />
      <span class="block w-5 h-[2px] bg-brand-dark rounded-full transition-all duration-200" :class="mobileOpen ? 'opacity-0' : ''" />
      <span class="block w-5 h-[2px] bg-brand-dark rounded-full transition-all duration-200" :class="mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''" />
    </span>
  </button>

  <!-- Mobile drawer -->
  <Transition name="slide-down">
    <div
      v-if="mobileOpen"
      data-testid="mobile-menu"
      class="fixed inset-x-4 top-16 z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-card-lg p-5 md:hidden"
    >
      <div class="flex flex-col gap-1">
        <button
          v-for="link in navLinks"
          :key="link.href"
          class="text-left font-poppins font-semibold text-[15px] text-[#4c4c4c] py-3 border-b border-gray-100 last:border-0 hover:text-brand-blue transition-colors"
          @click="scrollTo(link.href)"
        >
          {{ link.label }}<span v-if="link.accent" class="text-brand-blue">{{ link.accent }}</span>
        </button>
        <button
          class="mt-3 w-full bg-brand-blue text-white font-poppins font-medium text-[14px] py-3 rounded-full hover:bg-[#0860a0] transition-colors"
          @click="scrollTo('#kontakt')"
        >
          Skontaktuj się z nami ↗
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
