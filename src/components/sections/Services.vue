<script setup>
import { Gamepad2, HeartHandshake, BookOpen, SmilePlus, BrainCircuit, CheckCircle2 } from 'lucide-vue-next' 

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
    <section id="servicos" class="py-24 bg-white relative overflow-hidden">
        <div class="container mx-auto px-6 relative z-10">
            
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="font-display text-brand-accent text-xs font-bold uppercase tracking-widest block mb-3">
                    Áreas de Atuação
                </span>
                <h2 class="font-display text-3xl md:text-4xl text-brand-dark font-bold mb-6">
                    Apoio para cada fase do crescimento
                </h2>
                <p class="font-body text-brand-dark/60 font-medium max-w-2xl mx-auto">
                    Cada criança e adolescente é um universo. Identificamos as dificuldades e potencializamos as qualidades.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                <div v-for="(item, index) in services" :key="index"
                    class="group bg-brand-light p-8 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-brand-primary/10 border border-transparent hover:border-brand-primary/20">
                    
                    <div class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm">
                        <component :is="item.icon" class="w-7 h-7" />
                    </div>

                    <h3 class="font-display text-xl font-bold text-brand-dark mb-3">
                        {{ item.title }}
                    </h3>
                    
                    <p class="font-body text-gray-500 text-sm leading-relaxed font-medium">
                        {{ item.desc }}
                    </p>
                </div>
            </div>

            <div class="bg-brand-primary/5 rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 md:gap-16 border border-brand-primary/10">
                
                <div class="relative shrink-0">
                    <div class="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-lg shadow-brand-primary/10 relative z-10">
                        <BrainCircuit class="w-16 h-16 text-brand-primary" stroke-width="1.5" />
                    </div>
                    <div class="absolute inset-0 bg-brand-accent/20 blur-2xl rounded-full transform translate-x-4 translate-y-4"></div>
                </div>

                <div class="space-y-6 text-center lg:text-left flex-1">
                    <div>
                        <span class="inline-block px-3 py-1 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                            Metodologia Científica
                        </span>
                        <h3 class="font-display text-2xl md:text-3xl font-bold text-brand-dark">
                            Por que uso a <span class="text-brand-primary">TCC</span>?
                        </h3>
                    </div>

                    <p class="font-body text-brand-dark/70 text-base md:text-lg leading-relaxed">
                        Sou especialista em <strong>Terapia Cognitivo-Comportamental</strong>. É uma abordagem prática e focada no presente. 
                        Diferente de apenas "conversar", na TCC ensinamos a criança/adolescente a se tornar seu próprio terapeuta.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div class="flex items-start gap-3 text-left">
                            <CheckCircle2 class="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                            <p class="text-sm font-medium text-brand-dark/80">Entender como pensamentos afetam emoções.</p>
                        </div>
                        <div class="flex items-start gap-3 text-left">
                            <CheckCircle2 class="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                            <p class="text-sm font-medium text-brand-dark/80">Desenvolver autonomia e resolução de problemas.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>