<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, Smile, Star, MousePointer2 } from 'lucide-vue-next'

const heroRef = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  mouseX.value = (clientX / innerWidth - 0.5) * 2
  mouseY.value = (clientY / innerHeight - 0.5) * 2
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('mousemove', handleMouseMove))
onUnmounted(() => window.removeEventListener('mousemove', handleMouseMove))
</script>

<template>
  <header ref="heroRef"
    class="relative min-h-[85vh] flex items-center overflow-hidden bg-[#FDFBF7] pt-32 pb-12 lg:pt-36">

    <div class="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
      style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');">
    </div>

    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-transform duration-100 ease-out"
      :style="{ transform: `translate(${mouseX * -15}px, ${mouseY * -15}px)` }">
      <div
        class="absolute top-[-5%] left-[-5%] w-[40vw] h-[40vw] bg-brand-primary/10 rounded-full blur-[80px] animate-pulse-slow mix-blend-multiply">
      </div>
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-brand-accent/10 rounded-full blur-[80px] animate-blob animation-delay-2000 mix-blend-multiply">
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

      <div class="lg:col-span-6 space-y-6 animate-slide-up order-2 lg:order-1">

        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-primary/10 shadow-sm transform hover:scale-105 transition-transform duration-300 cursor-default">
          <Smile class="w-3.5 h-3.5 text-brand-accent" />
          <span class="font-display text-[10px] font-bold tracking-[0.15em] text-brand-dark uppercase">
            Especialista em Teens (5 a 17 anos)
          </span>
        </div>

        <h1 class="font-display text-4xl lg:text-5xl font-bold leading-[1.1] text-brand-dark tracking-tight">
          Ajudando mentes <br class="hidden md:block"> brilhantes a se
          <span class="relative inline-block text-brand-primary">
            encontrarem.
            <svg class="absolute w-[105%] h-3 -bottom-1 -left-1 text-brand-accent -z-10 opacity-60" viewBox="0 0 100 10"
              preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" />
            </svg>
          </span>
        </h1>

        <p class="font-body text-base lg:text-lg text-brand-dark/70 font-medium leading-relaxed max-w-lg">
          Transforme a confusão em clareza. Apoio especializado para seu filho entender as próprias emoções, vencer a
          ansiedade e superar conflitos. </p>

        <div class="flex flex-col sm:flex-row gap-3 pt-2">
          <button @click="scrollTo('contato')"
            class="group relative px-6 py-3 bg-brand-dark text-white font-display font-bold text-xs tracking-widest uppercase rounded-full overflow-hidden shadow-lg shadow-brand-dark/10 hover:shadow-brand-accent/30 transition-all duration-300 hover:-translate-y-0.5">
            <div
              class="absolute inset-0 w-full h-full bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
            <span class="relative z-10 flex items-center gap-2">
              Marcar Conversa
              <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button @click="scrollTo('sobre')"
            class="px-6 py-3 bg-white border border-brand-dark/10 text-brand-dark font-display font-bold text-xs tracking-widest uppercase rounded-full hover:bg-brand-light transition-colors flex items-center justify-center gap-2 group">
            Conheça Júlia
          </button>
        </div>

        <div class="pt-4 flex items-center gap-3 opacity-70 scale-90 origin-left">
          <div class="flex -space-x-2">
            <img class="w-8 h-8 rounded-full border-2 border-[#FDFBF7]"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
              alt="User">
            <img class="w-8 h-8 rounded-full border-2 border-[#FDFBF7]"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
              alt="User">
            <img class="w-8 h-8 rounded-full border-2 border-[#FDFBF7]"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64"
              alt="User">
          </div>
          <p class="text-[10px] font-display font-bold text-brand-dark/60 leading-tight">
            Famílias <br>transformadas.
          </p>
        </div>
      </div>

      <div
        class="lg:col-span-6 relative h-[380px] lg:h-[480px] flex justify-center items-center perspective-1000 order-1 lg:order-2 mt-8 lg:mt-0">

        <div class="relative w-full h-full transition-transform duration-100 ease-out preserve-3d"
          :style="{ transform: `translate(${mouseX * 10}px, ${mouseY * 10}px) rotateY(${mouseX * -2}deg) rotateX(${mouseY * 2}deg)` }">

          <div
            class="absolute inset-x-8 inset-y-4 border border-brand-primary/20 rounded-[2.5rem] rotate-3 translate-x-2 translate-y-2">
          </div>

          <div
            class="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-xl shadow-brand-dark/10 group rotate-[-2deg] hover:rotate-0 transition-all duration-700 bg-white max-w-md mx-auto">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
              alt="Psicóloga Júlia Paim"
              class="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2s]">

            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent"></div>

            <div
              class="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border border-white/50 rounded-xl shadow-sm animate-fade-in">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Star class="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p class="font-display text-brand-dark text-xs font-bold">"Aqui você pode ser você."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </header>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>