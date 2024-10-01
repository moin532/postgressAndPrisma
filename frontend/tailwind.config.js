/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Adjust this according to your folder structure
    "./components/**/*.{js,ts,jsx,tsx}", // This ensures Tailwind is applied to all files in your project
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
