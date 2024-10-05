/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: [
        'var(--font-sans)',
        'Open Sans',
        'Montserrat',
        'Roboto',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        brand: 'hsl(var(--brand))',
        primary: 'hsl(var(--primary))',
        dark: 'hsl(var(--dark))',
        light: 'hsl(var(--light))',
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        danger: 'hsl(var(--danger))',
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: { 'caret-blink': 'caret-blink 1.25s ease-out infinite' },
      transitionDuration: { 400: '400ms', 800: '800ms' },
      transitionTimingFunction: {
        'steps-12': 'steps(12, end)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
