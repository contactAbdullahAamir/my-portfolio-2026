/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          void: '#07080D',
          darkBg: '#090B12',
          card: '#0F1322',
          cardHover: '#161B2E',
          cardBorder: 'rgba(99, 102, 241, 0.18)',
          text: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
          indigo: '#6366F1',
          cyan: '#38BDF8',
          amber: '#F59E0B',
          emerald: '#10B981',
          rose: '#F43F5E',
        },
        solar: {
          paper: '#F8FAFC',
          card: '#FFFFFF',
          cardHover: '#F1F5F9',
          cardBorder: 'rgba(15, 23, 42, 0.12)',
          text: '#0F172A',
          secondary: '#475569',
          muted: '#64748B',
          indigo: '#4F46E5',
          cyan: '#0284C7',
          amber: '#D97706',
          emerald: '#059669',
          rose: '#E11D48',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Newsreader"', 'Georgia', 'serif'],
        sans: ['Inter', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
