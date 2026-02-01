/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. TIPOGRAFIA
      // Mantivemos as fontes pois funcionam bem: 
      // Montserrat (geométrica, moderna, agrada teens) + Manrope (legibilidade).
      fontFamily: {
        display: ['Montserrat', 'sans-serif'], 
        body: ['Manrope', 'sans-serif'],
      },
      
      // 2. NOVA PALETA DE CORES (Foco: 8-15 anos + Pais)
      colors: {
        brand: {
          // Verde "Fresh": Menos musgo, mais vivo. 
          // Passa a ideia de crescimento e saúde mental sem ser hospitalar.
          primary: '#588157', 
          
          // Dark "Deep Forest": Substitui o preto. 
          // É sério o suficiente para os pais, mas suave para leitura.
          dark: '#1A2C22',    
          
          // Laranja "Energy": A MUDANÇA PRINCIPAL.
          // Vibrante, estimulante e criativo. Conecta com a linguagem jovem/teen
          // e quebra a monotonia do site. Ótimo para CTAs.
          accent: '#FF9F1C',  
          
          // Cream: Mantemos o fundo off-white para conforto visual (leitura em telas).
          light: '#FDFBF7',   
          
          white: '#FFFFFF',
        }
      },

      // 3. ANIMAÇÕES 
      // Mantidas e essenciais. O movimento (blobs, slides) retém a atenção 
      // de mentes mais jovens que tendem a ser mais visuais/interativas.
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