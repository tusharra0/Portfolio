/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'accordion-fade-in': {
          from: { opacity: '0', transform: 'translateY(-4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 520ms cubic-bezier(0.4, 0, 0.2, 1)',
        'accordion-up': 'accordion-up 460ms cubic-bezier(0.4, 0, 0.2, 1)',
        'accordion-fade-in': 'accordion-fade-in 460ms cubic-bezier(0.4, 0, 0.2, 1) 100ms both',
        'accordion-fade-out': 'accordion-fade-out 200ms ease-out both',
      },
    },
  },
  plugins: [],
}
