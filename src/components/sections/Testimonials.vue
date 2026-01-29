<script setup>
import { Quote, Star } from 'lucide-vue-next'

const testimonials = [
    {
        id: 1,
        text: "Cheguei ao consultório com crises de ansiedade constantes e sem entender os motivos. A Júlia me ajudou a identificar os gatilhos com muita sensibilidade. Hoje vivo com uma leveza que não sentia há anos.",
        author: "Mariana S.",
        category: "Ansiedade & Burnout",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop" 
    },
    {
        id: 2,
        text: "A terapia de casal foi um divisor de águas. Estávamos prestes a desistir, mas aprendemos a nos comunicar sem agressividade. O consultório se tornou nosso porto seguro semanal.",
        author: "Roberto & Lúcia",
        category: "Terapia de Casal",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
        id: 3,
        text: "Eu me sentia estagnada na carreira e na vida pessoal. O processo de autoconhecimento clareou minhas decisões. A abordagem da Júlia é acolhedora, mas muito assertiva quando precisa ser.",
        author: "Carla Menezes",
        category: "Autoconhecimento",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop"
    }
]
</script>

<template>
    <section id="depoimentos" class="py-24 bg-brand-primary text-white relative overflow-hidden">
        
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-dark/20 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div class="container mx-auto px-6 relative z-10">
            
            <div class="text-center mb-16">
                <span class="text-brand-dark bg-brand-light font-bold tracking-[0.2em] uppercase text-[10px] px-4 py-2 rounded-full shadow-sm">
                    Histórias Reais
                </span>
                <h2 class="font-display text-3xl md:text-4xl text-white mt-6">
                    Vidas <span class="relative inline-block">
                        transformadas
                        <svg class="absolute w-full h-2 bottom-1 left-0 text-brand-accent/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="4" fill="none" />
                        </svg>
                    </span>
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div 
                    v-for="item in testimonials" 
                    :key="item.id" 
                    class="bg-brand-dark/20 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-brand-accent/50 hover:bg-brand-dark/30 transition-all duration-500 group relative"
                >
                    <Quote class="absolute top-6 right-6 w-12 h-12 text-white/5 rotate-180" />

                    <div class="flex gap-1 mb-6">
                        <Star v-for="n in 5" :key="n" class="w-4 h-4 fill-brand-accent text-brand-accent" />
                    </div>
                    
                    <p class="font-body font-light text-base md:text-lg leading-relaxed mb-8 text-white/90 min-h-[120px]">
                        "{{ item.text }}"
                    </p>

                    <div class="flex items-center gap-4 pt-6 border-t border-white/10">
                        <img :src="item.image" :alt="item.author" class="w-12 h-12 rounded-full object-cover border-2 border-white/20 group-hover:border-brand-accent transition-colors">
                        
                        <div>
                            <p class="font-display text-lg text-white font-medium">{{ item.author }}</p>
                            <span class="text-xs font-bold text-brand-light/70 uppercase tracking-widest mt-1 block">
                                {{ item.category }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="md:hidden mt-8 text-center opacity-60 animate-pulse">
                 <p class="text-[10px] uppercase tracking-widest text-white">Deslize para ver mais</p>
            </div>

        </div>
    </section>
</template>