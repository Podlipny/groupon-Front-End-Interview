module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line global-require, import/no-unresolved
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
