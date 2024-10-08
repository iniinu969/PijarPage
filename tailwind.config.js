/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  fontFamily:{
    Roboto: ["Roboto, sans-serif"]
  },
  container:{
    padding: "2rem",
    center: true
  },
  screens:{
    sm:"640px",
    md:"720px"
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

