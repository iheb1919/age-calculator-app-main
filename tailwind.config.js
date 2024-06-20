/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purple: 'hsl(var(--color-purple) / <alpha-value>)',
        'light-red': 'hsl(var(--color-light-red) / <alpha-value>)',
        white: 'hsl(var(--color-white) / <alpha-value>)',
        'off-white': 'hsl(var(--color-off-white) / <alpha-value>)',
        'light-grey': 'hsl(var(--color-light-grey) / <alpha-value>)',
        'smokey-grey': 'hsl(var(--color-smokey-grey) / <alpha-value>)',
        'off-black': 'hsl(var(--color-off-black) / <alpha-value>)',
      },
      fontSize:{
        inputsize:"32px"
      },
      fontFamily:{
        
      }
    },
    screens:{
      'md':'580px'
    }
  },
  plugins: [],
}

