/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1", // Indigo color similar to Eloquent AI
        secondary: "#4F46E5",
        background: "#F9FAFB",
        dark: "#111827",
      },
    },
  },
  plugins: [],
};
