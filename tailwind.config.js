/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "bright-blue": "hsl(220, 98%, 61%)",
      "checkbackground": "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
      // ### Light Theme
      "very-light-gray": "hsl(0, 0%, 98%)",
      "very-light-grayish-blue": "hsl(236, 33%, 92%)",
      "light-grayish-blue": "hsl(233, 11%, 84%)",
      "dark-grayish-blue": "hsl(236, 9%, 61%)",
      "very-dark-grayish-blue": "hsl(235, 19%, 35%)",
      // ### Dark Theme

      "very-dark-blue": "hsl(235, 21%, 11%)",
      "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
      "light-grayish-blue-themeDark": "hsl(234, 39%, 85%)",
      "light-grayish-blue-hover": "hsl(236, 33%, 92%)", //(hover)
      "dark-grayish-blue-themeDark": "hsl(234, 11%, 52%)",
      "very-dark-grayish-blue-themeDark": "hsl(233, 14%, 35%)",
      "very-dark-grayish-blue-themeDark2": "hsl(237, 14%, 26%)",
    },
  },
  plugins: [],
}

