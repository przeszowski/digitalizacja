<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'pl' },
})

const { initReveal } = useScrollReveal()
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = initReveal()
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="bg-white min-h-screen overflow-x-hidden">
    <AppNav />

    <main id="main-content">
      <SectionHero />
      <SectionWhat />
      <SectionWhy />
      <SectionAreas />
      <SectionRecommendations />
      <SectionStages />
      <SectionFunding />
      <SectionLogos />
      <SectionTeam />
      <SectionVideo />
      <SectionWorkshop />
      <SectionContact />
    </main>

    <AppFooter />
  </div>
</template>
