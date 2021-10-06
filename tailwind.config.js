module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ['Poppins', 'sans-serif'],
        brand: ['Itim', 'cursive'],
      },
      zIndex: {
        '-1': '-1',
      },
      textColor: {
        primary: '#142664',
        secondary: '#6B7280',
      },
      backgroundColor: {
        primary: '#31477B',
        secondary: '#6B7280',
        dark: '#202020',
        sidebar: '#212121',
      },
      fontSize: {
        'mobile-paragraph': '1rem',
        'mobile-secondary-text': '14px',
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};
