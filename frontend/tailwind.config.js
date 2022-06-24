/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
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
    fontSize: {
      'heading-1': ['28px', { lineHeight: '35px' }],
      'heading-2': ['24px', { lineHeight: '29px' }],
      'heading-3': ['20px', { lineHeight: '24px' }],
      'heading-4': ['14px', { lineHeight: '18px' }],
      body: ['16px', { lineHeight: '26px' }],
    },
    extend: {
      width: {
        141: '141px',
      },
    },
  },
  plugins: [],
};
