/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      'heading-1': ['28px', { lineHeight: '35px' }],
      'heading-2': ['24px', { lineHeight: '29px' }],
      'heading-3': ['20px', { lineHeight: '24px' }],
      'heading-4': ['14px', { lineHeight: '18px' }],
      body: ['16px', { lineHeight: '20px' }],
    },
    extend: {
      colors: {
        violet: '#5964E0',
        'light-violet': '#939BF4',
        'very-dark-blue': '#19202D',
        midnight: '#121721',
        white: '#fff',
        'light-grey': '#979797',
        grey: '#9DAEC2',
        'dark-grey': '#6E8098',
        'body-bg': 'rgb(227, 224, 247)',
      },
      width: {
        50: '50px',
        115: '115px',
        141: '141px',
        279: '279px',
        286: '286px',
        327: '327px',
        689: '689px',
      },
      height: {
        48: '48px',
        50: '50px',
        147: '147px',
        136: '136px',
        217: '217px',
        228: '228px',
      },
      padding: {
        42: '42px',
        45: '45px',
        72: '72px',
        156: '156px',
      },
      spacing: {
        18: '100px',
        25: '120px',
      },
    },
    screens: {
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px',
    },
  },
  plugins: [],
};
