# Digitalizacja360

Wizytówka firmy — one-page site zbudowany w Nuxt 3 + Tailwind CSS.

## Stack

- **Nuxt 3** — framework
- **Vue 3** — `<script setup>` + Composition API
- **Tailwind CSS** — stylowanie
- **Supabase** — baza danych dla formularza kontaktowego
- **Playwright** — testy E2E

---

## Uruchomienie lokalne

```bash
# 1. Zainstaluj zależności (tylko raz)
npm install

# 2. Skopiuj plik środowiskowy i uzupełnij dane Supabase
cp .env.example .env

# 3. Uruchom serwer deweloperski
npm run dev
```

Strona będzie dostępna pod adresem **http://localhost:3000**

---

## Konfiguracja formularza (Supabase)

1. Załóż projekt na [supabase.com](https://supabase.com)
2. W **Table Editor** utwórz tabelę `kontakt` z kolumnami:
   - `imie` (text)
   - `firma` (text)
   - `email` (text)
   - `telefon` (text)
   - `wiadomosc` (text)
3. Skopiuj klucze z **Settings → API**
4. Uzupełnij plik `.env`:

```env
NUXT_PUBLIC_SUPABASE_URL=https://twoj-projekt.supabase.co
NUXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
```

---

## Wideo

Umieść plik `video.mp4` w folderze `public/` — sekcja wideo załaduje go automatycznie.

---

## Testy E2E

```bash
# Zainstaluj przeglądarki Playwright (tylko raz)
npx playwright install

# Uruchom wszystkie testy (wymaga działającego npm run dev)
npm test

# Tryb interaktywny z podglądem
npm run test:ui

# Raport HTML po testach
npm run test:report
```

### Co testujemy

| Plik | Zakres |
|------|--------|
| `tests/page.spec.ts` | Tytuł, meta, h1, logo, CTA |
| `tests/sections.spec.ts` | Widoczność i treść wszystkich sekcji |
| `tests/navigation.spec.ts` | Desktop nav, mobile nav, smooth scroll |
| `tests/form.spec.ts` | Walidacja formularza, pola, aria |
| `tests/accessibility.spec.ts` | Brak poziomego scrolla, alt obrazów, id kotwic |

---

## Struktura projektu

```
├── components/
│   ├── AppNav.vue              # Floating pill nav + hamburger mobile
│   ├── AppFooter.vue
│   ├── BrandLogo.vue
│   ├── BrandIcon.vue
│   ├── ContactButton.vue
│   ├── SectionHero.vue
│   ├── SectionWhat.vue         # "Czym jest Digitalizacja360"
│   ├── SectionWhy.vue          # "Dlaczego warto?"
│   ├── SectionAreas.vue        # "Obszary"
│   ├── SectionRecommendations.vue
│   ├── SectionStages.vue
│   ├── SectionFunding.vue
│   ├── SectionLogos.vue
│   ├── SectionTeam.vue         # "O nas"
│   ├── SectionVideo.vue
│   ├── SectionWorkshop.vue
│   └── SectionContact.vue      # Formularz → Supabase
├── composables/
│   └── useScrollReveal.ts      # IntersectionObserver dla animacji
├── pages/
│   └── index.vue
├── public/
│   ├── images/
│   └── video.mp4               # (dodaj samodzielnie)
├── tests/
│   ├── page.spec.ts
│   ├── sections.spec.ts
│   ├── navigation.spec.ts
│   ├── form.spec.ts
│   └── accessibility.spec.ts
├── assets/css/main.css         # Animacje scroll reveal
├── .env.example
├── nuxt.config.ts
├── playwright.config.ts
└── tailwind.config.js
```
