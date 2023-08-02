/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { white: '#fdf5ef', text: '#8c6727', editButton: '#944d0a',jazzberryJam:"#bf005d",springGreen:"#dceccc" , BananaMania:"#f8e2ac"},
    },
    width: {
      headerWCustom: 'rem',
    },
  },
  plugins: [],
};
