/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. TIPOGRAFIA
      fontFamily: {
        display: ['Montserrat', 'sans-serif'], 
        body: ['Manrope', 'sans-serif'],
      },
      
      // 2. PALETA "KINDNESS & COMFORT" (Azul + Rosa Modernos)
      colors: {
        brand: {
          // Primary (Steel Blue): 
          // Um azul médio, levemente acinzentado. 
          // Passa confiança sem ser "corporativo" e calma sem ser "sonífero".
          // Ótimo contraste para botões com texto branco.
          primary: '#5784BA', 
          
          // Dark (Charcoal Blue): 
          // Um cinza escuro azulado para textos. 
          // Muito mais suave aos olhos que o preto.
          dark: '#2D3748',    
          
          // Accent (Dusty Rose): 
          // AQUI ESTÁ O TRUQUE. Não é "pink", é um rosa "poeira" ou "blush".
          // É sofisticado, acolhedor e conversa bem com o público teen.
          accent: '#F2A3B3',  
          
          // Light (Soft Cloud): 
          // Um off-white com um pingo de azul, para integrar tudo.
          light: '#F7FAFC',   
          
          white: '#FFFFFF',
        }
      },

      // 3. ANIMAÇÕES
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