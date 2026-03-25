<script setup lang="ts">
function scrollToContact() {
  document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <button
    class="inline-flex items-center gap-1.5 bg-brand-blue hover:bg-[#0860a0] active:bg-[#074f8a] transition-colors duration-200 rounded-full px-[22px] py-[14px] text-white font-poppins font-medium text-[14px] tracking-[-0.35px] whitespace-nowrap"
    @click="scrollToContact"
  >
    Skontaktuj się z nami
    <svg width="6" height="7" viewBox="0 0 6 6.01131" fill="none" aria-hidden="true">
      <path d="M5.01037 4.9934V1.05184L5.64939 1.09142L0.735155 6.01131L0 5.27615L4.91423 0.361923L4.96513 1.00094H1.0066V0L6 0.0113101V4.9934H5.01037Z" fill="white"/>
    </svg>
  </button>
</template>
