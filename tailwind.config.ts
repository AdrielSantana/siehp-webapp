/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/infra/factories/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/infra/factories/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/infra/presentation/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/infra/presentation/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        gray_dark: '#273444',
        gray: '#8492a6',
        gray_light: '#d3dce6',
        header: '#474747',
        footer: '#474747',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundColor: {
        'light-mode': '#F9F9F9',
        'dark-mode': '#212121',
      },
    },
  },
  plugins: [],
}