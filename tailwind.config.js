module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    colors: {
      'point-color': 'rgb(107, 125, 96)',
      'gray-dark': '#273444',
      'white': "#ffffff",
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}