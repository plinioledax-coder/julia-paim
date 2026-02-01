<script setup>
import { Gamepad2, HeartHandshake, BookOpen, SmilePlus } from 'lucide-vue-next' // Ícones novos

const services = [
    {
        icon: BookOpen,
        title: 'Escola & Foco',
        desc: 'Dificuldades de aprendizado, pressão por notas e organização dos estudos.'
    },
    {
        icon: Gamepad2,
        title: 'Mundo Digital',
        desc: 'Equilíbrio saudável entre telas, jogos e a vida real fora do quarto.'
    },
    {
        icon: SmilePlus,
        title: 'Emoções & Ansiedade',
        desc: 'Aprender a lidar com o "frio na barriga", medos e mudanças de humor.'
    },
    {
        icon: HeartHandshake,
        title: 'Habilidades Sociais',
        desc: 'Vencer a timidez, fazer amigos e lidar com bullying ou conflitos.'
    }
]
</script>

<template>
    <section id="servicos" class="py-24 bg-white">
        <div class="container mx-auto px-6">
            
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="font-display text-brand-accent text-xs font-bold uppercase tracking-widest block mb-3">
                    Como funciona
                </span>
                <h2 class="font-display text-3xl md:text-4xl text-brand-dark font-bold mb-6">
                    Apoio para cada fase do crescimento
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(item, index) in services" :key="index"
                    class="group bg-brand-light/30 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-brand-primary/10 border border-transparent hover:border-brand-primary/20">
                    
                    <div class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm">
                        <component :is="item.icon" class="w-7 h-7" />
                    </div>

                    <h3 class="font-display text-xl font-bold text-brand-dark mb-3">
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