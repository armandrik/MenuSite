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
        'desktop': { 'max': '1279px' }, // Applies styles below 1279px
        'laptop': { 'max': '1023px' },  // Applies styles below 1023px
        'macbook': { 'max': '969px' },  // Applies styles below 1023px
        'tablet': { 'max': '767px' },  // Applies styles below 767px
        'mobile': { 'max': '639px' },  // Applies styles below 639px
      },
      boxShadow: {
        'shadow': '0px 1px 10px 0px rgba(0, 0, 0, 0.05)',
        'heroImgShadowDark' : '0 -180px 280px -135px #999ae5;',
        'heroImgShadowLaptopDark' : '0 -105px 180px -90px #999ae5;',
        'heroImgShadowTabletDark' : '0 -135px 180px -90px #999ae5;',
        'heroImgShadowMobileDark' : '0 -70px 100px -50px #999ae5;',
        'heroImgShadow' : '0 -180px 280px -135px #8bebc5;',
        'heroImgShadowLaptop' : '0 -105px 180px -90px #8bebc5;',
        'heroImgShadowTablet' : '0 -135px 180px -90px #8bebc5;',
        'heroImgShadowMobile' : '0 -70px 100px -50px #8bebc5;',
      },
      // shimer button 
      animation: {
        shimmer: "shimmer 8s infinite",
        beam: 'beam 4s linear infinite',
      },
      keyframes: {
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
    },
  },
  plugins: [],
}

