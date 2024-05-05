/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/components/**/*.{js,ts,jsx,tsx}'

  ],
  theme: {
    extend: {
      backgroundImage: {
      'hands': "url('/img/hands.jpg')",
      
    }},
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

