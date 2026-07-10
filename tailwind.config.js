/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pak: {
          green:      '#006837',
          greenDark:  '#004d28',
          greenLight: '#008a49',
          greenPale:  '#e8f5ee',
          white:      '#FFFFFF',
          gold:       '#C8962B',
          goldLight:  '#F5C842',
          navy:       '#0A1628',
          slate:      '#1E3A5F',
          gray:       '#6B7280',
          lightGray:  '#F3F4F6',
          border:     '#D1D5DB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Lexend', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:      '0 1px 3px rgba(10,22,40,0.06), 0 4px 14px rgba(10,22,40,0.05)',
        cardHover: '0 12px 32px rgba(0,104,55,0.14), 0 2px 8px rgba(10,22,40,0.08)',
        glow:      '0 0 40px rgba(0,138,73,0.35)',
      }
    },
  },
  plugins: [],
}
