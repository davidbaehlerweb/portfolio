/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Assurez-vous que ces chemins sont corrects
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff8901",
        secondary: "#fb923c",
        darkBlue: '#0a1a2b', // Vous pouvez ajuster le code hexadécimal pour le dark blue souhaité
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          "2xl": '6rem',
        },
      },
    },
  },
  plugins: [],
};
