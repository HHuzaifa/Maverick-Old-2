/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'smbil': '320px',
        'mmbil': '375px',
        'lmbil': '425px',
        'tab': '768px',
        'laptop': '1024px',
        'laptop-lg': '1440px',
        '4k': '2560px',
    },
  },
  plugins: [],
},
}