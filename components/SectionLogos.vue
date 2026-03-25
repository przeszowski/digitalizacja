<script setup lang="ts">
const logos = [
  { src: '/images/partner-1.png', alt: 'Partner' },
  { src: '/images/partner-2.png', alt: 'Partner' },
  { src: '/images/partner-3.png', alt: 'Partner' },
  { src: '/images/partner-4.png', alt: 'Partner' },
  { src: '/images/partner-5.png', alt: 'Partner' },
  { src: '/images/partner-6.png', alt: 'Partner' },
]
</script>

<template>
  <section data-testid="section-logos" class="py-12 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="reveal flex flex-wrap items-center justify-center gap-6 md:gap-10">
        <div
          v-for="(logo, i) in logos"
          :key="i"
          class="w-[120px] h-[60px] flex items-center justify-center opacity-50 hover:opacity-80 transition-opacity duration-300"
        >
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="max-w-full max-h-full object-contain mix-blend-multiply"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
