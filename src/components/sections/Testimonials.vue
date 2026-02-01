<script setup>
import { Quote, Star } from 'lucide-vue-next'

const testimonials = [
    {
        id: 1,
        text: "O Lucas travava antes das provas e chorava para não ir à escola. A Júlia conseguiu criar um vínculo incrível com ele. Hoje ele lida com a ansiedade com uma maturidade que nos surpreende.",
        author: "Patrícia Mendes",
        role: "Mãe do Lucas (10 anos)",
        category: "Ansiedade Escolar",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop" 
    },
    {
        id: 2,
        text: "Estávamos perdendo a conexão com nossa filha adolescente. Eram muitas brigas e portas batidas. A terapia nos ajudou a entender o mundo dela e, principalmente, ajudou ela a se entender.",
        author: "Roberto & Ana",
        role: "Pais da Sofia (14 anos)",
        category: "Conflitos Familiares",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
        id: 3,
        text: "A timidez excessiva estava impedindo o Pedro de fazer amigos. Em poucos meses, vimos ele desabrochar. A abordagem lúdica e leve da Júlia fez toda a diferença na autoestima dele.",
        author: "Carla S.",
        role: "Mãe do Pedro (12 anos)",
        category: "Habilidades Sociais",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop"
    }
]
</script>

<template>
    <section id="depoimentos" class="py-24 bg-brand-primary text-white relative overflow-hidden">
        
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-dark/20 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div class="container mx-auto px-6 relative z-10">
            
            <div class="text-center mb-16">
                <span class="text-brand-dark bg-brand-light font-bold tracking-[0.2em] uppercase text-[10px] px-4 py-2 rounded-full shadow-sm">
                    Quem já passou por aqui
                </span>
                <h2 class="font-display text-3xl md:text-4xl text-white mt-6 font-bold">
                    Famílias mais <span class="relative inline-block text-brand-accent">
                        leves e felizes.
                        <svg class="absolute w-full h-3 bottom-0 left-0 text-white/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 0 Q 50 15 100 0" stroke="currentColor" stroke-width="3" fill="none" />
                        </svg>
                    </span>
                </h2>
                <p class="mt-4 text-white/80 font-body font-light max-w-xl mx-auto">
                    Histórias reais de pais que viram seus filhos reencontrarem a alegria e a confiança.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div 
                    v-for="item in testimonials" 
                    :key="item.id" 
                    class="bg-brand-dark/20 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-brand-accent/50 hover:bg-brand-dark/30 transition-all duration-500 group relative flex flex-col"
                >
                    <Quote class="absolute top-6 right-6 w-10 h-10 text-white/10 rotate-180" />

                    <div class="flex gap-1 mb-6">
                        <Star v-for="n in 5" :key="n" class="w-4 h-4 fill-brand-accent text-brand-accent" />
                    </div>
                    
                    <p class="font-body font-medium text-base leading-relaxed mb-8 text-white/90 grow">
                        "{{ item.text }}"
                    </p>

                    <div class="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                        <img :src="item.image" :alt="item.author" class="w-12 h-12 rounded-full object-cover border-2 border-white/20 group-hover:border-brand-accent transition-colors">
                        
                        <div>
                            <p class="font-display text-base text-white font-bold">{{ item.author }}</p>
                            <span class="text-xs font-medium text-brand-accent uppercase tracking-wide block">
                                {{ item.role }}
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