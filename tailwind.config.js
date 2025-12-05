/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // AQUÍ ESTÁ LA MAGIA
      fontFamily: {
        // Al poner "var(--font-jakarta)", Tailwind usará la fuente que cargamos en layout
        sans: ["var(--font-jakarta)", "sans-serif"],
        // Fraunces será tu fuente serif por defecto
        serif: ["var(--font-fraunces)", "serif"],
      },
      // ... el resto de tu configuración de colores o animaciones
    },
  },
  plugins: [require("tailwindcss-animate")],
}