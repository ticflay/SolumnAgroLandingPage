import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          950: '#0a1f04',
          900: '#122b08',
          800: '#1a3a0e',
          700: '#265216',
        },
        teal: {
          600: '#0F6E56',
          500: '#1D9E75',
          400: '#2ab889',
          100: '#d4f0e5',
          50: '#edf9f4',
        },
        sand: {
          50: '#FAFAF7',
          100: '#F5F4F0',
          200: '#ECEAE4',
          300: '#D6D3CA',
          400: '#B0ADA4',
          500: '#8A877E',
          700: '#52504A',
          900: '#1C1B18',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.7)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
