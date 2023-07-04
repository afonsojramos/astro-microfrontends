/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{js,ts,jsx,tsx}"],
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
