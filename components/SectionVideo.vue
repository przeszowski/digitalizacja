<template>
  <section class="py-20 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <h2 class="reveal font-poppins text-[clamp(32px,4.5vw,54px)] text-brand-dark tracking-[-1.6px] leading-[0.9] mb-12">
        Zobacz, co mówią nasi partnerzy
      </h2>

      <div class="reveal-scale">
        <video
          class="w-full rounded-3xl shadow-video bg-black"
          style="max-height: 684px"
          controls
          playsinline
          preload="metadata"
        >
          <!-- Używamy zasobu publicznego testowego, żeby build nie zależał od lokalnego pliku -->
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          Twoja przeglądarka nie obsługuje odtwarzacza wideo.
        </video>
      </div>
    </div>
  </section>
</template>
