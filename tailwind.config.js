/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. TIPOGRAFIA
      // Montserrat para títulos passa autoridade e modernidade (não parece "velho", mas é sério).
      // Manrope para leitura é excelente, muito legível.
      fontFamily: {
        display: ['Montserrat', 'sans-serif'], 
        body: ['Manrope', 'sans-serif'],
      },
      
      // 2. PALETA DE CORES (Organic Luxury - Foco em Pais/Adultos)
      colors: {
        brand: {
          // Verde Musgo Claro: Acolhimento, Natureza, Crescimento.
          // É a cor principal para botões e destaques.
          primary: '#7A9578', 
          
          // Verde Musgo Escuro: Seriedade, Profundidade, Contraste.
          // Usado para textos e fundos de seções de impacto.
          dark: '#2C3E2D',    
          
          // Salmão/Terracota: O toque "humano".
          // Quebra a frieza do verde e traz a sensação de cuidado.
          accent: '#C87D70',  
          
          // Off-white: Muito mais elegante que branco puro (#FFFFFF).
          // Cansa menos a vista e parece "papel de carta premium".
          light: '#F9F8F6',   
          
          white: '#FFFFFF',
        }
      },

      // 3. ANIMAÇÕES (Mantemos para dar a sensação de site moderno/premium)
      animation: {
        'blob': 'blob 10s infinite',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      // 4. KEYFRAMES
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}