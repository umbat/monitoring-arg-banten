/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
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
        'kotak-1': '#A5ECDE',
        'kotak-2': '#70CFBC',
        'kotak-3': '#42B59E',
        'kotak-4': '#27957F',
        'kotak-5': '#0B5E4D',
      },
      spacing: {
        '72px': '72px',
        '230px': '230px',
        '640px': '640px',
        '420px': '420px',
        '480px': '480px',
        '720px': '720px',
        '1080px': '1080px',
      },
    },
  },
  plugins: [],
};
