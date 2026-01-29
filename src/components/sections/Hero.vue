<script setup>
import { ArrowRight, Star } from 'lucide-vue-next'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="relative min-h-screen flex items-center overflow-hidden bg-brand-light">
    
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div class="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-brand-primary/10 rounded-full blur-[100px] animate-blob"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brand-accent/15 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      <div class="space-y-8 animate-slide-up order-2 lg:order-1">
        
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-primary/20 shadow-sm">
          <Star class="w-3 h-3 text-brand-accent fill-brand-accent" />
          <span class="font-display text-xs font-bold tracking-widest text-brand-dark uppercase">
            Psicologia Clínica & Psicanálise
          </span>
        </div>

        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-brand-dark tracking-tight">
          Reencontre sua <br>
          <span class="relative z-10">
            essência.
            <svg class="absolute w-full h-3 -bottom-1 left-0 text-brand-accent/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="8" fill="none" />
            </svg>
          </span>
        </h1>

        <p class="font-body text-lg text-gray-600 font-light leading-relaxed max-w-lg">
            Um espaço de escuta qualificada para transformar angústias em caminhos. Atendimento online e presencial com <strong>Júlia Paim</strong>.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 pt-2">
          <button @click="scrollTo('contato')" class="group relative px-8 py-4 bg-brand-dark text-white font-display font-semibold text-sm tracking-wider uppercase rounded overflow-hidden transition-all hover:shadow-[0_10px_30px_-10px_rgba(44,62,45,0.4)]">
            <span class="relative z-10 flex items-center gap-3">
              Agendar Sessão
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button @click="scrollTo('sobre')" class="px-8 py-4 bg-transparent border border-brand-dark/10 text-brand-dark font-display font-semibold text-sm tracking-wider uppercase rounded hover:bg-brand-primary/5 transition-colors">
            Conheça a Júlia
          </button>
        </div>
      </div>

      <div class="relative order-1 lg:order-2 h-[500px] lg:h-[700px] flex justify-center items-center">
        <div class="absolute w-[90%] h-[90%] border border-brand-primary/30 rounded-t-[10rem] rounded-b-[2rem] translate-x-4 translate-y-4"></div>
        
        <div class="relative w-[90%] h-[90%] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl shadow-brand-dark/10 group">
             <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                alt="Psicóloga Júlia Paim" 
                class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            >
            
            <div class="absolute bottom-6 right-6 left-6 p-6 bg-white/20 backdrop-blur-md border border-white/40 rounded-xl">
                <p class="font-display text-white text-xl font-medium">"A cura começa na escuta."</p>
                <div class="h-[1px] w-12 bg-brand-accent my-3"></div>
                <p class="font-display text-[10px] text-white/80 uppercase tracking-widest">CRP 03/12345</p>
            </div>
        </div>
      </div>

    </div>
  </header>
</template>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}
</style>