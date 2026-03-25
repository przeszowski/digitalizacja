<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()
const supabaseUrl = config.public.supabaseUrl
const supabaseAnonKey = config.public.supabaseAnonKey

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
})

const submitted = ref(false)
const loading = ref(false)
const errorMsg = ref('')

async function handleSubmit() {
  if (!form.name || !form.email) {
    errorMsg.value = 'Wypelnij wymagane pola: imie i email.'
    return
  }

  if (!supabase) {
    errorMsg.value = 'Formularz nie jest skonfigurowany. Sprawdz ustawienia Supabase.'
    return
  }

  errorMsg.value = ''
  loading.value = true

  try {
    const { error } = await supabase.from('kontakt').insert({
      imie: form.name,
      firma: form.company,
      email: form.email,
      telefon: form.phone,
      wiadomosc: form.message,
    })

    if (error) {
      throw error
    }

    submitted.value = true
  } catch (e: any) {
    errorMsg.value = e?.message || 'Cos poszlo nie tak. Sprobuj ponownie.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="kontakt" data-testid="section-contact" class="py-20 px-6 md:px-12">
    <div class="max-w-6xl mx-auto flex justify-center">
      <div class="reveal-scale w-full max-w-[560px] bg-white rounded-2xl p-10 shadow-card-lg">
        <div class="text-center mb-10">
          <h2 class="font-poppins text-[30px] text-brand-dark tracking-[-0.6px] mb-3">
            Skontaktuj sie z nami
          </h2>
          <p class="font-poppins text-[16px] text-brand-dark/80 leading-[1.6]">
            Kazda wspolprace zaczynamy od rozmowy i zrozumienia Twoich potrzeb. Napisz, jak mozemy pomoc.
          </p>
        </div>

        <div v-if="submitted" class="text-center py-10">
          <h3 class="font-poppins text-[20px] text-brand-dark font-semibold mb-2">
            Wiadomosc wyslana!
          </h3>
          <p class="font-poppins text-[15px] text-brand-gray-light">
            Odezwiemy sie do Ciebie wkrotce.
          </p>
        </div>

        <form v-else novalidate class="flex flex-col gap-4" @submit.prevent="handleSubmit">
          <div class="flex gap-4">
            <input
              v-model="form.name"
              type="text"
              placeholder="Imie *"
              autocomplete="given-name"
              class="flex-1 min-w-0 input-field"
            />
            <input
              v-model="form.company"
              type="text"
              placeholder="Firma"
              autocomplete="organization"
              class="flex-1 min-w-0 input-field"
            />
          </div>

          <input
            v-model="form.email"
            type="email"
            placeholder="Email *"
            autocomplete="email"
            class="w-full input-field"
          />

          <input
            v-model="form.phone"
            type="tel"
            placeholder="Telefon"
            autocomplete="tel"
            class="w-full input-field"
          />

          <textarea
            v-model="form.message"
            placeholder="Wiadomosc"
            rows="4"
            class="w-full input-field resize-none"
          />

          <p v-if="errorMsg" role="alert" class="font-poppins text-[13px] text-red-500">
            {{ errorMsg }}
          </p>

          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-brand-blue hover:bg-[#0860a0] disabled:opacity-60 disabled:cursor-not-allowed text-white font-poppins font-medium text-[15px] tracking-[-0.15px] py-[14px] rounded-[5px] transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <template v-if="loading">
              <svg class="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Wysylanie...
            </template>
            <template v-else>Wyslij</template>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.input-field {
  background: white;
  border-radius: 5px;
  padding: 12px 14px;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  color: #4c4c4c;
  outline: none;
  box-shadow: 0 0 27px 0 rgba(10, 114, 185, 0.14);
  transition: box-shadow 0.2s;
}

.input-field:focus {
  box-shadow: 0 0 0 2px rgba(10, 114, 185, 0.25);
}
</style>
