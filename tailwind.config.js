/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["AvenirNext", 'sans-serif']
      },
      colors: {
        greenish: '#39cdcc',
        Inactive: '#5457fd',
        Pending: '#e9b200',
        Blacklisted: '#e4033b',
        Active: '#39cd62'
      }
    },
  },
  plugins: [],
}
