<script setup>
import { Brain, Heart, Briefcase, Users } from 'lucide-vue-next'

const services = [
    {
        icon: Brain,
        title: 'Ansiedade & Estresse',
        desc: 'Aprenda a gerenciar pensamentos intrusivos e recupere sua paz mental.'
    },
    {
        icon: Users,
        title: 'Relacionamentos',
        desc: 'Melhore sua comunicação e entenda padrões de comportamento afetivo.'
    },
    {
        icon: Briefcase,
        title: 'Carreira & Burnout',
        desc: 'Orientação para lidar com pressão profissional e transições de carreira.'
    },
    {
        icon: Heart,
        title: 'Autoconhecimento',
        desc: 'Uma jornada profunda para fortalecer sua autoestima e identidade.'
    }
]
</script>

<template>
    <section id="servicos" class="py-24 bg-brand-light">
        <div class="container mx-auto px-6">
            
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="font-display text-brand-accent text-xs font-bold uppercase tracking-widest block mb-3">
                    Áreas de Atuação
                </span>
                <h2 class="font-display text-3xl md:text-4xl text-brand-dark font-bold mb-6">
                    Como posso te ajudar hoje?
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(item, index) in services" :key="index"
                    class="group bg-white p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-dark/5 border border-transparent hover:border-brand-primary/20">
                    
                    <div class="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                        <component :is="item.icon" class="w-6 h-6" />
                    </div>

                    <h3 class="font-display text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                        {{ item.title }}
                    </h3>
                    
                    <p class="font-body text-gray-500 text-sm leading-relaxed font-light">
                        {{ item.desc }}
                    </p>
                </div>
            </div>

        </div>
    </section>
</template>