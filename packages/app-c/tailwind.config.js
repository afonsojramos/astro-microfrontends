/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "400%": "400%",
      },
      backgroundImage: {
        gradient: "var(--accent-gradient)",
      },
    },
  },
  plugins: [],
};
