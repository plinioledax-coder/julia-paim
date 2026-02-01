<script setup>
import { Linkedin, Instagram, GraduationCap, Sparkles } from 'lucide-vue-next'

const profile = {
    name: 'Júlia Paim',
    role: 'Psicóloga Infantojuvenil',
    reg: 'CRP 03/12345',
    bio: [
        'Oi! Eu sou a Júlia. Minha missão é traduzir o mundo dos sentimentos para uma linguagem que faz sentido.',
        // NOVO PARÁGRAFO SOBRE TCC:
        'Trabalho com a Terapia Cognitivo-Comportamental (TCC). Isso significa que nossas sessões são dinâmicas: usamos jogos, desenhos e desafios práticos para entender como seus pensamentos influenciam o que você sente.',
        'Para os pais, ofereço orientação segura. Para você (criança ou teen), um espaço livre de julgamentos para falar sobre escola, amigos, medos e sonhos.'
    ],
    quote: 'Crescer pode ser desafiador, mas você não precisa ir sozinho.',
    specialties: ['Ansiedade de Prova', 'Timidez & Amigos', 'Vício em Telas', 'Autoestima', 'Conflitos Familiares'],
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop', 
    social: { linkedin: '#', instagram: '#' }
}
</script>

<template>
    <section id="sobre" class="py-20 bg-brand-light relative overflow-hidden">
        
        <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[80px]"></div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col lg:flex-row gap-12 items-center justify-center">
                
                <div class="w-full lg:w-2/5 max-w-md relative group">
                    <div class="absolute inset-0 border-2 border-brand-accent/30 rounded-[2rem] translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5"></div>
                    
                    <div class="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl">
                        <img :src="profile.img" :alt="profile.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    </div>

                    <div class="absolute bottom-6 -right-4 bg-white p-3 rounded-xl shadow-lg border-l-4 border-brand-primary flex items-center gap-3 animate-fade-in">
                        <div class="p-2 bg-brand-primary/10 rounded-full text-brand-primary">
                            <GraduationCap class="w-5 h-5" />
                        </div>
                        <div>
                            <p class="font-display font-bold text-brand-dark text-xs">Especialista</p>
                            <p class="text-[10px] text-gray-500 uppercase tracking-wide">TCC & Infanto</p>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-1/2 space-y-6">
                    <div>
                        <div class="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-white rounded-full shadow-sm border border-brand-primary/10">
                            <span class="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Para Pais e Filhos</span>
                        </div>
                        
                        <h2 class="font-display text-4xl lg:text-5xl text-brand-dark font-bold mb-2">
                            {{ profile.name }}
                        </h2>
                        <p class="font-display text-brand-accent text-lg font-medium">
                            {{ profile.role }}
                        </p>
                    </div>

                    <div class="space-y-4 font-body text-gray-600 leading-relaxed text-base lg:text-lg">
                        <p v-for="(paragraph, index) in profile.bio" :key="index">
                            {{ paragraph }}
                        </p>
                    </div>

                    <div class="relative pl-4 py-2 border-l-2 border-brand-accent/50 bg-brand-accent/5 rounded-r-lg">
                        <p class="font-display italic text-brand-dark text-lg px-4 py-2">
                            <Sparkles class="inline w-4 h-4 text-brand-accent mb-1 mr-1" />
                            {{ profile.quote }}
                        </p>
                    </div>

                    <div class="pt-2">
                        <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">A gente conversa sobre:</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="spec in profile.specialties" :key="spec"
                                class="px-3 py-1.5 bg-white border border-brand-dark/5 rounded-lg text-brand-dark text-sm font-medium hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all duration-300 cursor-default shadow-sm">
                                {{ spec }}
                            </span>
                        </div>
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