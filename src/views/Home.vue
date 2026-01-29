<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Hero from '../components/sections/Hero.vue'
import Team from '../components/sections/About.vue'   // (As Arquitetas - NOVO)
import Services from '../components/sections/Services.vue'   // (Serviços - NOVO)
import Testimonials from '../components/sections/Testimonials.vue' // (Depoimentos - NOVO)
import Contact from '../components/sections/Contact.vue'
import Footer from '../components/layout/Footer.vue'
import FloatingWhatsapp from '../components/ui/FloatingWhatsapp.vue'
import FAQ from '../components/sections/FAQ.vue'

</script>

<template>
  <div class="min-h-screen">
    <Navbar />

    <Hero />

    <Team />

    <Services />

    <Testimonials />

    <FAQ />

    <Contact />

    <Footer />

    <FloatingWhatsapp />

  </div>
</template>