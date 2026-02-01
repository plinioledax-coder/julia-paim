<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// Removi a importação do Lucide pois usaremos o SVG direto

const phone = '5571999999999' // Seu número
const message = encodeURIComponent('Olá Júlia! Visitei seu site e gostaria de saber mais sobre o atendimento.')
const link = `https://wa.me/${phone}?text=${message}`

const visible = ref(false)
const isDarkSection = ref(false) 

// IDs das seções com fundo ESCURO ou AZUL
const darkSections = ['depoimentos', 'footer'] 

const handleScroll = () => {
  const scrollY = window.scrollY
  visible.value = scrollY > 100

  const sections = document.querySelectorAll('section, header, footer')
  const buttonPosition = window.innerHeight - 80

  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    if (rect.top <= buttonPosition && rect.bottom >= buttonPosition) {
      const sectionId = section.id
      if (darkSections.includes(sectionId)) {
        isDarkSection.value = true 
      } else {
        isDarkSection.value = false
      }
    }
  })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <transition name="fade-slide">
    <a
      v-if="visible"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Psicóloga via WhatsApp"
      class="
        group
        fixed
        bottom-6
        right-6
        sm:bottom-8
        sm:right-8
        z-50
        w-14
        h-14
        rounded-full
        flex
        items-center
        justify-center
        transition-all
        duration-500
        hover:scale-110
        hover:-rotate-3
        shadow-xl
        border-2
        border-white/40
      "
      :class="isDarkSection ? 'variant-pink' : 'variant-blue'"
    >
      
      <span
        class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse-slow"
        :class="isDarkSection ? 'bg-brand-accent/40' : 'bg-brand-primary/30'"
        style="transform: scale(1.4);"
      />

      <svg 
        class="w-8 h-8 relative transition-transform duration-300 group-hover:scale-110" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>

      <span
        class="
          absolute
          right-16
          whitespace-nowrap
          text-xs
          tracking-widest
          uppercase
          px-4
          py-2
          rounded-xl
          opacity-0
          translate-x-4
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all
          duration-300
          font-bold
          shadow-lg
          border
          border-white/20
        "
        :class="isDarkSection 
          ? 'bg-brand-accent text-brand-dark' 
          : 'bg-brand-primary text-white'"
      >
        Falar com Júlia
      </span>
    </a>
  </transition>
</template>

<style scoped>
/* VARIANTE 1: Fundos CLAROS -> Botão AZUL */
.variant-blue {
  @apply bg-brand-primary text-white shadow-brand-primary/30;
}

/* VARIANTE 2: Fundos ESCUROS -> Botão ROSA (ícone ficará 'brand-dark' pelo currentColor) */
.variant-pink {
  @apply bg-brand-accent text-brand-dark shadow-brand-accent/30;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.5);
}
</style>