/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        'hijau-tua-banget': '#0B382F',
        'hijau-tua': '#1C6758',
        'hijau-muda': '#3D8361',
        gading: '#D6CDA4',
        'putih-kuning': '#EEF2E6',
      },
      spacing: {
        '230px': '230px',
        '640px': '640px',
        '420px': '420px',
        '480px': '480px',
        '1080px': '1080px',
      },
    },
  },
  plugins: [],
};
