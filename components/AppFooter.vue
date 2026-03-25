<template>
  <footer class="border-t border-black/10 py-10 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row gap-10 md:gap-20 items-start">

        <!-- Brand -->
        <div class="flex flex-col gap-4 flex-1 min-w-0">
          <BrandLogo />
          <p class="font-poppins font-medium text-[16px] text-black/55 leading-[1.45] max-w-xs">
            Analiza, usprawnianie i tworzenie rozwiązań cyfrowych dla firm.
          </p>
        </div>

        <!-- Contacts + Partners -->
        <div class="flex flex-wrap gap-8 md:gap-12 shrink-0">

          <!-- Kamil -->
          <div class="flex flex-col gap-2">
            <p class="font-poppins font-semibold text-[16px] text-black pb-2 border-b border-[#e9e9e9] w-full">Kamil Kaczmarczyk</p>
            <a href="tel:+48508786884" class="font-poppins font-medium text-[16px] text-black/55 hover:text-brand-blue transition-colors">+48 508 786 884</a>
            <a href="mailto:k.kaczmarczyk@k-development.pl" class="font-poppins font-medium text-[16px] text-black/55 hover:text-brand-blue transition-colors">k.kaczmarczyk@k-development.pl</a>
          </div>

          <!-- Sebastian -->
          <div class="flex flex-col gap-2">
            <p class="font-poppins font-semibold text-[16px] text-black pb-2 border-b border-[#e9e9e9] w-full">Sebastian Barnaś</p>
            <a href="tel:+48516052772" class="font-poppins font-medium text-[16px] text-black/55 hover:text-brand-blue transition-colors">+48 516 052 772</a>
            <a href="mailto:biuro@technopartner.pl" class="font-poppins font-medium text-[16px] text-black/55 hover:text-brand-blue transition-colors">biuro@technopartner.pl</a>
          </div>

          <!-- Partners -->
          <div class="flex flex-col gap-2">
            <p class="font-poppins font-semibold text-[16px] text-black pb-2 border-b border-[#e9e9e9] w-full">Partnerzy</p>
            <a href="https://www.k-development.pl/" target="_blank" rel="noopener noreferrer" class="font-poppins font-medium text-[16px] text-black/55 hover:text-brand-blue transition-colors">K-development</a>
            <a href="https://technopartner.pl/" target="_blank" rel="noopener noreferrer" class="font-poppins font-medium text-[16px] text-black/55 hover:text-brand-blue transition-colors">Technopartner</a>
            <a href="https://www.agh.edu.pl/" target="_blank" rel="noopener noreferrer" class="font-poppins font-medium text-[16px] text-black/55 hover:text-brand-blue transition-colors">AGH</a>
          </div>

        </div>
      </div>

      <p class="mt-10 font-poppins text-[13px] text-black/30 text-center">
        © {{ new Date().getFullYear() }} Digitalizacja360. Wszelkie prawa zastrzeżone.
      </p>
    </div>
  </footer>
</template>
