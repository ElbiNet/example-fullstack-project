const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins-regular' : ['Poppins-Regular', 'Poppins-Regular'],
        'poppins-bold' : ['Poppins-Bold', 'Poppins-Bold'],
        'poppins-light' : ['Poppins-Light', 'Poppins-Light'],
        'poppins-semiBold' : ['Poppins-SemiBold', 'Poppins-SemiBold'],
        'poppins-extraBold' : ['Poppins-ExtraBold', 'Poppins-ExtraBold'],

        'openSans-regular' : ['OpenSans-Regular', 'OpenSans-Regular'],
        'openSans-bold' : ['OpenSans-Bold', 'OpenSans-Bold'],
        'openSans-light' : ['OpenSans-Light', 'OpenSans-Light'],
        'openSans-semiBold' : ['OpenSans-SemiBold', 'OpenSans-SemiBold'],
        'openSans-extraBold' : ['OpenSans-ExtraBold', 'OpenSans-ExtraBold'],
      },
    },
    colors: {
      'bannerBackground' : '#1F3162',
      'white' : '#FFFFFF',
      'black' : '#000000',
      'bannerTextGrey' : 'rgba(255,255,255,0.72)',
      'itemBorderColor' : 'rgba(0,0,0,0.13)',
      'headerBorderColor' : '#E6E6E7',
      'checkBoxColor1' : '#143061',
      'checkBoxColor2' : '#81396F',
      'checkBoxColor3' : '#F6437D',
      'footerItemCaption' : '#F6437D',
      'cartItemCountBackground' : '#D74179',
      'cartItemRemoveButtonColor' : '#646A70',

    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
