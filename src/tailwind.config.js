// src/tailwind.config.js
module.exports = {
  content: ['../index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-', // Prevent conflicts
};