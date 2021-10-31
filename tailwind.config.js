module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        open: '"Open Sans", sans-serif',
      },
      colors: {
        'white-lilac': '#F9F8FD',
        'blue-romance': '#D7F5D8',
        mauve: '#D4A5FF',
        seance: '#5C1A99',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
