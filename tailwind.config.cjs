/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary':{ 
          '400':'#0066ff',
          '800':'#005ce6',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      screens: {
        'sm': '600px',
        'md': '960px',
        'lg': '1280px',
        'xl': '1440px',
        'max-xl': {'max': '1440px'},
        'max-lg': {'max': '1279px'},
        'max-md': {'max': '960px'},
        'max-sm': {'max': '600px'},
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
