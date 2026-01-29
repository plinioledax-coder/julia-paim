<script setup>
import { ref } from 'vue'
import { MessageCircle, CheckCircle2, MapPin, Mail, Clock } from 'lucide-vue-next'

const form = ref({ name: '', phone: '', message: '' })
const status = ref({ submitting: false, success: false })

const handleSubmit = async () => {
    status.value.submitting = true
    await new Promise(r => setTimeout(r, 1500))
    status.value.submitting = false
    status.value.success = true
    form.value = { name: '', phone: '', message: '' }
    setTimeout(() => { status.value.success = false }, 5000)
}
</script>

<template>
    <section id="contato" class="py-24 bg-brand-primary/10 relative overflow-hidden">
        
        <div class="container mx-auto px-6 relative z-10">
            
            <div class="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl shadow-brand-dark/5 bg-white">
                
                <div class="lg:w-2/5 bg-brand-dark text-white p-12 flex flex-col justify-between relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

                    <div class="relative z-10 space-y-6">
                        <h2 class="font-display text-3xl font-bold">Vamos conversar?</h2>
                        <p class="font-body text-brand-light/80 font-light">
                            O primeiro passo é sempre o mais importante. Preencha o formulário ou me chame no WhatsApp.
                        </p>
                    </div>

                    <div class="relative z-10 space-y-8 mt-12">
                        <div class="flex items-start gap-4">
                            <MapPin class="w-6 h-6 text-brand-accent shrink-0" />
                            <div>
                                <h4 class="font-display font-bold text-sm uppercase tracking-wider mb-1">Consultório</h4>
                                <p class="font-body text-sm text-brand-light/70">Av. Tancredo Neves, 620<br>Caminho das Árvores, Salvador - BA</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4">
                            <Clock class="w-6 h-6 text-brand-accent shrink-0" />
                            <div>
                                <h4 class="font-display font-bold text-sm uppercase tracking-wider mb-1">Horários</h4>
                                <p class="font-body text-sm text-brand-light/70">Seg a Sex: 08h às 19h<br>Online: Horários flexíveis</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <Mail class="w-6 h-6 text-brand-accent shrink-0" />
                            <div>
                                <h4 class="font-display font-bold text-sm uppercase tracking-wider mb-1">Contato</h4>
                                <p class="font-body text-sm text-brand-light/70">contato@juliapaim.com.br</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-12 pt-8 border-t border-white/10">
                        <a href="https://wa.me/5571999999999" target="_blank" class="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors font-display font-bold text-sm uppercase tracking-widest">
                            <MessageCircle class="w-4 h-4" />
                            WhatsApp Direto
                        </a>
                    </div>
                </div>

                <div class="lg:w-3/5 p-12 bg-white">
                    <form @submit.prevent="handleSubmit" class="space-y-8">
                        
                        <div v-if="status.success" class="p-4 bg-brand-primary/10 text-brand-dark rounded flex items-center gap-3 animate-fade-in">
                            <CheckCircle2 class="w-5 h-5 text-brand-primary" />
                            <span class="font-body text-sm font-bold">Mensagem enviada com sucesso!</span>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="group relative">
                                <input v-model="form.name" required type="text" placeholder=" " 
                                    class="peer w-full bg-transparent border-b border-gray-300 py-3 font-body text-brand-dark focus:border-brand-primary focus:outline-none transition-colors" />
                                <label class="absolute left-0 -top-3.5 text-xs text-brand-primary font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-primary peer-focus:text-xs">
                                    Seu Nome
                                </label>
                            </div>
                            
                            <div class="group relative">
                                <input v-model="form.phone" required type="tel" placeholder=" " 
                                    class="peer w-full bg-transparent border-b border-gray-300 py-3 font-body text-brand-dark focus:border-brand-primary focus:outline-none transition-colors" />
                                <label class="absolute left-0 -top-3.5 text-xs text-brand-primary font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-primary peer-focus:text-xs">
                                    WhatsApp
                                </label>
                            </div>
                        </div>

                        <div class="group relative">
                            <textarea v-model="form.message" required rows="3" placeholder=" " 
                                class="peer w-full bg-transparent border-b border-gray-300 py-3 font-body text-brand-dark focus:border-brand-primary focus:outline-none transition-colors resize-none"></textarea>
                            <label class="absolute left-0 -top-3.5 text-xs text-brand-primary font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-primary peer-focus:text-xs">
                                Como posso ajudar?
                            </label>
                        </div>

                        <button type="submit" :disabled="status.submitting" 
                            class="w-full md:w-auto px-10 py-4 bg-brand-primary hover:bg-brand-dark text-white font-display font-bold uppercase tracking-widest text-sm rounded transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-brand-dark/20">
                            <span v-if="status.submitting">Enviando...</span>
                            <span v-else>Agendar Consulta</span>
                        </button>

                    </form>
                </div>

            </div>
        </div>
    </section>
</template>