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
        'heroImgShadowDark': '0 -180px 280px -135px #999ae5;',
        'heroImgShadowLaptopDark': '0 -105px 180px -90px #999ae5;',
        'heroImgShadowTabletDark': '0 -135px 180px -90px #999ae5;',
        'heroImgShadowMobileDark': '0 -70px 100px -50px #999ae5;',
        'heroImgShadow': '0 -180px 280px -135px #a5b4fc;',
        'heroImgShadowLaptop': '0 -105px 180px -90px #a5b4fc;',
        'heroImgShadowTablet': '0 -135px 180px -90px #a5b4fc;',
        'heroImgShadowMobile': '0 -70px 100px -50px #a5b4fc;',
      },
      // shimer button 
      animation: {
        shimmer: "shimmer 8s infinite",
        grid: "grid 15s linear infinite",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
        meteor: "meteor 5s linear infinite",
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
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
}

