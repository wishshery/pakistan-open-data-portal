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
      },
      boxShadow: {
        card:      '0 2px 8px rgba(0,0,0,0.08)',
        cardHover: '0 8px 24px rgba(0,0,0,0.14)',
      }
    },
  },
  plugins: [],
}
