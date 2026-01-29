<script setup>
import { Linkedin, Instagram, GraduationCap, Quote } from 'lucide-vue-next'

const profile = {
    name: 'Júlia Paim',
    role: 'Psicóloga Clínica & Psicanálise',
    reg: 'CRP 03/12345',
    bio: [
        'Minha atuação é pautada na ética e no acolhimento. Acredito que cada história carrega uma potência única de transformação.',
        'Com especialização em Terapia Cognitivo-Comportamental e estudos contínuos em Psicanálise, ofereço um espaço onde a escuta técnica encontra a sensibilidade humana.'
    ],
    quote: 'Não se trata apenas de curar sintomas, mas de reencontrar a autoria da própria vida.',
    specialties: ['Ansiedade & Burnout', 'Desenvolvimento Pessoal', 'Conflitos Relacionais', 'Gestão Emocional'],
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop', 
    social: {
        linkedin: '#',
        instagram: '#'
    }
}
</script>

<template>
    <section id="sobre" class="py-24 bg-brand-light relative overflow-hidden">
        
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"></div>
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/4"></div>

        <div class="container mx-auto px-6 relative z-10">
            
            <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                
                <div class="w-full lg:w-1/2 relative group">
                    <div class="absolute inset-0 border border-brand-primary/30 rounded-t-[12rem] rounded-b-[2rem] translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                    
                    <div class="relative w-full aspect-[3/4] rounded-t-[12rem] rounded-b-[2rem] overflow-hidden shadow-2xl shadow-brand-dark/10">
                        <img 
                            :src="profile.img" 
                            :alt="profile.name" 
                            class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        >
                        <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>
                    </div>

                    <div class="absolute bottom-8 -left-4 bg-white p-4 rounded-xl shadow-lg border-l-4 border-brand-accent flex items-center gap-3 animate-fade-in">
                        <div class="p-2 bg-brand-accent/10 rounded-full text-brand-accent">
                            <GraduationCap class="w-5 h-5" />
                        </div>
                        <div>
                            <p class="font-display font-bold text-brand-dark text-sm">Especialista</p>
                            <p class="text-xs text-gray-500">TCC & Psicanálise</p>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-1/2 space-y-8">
                    <div>
                        <div class="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-brand-dark/5 rounded-full">
                            <span class="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                            <span class="text-xs font-bold uppercase tracking-widest text-brand-dark">{{ profile.reg }}</span>
                        </div>
                        
                        <h2 class="font-display text-4xl lg:text-5xl text-brand-dark font-medium mb-2">
                            {{ profile.name }}
                        </h2>
                        <p class="font-display text-brand-accent text-lg tracking-wide">
                            {{ profile.role }}
                        </p>
                    </div>

                    <div class="space-y-4 font-body text-gray-600 font-light leading-relaxed text-lg">
                        <p v-for="(paragraph, index) in profile.bio" :key="index">
                            {{ paragraph }}
                        </p>
                    </div>

                    <div class="relative pl-6 py-2">
                        <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-accent to-transparent"></div>
                        <Quote class="w-6 h-6 text-brand-accent/40 mb-2" />
                        <p class="font-display italic text-brand-dark text-xl">
                            {{ profile.quote }}
                        </p>
                    </div>

                    <div class="pt-4">
                        <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Áreas de Foco</p>
                        <div class="flex flex-wrap gap-3">
                            <span 
                                v-for="spec in profile.specialties" 
                                :key="spec"
                                class="px-4 py-2 bg-white border border-brand-primary/20 rounded text-brand-dark text-sm font-medium hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 cursor-default"
                            >
                                {{ spec }}
                            </span>
                        </div>
                    </div>

                    <div class="flex items-center gap-6 pt-6 border-t border-brand-dark/10">
                        <a :href="profile.social.linkedin" class="flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors group">
                            <Linkedin class="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            <span class="text-sm font-medium">LinkedIn</span>
                        </a>
                        <a :href="profile.social.instagram" class="flex items-center gap-2 text-gray-500 hover:text-brand-accent transition-colors group">
                            <Instagram class="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            <span class="text-sm font-medium">Instagram</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeInUp 1s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>