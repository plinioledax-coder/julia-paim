<script setup>
import { ArrowUp, Instagram, Mail, MapPin, MessageCircle, Linkedin } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <footer class="bg-brand-dark text-brand-light relative overflow-hidden border-t border-brand-primary/10">

        <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>

        <div class="container mx-auto px-6 py-16">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12">

                <div class="md:col-span-5 space-y-6">
                    
                    <a href="#" @click.prevent="scrollToTop" class="inline-block group">
                        <span class="font-display text-2xl md:text-3xl font-bold tracking-tight text-white">
                            Júlia<span class="text-brand-accent">Paim</span>.
                        </span>
                    </a>

                    <p class="font-body text-sm font-light leading-relaxed max-w-sm text-brand-light/80">
                        Psicologia clínica com foco em autoconhecimento e bem-estar. 
                        Um espaço seguro para você reencontrar sua essência e construir novos caminhos.
                    </p>
                    
                    <div class="inline-block px-3 py-1 border border-brand-primary/30 rounded text-xs font-display tracking-widest uppercase text-brand-primary">
                        CRP 03/12345
                    </div>

                    <div class="flex items-center gap-4 pt-4">
                        <a href="https://instagram.com" target="_blank"
                            class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all duration-300 group">
                            <Instagram class="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://linkedin.com" target="_blank"
                            class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all duration-300 group">
                            <Linkedin class="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://wa.me/" target="_blank"
                            class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300 group">
                            <MessageCircle class="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>

                </div>

                <div class="md:col-span-3 space-y-6">
                    <h3 class="font-display text-sm font-bold uppercase tracking-widest text-brand-primary">Menu</h3>
                    <ul class="space-y-3 font-body text-sm font-light text-brand-light/70">
                        <li><a href="#sobre" class="hover:text-brand-accent transition-colors block w-fit">Sobre Mim</a></li>
                        <li><a href="#servicos" class="hover:text-brand-accent transition-colors block w-fit">Áreas de Atuação</a></li>
                        <li><a href="#faq" class="hover:text-brand-accent transition-colors block w-fit">Como Funciona</a></li>
                        <li><a href="#contato" class="hover:text-brand-accent transition-colors block w-fit">Agendar Sessão</a></li>
                    </ul>
                </div>

                <div class="md:col-span-4 space-y-6">
                    <h3 class="font-display text-sm font-bold uppercase tracking-widest text-brand-primary">Contato</h3>
                    <ul class="space-y-4 text-sm font-body font-light text-brand-light/70">
                        <li class="flex items-start gap-3">
                            <MapPin class="w-5 h-5 text-brand-accent mt-0.5 shrink-0" />
                            <span>
                                Av. Tancredo Neves, 620<br>
                                Caminho das Árvores, Salvador - BA<br>
                                <span class="text-xs text-brand-primary/80 mt-1 block">Atendimento Presencial & Online</span>
                            </span>
                        </li>
                        <li class="flex items-center gap-3">
                            <Mail class="w-5 h-5 text-brand-accent shrink-0" />
                            <a href="mailto:contato@juliapaim.com.br" class="hover:text-white transition-colors">contato@juliapaim.com.br</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="border-t border-white/5">
            <div class="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <div class="font-body text-xs text-brand-light/40">
                    © {{ currentYear }} Júlia Paim. Todos os direitos reservados.
                </div>

                <div class="flex items-center gap-6">
                    <button @click="scrollToTop"
                        class="group flex items-center gap-2 font-display text-[10px] uppercase font-bold text-brand-light/60 hover:text-brand-accent transition-colors tracking-widest">
                        Voltar ao Topo
                        <ArrowUp class="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>

            </div>
        </div>
    </footer>
</template>