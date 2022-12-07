/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        key: "inset 0px -4px 0px #b3a497",
        erase: "inset 0px -4px 0px #414e73",
        confirm: "inset 0px -4px 0px #93261a",
      },
    },
  },
  plugins: [],
};
