/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens : {
      'xs' : '430px',
      'sm' : '576px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1140px',
      '2xl' : '1536px'
    },
    extend: {
      container : {
        padding : "20px",
        screens : {
          'sm' : '100%',
          'md' : '100%',
          'lg' : "100%",
          'xl' : '1140px',
          '2xl' : '1140px'
        },
        center : true
      }
    },
  },
  plugins: [],
}

