/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#050711',
          900: '#070A12',
          800: '#0B1020',
          700: '#121A33',
        },
        glow: {
          cyan: '#22d3ee',
          blue: '#60a5fa',
          emerald: '#34d399',
        },
        accent: {
          DEFAULT: '#22d3ee', // cyan
          dark: '#0891b2',
          light: '#67e8f9',
        },
      },
      boxShadow: {
        'glow-sm': '0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.55)',
        'glow-md': '0 0 0 1px rgba(34,211,238,0.16), 0 18px 70px rgba(0,0,0,0.60)',
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

