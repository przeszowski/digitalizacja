<template>
  <header data-testid="section-hero" class="relative pt-28 pb-16 px-6 md:px-12 overflow-hidden">
    <div class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" aria-hidden="true" />

    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between mb-10">
        <BrandLogo />
        <ContactButton />
      </div>

      <div class="reveal">
        <h1 class="font-poppins font-normal leading-none tracking-[-4px] text-[clamp(56px,9vw,120px)] text-brand-dark mb-6">
          Digitalizacja<span class="text-brand-blue">360</span>
        </h1>
        <p class="font-poppins text-[clamp(20px,2.5vw,32px)] text-[#4c4c4c] tracking-[-0.5px] leading-snug max-w-3xl">
          Zbuduj przyszłość firmy i zyskaj przewagę nad konkurencją
        </p>
      </div>

      <div class="reveal mt-12 flex justify-center">
        <img
          src="/images/laptop-diagram.png"
          alt="Digitalizacja360 – schemat systemu zarządzania firmą"
          class="w-full max-w-4xl h-auto object-contain drop-shadow-2xl"
          loading="eager"
          width="900"
          height="600"
        />
      </div>
    </div>
  </header>
</template>
