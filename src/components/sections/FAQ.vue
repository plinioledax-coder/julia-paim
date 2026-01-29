<script setup>
import { ref } from 'vue'
import { Plus, Minus, HelpCircle } from 'lucide-vue-next'

// Estado para controlar qual pergunta está aberta
const openIndex = ref(0) // A primeira já começa aberta

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const faqs = [
  {
    question: 'Como funciona a primeira sessão?',
    answer: 'A primeira sessão é um momento de acolhimento e conhecimento mútuo. É onde você poderá compartilhar o que te trouxe à terapia e eu poderei explicar como meu trabalho pode te ajudar. Não há roteiro rígido, é uma conversa fluida e sem julgamentos.'
  },
  {
    question: 'Você atende por convênio/plano de saúde?',
    answer: 'Atuo exclusivamente na modalidade particular para garantir a qualidade e a personalização do atendimento. No entanto, emito recibo para que você possa solicitar o reembolso junto ao seu plano de saúde (verifique as regras do seu convênio).'
  },
  {
    question: 'Qual a diferença entre atendimento Online e Presencial?',
    answer: 'A eficácia é a mesma. O online oferece praticidade e conforto para quem tem rotina corrida ou mora em outras cidades. O presencial oferece a experiência do ambiente físico do consultório. A escolha depende unicamente da sua preferência e disponibilidade.'
  },
  {
    question: 'Qual a duração e frequência das sessões?',
    answer: 'As sessões têm duração de 50 minutos e, geralmente, ocorrem uma vez por semana. A frequência pode ser ajustada conforme a necessidade clínica e o momento do tratamento.'
  }
]
</script>

<template>
  <section id="faq" class="py-24 bg-white relative overflow-hidden">
    
    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px]"></div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        <div class="lg:col-span-4 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-light rounded-full border border-brand-primary/10">
            <HelpCircle class="w-4 h-4 text-brand-primary" />
            <span class="text-xs font-bold uppercase tracking-widest text-brand-dark">Dúvidas Comuns</span>
          </div>

          <h2 class="font-display text-3xl md:text-4xl text-brand-dark leading-tight">
            Entenda como funciona o <span class="text-brand-primary">processo terapêutico</span>.
          </h2>

          <p class="font-body text-gray-500 font-light leading-relaxed">
            Iniciar a terapia é um passo importante. Aqui estão as respostas para as perguntas que recebo com mais frequência.
          </p>
          
          <a href="#contato" class="inline-block mt-4 text-sm font-bold text-brand-accent hover:text-brand-dark transition-colors uppercase tracking-widest border-b border-brand-accent pb-1">
            Tenho outra dúvida
          </a>
        </div>

        <div class="lg:col-span-8">
          <div class="space-y-4">
            
            <div 
              v-for="(item, index) in faqs" 
              :key="index"
              class="border border-gray-100 rounded-2xl bg-brand-light/30 overflow-hidden transition-all duration-300 hover:border-brand-primary/20"
              :class="openIndex === index ? 'bg-white shadow-lg shadow-brand-dark/5 border-brand-primary/10' : ''"
            >
              <button 
                @click="toggle(index)"
                class="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none"
              >
                <span class="font-display text-lg md:text-xl text-brand-dark font-medium pr-8">
                  {{ item.question }}
                </span>
                
                <span class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                  :class="openIndex === index ? 'bg-brand-primary text-white' : 'bg-brand-dark/5 text-brand-dark'">
                  <Minus v-if="openIndex === index" class="w-4 h-4" />
                  <Plus v-else class="w-4 h-4" />
                </span>
              </button>

              <div 
                class="grid transition-all duration-300 ease-in-out"
                :class="openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-8 px-8' : 'grid-rows-[0fr] opacity-0 pb-0 px-8'"
              >
                <div class="overflow-hidden">
                  <p class="font-body text-gray-500 font-light leading-relaxed text-base border-t border-brand-dark/5 pt-4">
                    {{ item.answer }}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>