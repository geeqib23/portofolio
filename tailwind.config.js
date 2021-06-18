const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      cursive: ['Satisfy', 'cursive'],
      sans: 'ui-sans-serif, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        'ui-sans-serif, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {},
    colors: {
      ...defaultTheme.colors,
      primary: '#f20a72',
      primaryShade: '#e6096c',
      primaryTint: '#ff2286',
      primaryLight: '#ff6cae',

      secondary: '#e6db74',
      secondaryShade: '#cac166',
      secondaryTint: '#eee69e',
      secondaryLight: '#f3fcd9',
      secondaryText: '#c5c2b8',

      dark: '#20252c',
      darkBlack: '#191e23',
      darkShade: '#1c2127',
      darkTint: '#363b41',
      darkLight: '#63666b',

      fontColor: '#fff',
      alternativeFont: '#c5c2b8',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
