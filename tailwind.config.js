module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],  // Include your JSX/TSX files
  darkMode: 'class', // Use 'class' for easy theme switching
  theme: {
    extend: {
      colors: {
        customWhite: '#fbf7f0',
        customBlack: '#1b1917',
        customPurple: '#7E60BF',
        bgDarkPrime: '#000000',
        highlight: 'var(--highlight-color, #008f11)',
      },
      invert: {
        25: '0.25',
        50: '0.5',
        85: '0.85',
      },
    },
  },
  plugins: [],
};