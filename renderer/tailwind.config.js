const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      custom: {
        "100": "#6b6671",
        "200": "#222",
        "300": "#121212",
        "400": "#090213",
        "500": "rgba(255, 255, 255, 0.83)",
        "600": "rgba(255, 255, 255, 0.31)",
        "700": "rgba(255, 255, 255, 0.06)",
        "800": "rgba(255, 255, 255, 0.12)",
        "900": "rgba(84, 84, 84, 0.13)",
        "1000": "rgba(217, 217, 217, 0.15)",
      }
    },
    extend: {},
  },
  plugins: [],
};
