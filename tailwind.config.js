/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/modules/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#212B36',
        secondary: '#637381',
        'primary-main': '#9075FF',
        neutral: '#F6F5FF',
        disabled: '#919EAB',
        'transparent-grey': '#919EAB14',
        'input-outline': '#919EAB52',
      },
    },
  },
  plugins: [],
}
