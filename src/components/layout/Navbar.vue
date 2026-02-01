<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Fecha o menu mobile ao clicar em um link
const closeMenu = () => {
  isMenuOpen.value = false
}

// Trava o scroll do corpo do site quando o menu está aberto
watch(isMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => window.addEventListener('scroll', checkScroll))
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
  document.body.style.overflow = '' // Garante destravamento ao sair
})

const menuItems = [
  { label: 'Sobre Mim', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#servicos' },
  { label: 'Como Funciona', href: '#faq' },
]
</script>

<template>
  <nav 
    class="fixed w-full z-50 transition-all duration-500"
    :class="isScrolled && !isMenuOpen ? 'py-4 bg-white/90 backdrop-blur-md border-b border-brand-primary/10 shadow-sm' : 'py-8 bg-transparent'"
  >
    <div class="container mx-auto px-6 flex justify-between items-center relative">
      
      <a href="#" class="group relative z-50" @click="closeMenu">
        <span class="font-display text-2xl font-bold tracking-tight transition-colors duration-300"
              :class="isMenuOpen ? 'text-brand-light' : 'text-brand-dark'">
            Júlia<span class="text-brand-accent">Paim</span>.
        </span>
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a v-for="item in menuItems" 
           :key="item.label" 
           :href="item.href" 
           class="nav-link text-sm font-medium text-brand-dark/70 hover:text-brand-primary transition-colors relative">
           {{ item.label }}
        </a>
        
        <a 
          href="#contato" 
          class="px-6 py-2.5 bg-brand-dark text-white text-sm font-bold font-display uppercase tracking-wider rounded hover:bg-brand-primary transition-colors shadow-lg shadow-brand-dark/10"
        >
          Agendar Sessão
        </a>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden z-50 transition-colors duration-300 relative focus:outline-none"
              :class="isMenuOpen ? 'text-brand-light' : 'text-brand-dark'">
        <X v-if="isMenuOpen" class="w-8 h-8" />
        <Menu v-else class="w-8 h-8" />
      </button>

    </div>

    <Transition name="fade">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-brand-dark z-40 flex flex-col justify-center items-center w-screen h-screen">
          
          <div class="text-center space-y-8 animate-slide-up">
              <span class="font-display text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                  Menu
              </span>

              <div class="flex flex-col gap-6">
                  <a v-for="item in menuItems" 
                     :key="item.label" 
                     :href="item.href"
                     @click="closeMenu"
                     class="font-display text-3xl text-brand-light hover:text-brand-accent transition-colors font-light">
                      {{ item.label }}
                  </a>
                  
                  <a href="#contato" 
                     @click="closeMenu"
                     class="font-display text-3xl text-brand-accent hover:text-white transition-colors font-medium mt-4">
                      Agendar Sessão
                  </a>
              </div>
          </div>

          <div class="absolute bottom-10 text-brand-light/30 text-xs uppercase tracking-widest font-display">
              Psicologia Clínica
          </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.nav-link::after {
    content: '';
    @apply absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 rounded-full;
}
.nav-link:hover::after {
    @apply w-full;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animação suave para os itens subindo */
.animate-slide-up {
  animation: slideUp 0.4s ease-out forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>