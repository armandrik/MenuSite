/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Dana': 'Dana',
        'DanaMedium': 'Dana medium',
        'DanaDemiBold': 'Dana demibold',
      },
      screens: {
        'desktop': {'max': '1279px'}, // Applies styles below 1279px
        'laptop': {'max': '1023px'},  // Applies styles below 1023px
        'macbook': {'max': '969px'},  // Applies styles below 1023px
        'tablet': {'max': '767px'},  // Applies styles below 767px
        'mobile': {'max': '639px'},  // Applies styles below 639px
      },
      boxShadow: {
        'shadow': '0px 1px 10px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

