/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Inter var", sans-serif'],
    },
    extend: {
      backgroundImage: {
        senior: "url('/src/Assets/img/senior.png')",
        pwd: "url('src/Assets/img/pwd.png')",
        footer: "url('src/Assets/img/footer2.png')",
      },
    },
  },
  plugins: [],
};
