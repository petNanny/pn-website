/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: "#FFFFFF",
        background: {
          100: "#666666",
          200: "#575757",
          300: "#4A4A4A",
          400: "#3D3D3D",
          500: "#323232",
        },
        typography: {
          100: "#888888",
          200: "#A5A5A5",
          300: "#BDBDBD",
          400: "#DBDBDB",
          500: "#F9F9F9",
        },
        primary: {
          100: "#004E7C",
          200: "#005E97",
          300: "#0071B6",
          400: "#0083D1",
          500: "#009EFD",
        },
      },
      opacity: {
        85: ".85",
      },
      fontSize: {
        h2: [
          "2rem",
          {
            lineHeight: "48px",
            letterSpacing: "0.02em",
            fontWeight: "400",
          },
        ],
        h1: [
          "3rem",
          {
            fontWeight: "600",
            lineHeight: "48px",
            letterSpacing: "0.03em",
          },
        ],
        h4: [
          "20px",
          {
            lineHeight: "26px",
            letterSpacing: "0.02em",
            fontWeight: "300",
          },
        ],
        p: [
          "1rem",
          {
            lineHeight: "24px",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        logoText: [
          "20px",
          {
            lineHeight: "32px",
            letterSpacing: "0.02em",
            fontWeight: "300",
          },
        ],
      },
      backgroundImage: {
        purpleBlue: "linear-gradient(225deg, #B721FF 0%, #21D4FD 100%)",
        blue: "linear-gradient(33.75deg, #00B7BB 0%, #148EFF 100%)",
        cardBorderBlue: "linear-gradient(33.75deg, #2AF598 0%, #009EFD 100%)",
        pink: "linear-gradient(33.75deg, #F092FF 0%, #EE213C 100%);",
        btnHover: "linear-gradient(33.75deg, #E961FF 0%, #EE0020 100%)",
        cardBorder: "linear-gradient(33.75deg, #ECC611 0%, #F83600 100%)",
        cardBorderOne:
          "linear-gradient(to right,#4A4A4A, #4A4A4A),linear-gradient(33.75deg, #2AF598 0%, #009EFD 100%)",
        cardBorderTwo:
          "linear-gradient(to right,#4A4A4A, #4A4A4A),linear-gradient(33.75deg, #F092FF 0%, #EE213C 100%)",
        cardBorderThree:
          "linear-gradient(to right,#4A4A4A, #4A4A4A),linear-gradient(33.75deg, #ECC611 0%, #F83600 100%)",
      },

      keyframes: {
        template: {
          "0%": { transform: "translateX(300%)" },
          "100%": { transform: "translateX(0)" },
        },
        enter: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeIn85: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.85" },
        },
        enterRight: {
          "0%": { opacity: "0", transform: "translateX(-250%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        enterLeft: {
          "0%": { opacity: "0", transform: "translateX(250%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        introToRight: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(0)" },
        },
        introToLeft: {
          "0%": { transform: "translateX(150%)" },
          "100%": { transform: "translateX(0)" },
        },
        navModalFadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.85" },
        },
        navModalFadeOut: {
          from: { opacity: "0.85" },
          to: { opacity: "0" },
        },
      },
      animation: {
        template1: "template 0.25s ease-in-out backwards",
        template2: "template 0.25s ease-in-out 0.25s backwards",
        template3: "template 0.25s ease-in-out 0.5s backwards",
        template4: "template 0.25s ease-in-out 0.75s backwards",
        template5: "template 0.25s ease-in-out 1s backwards",
        template6: "template 0.25s ease-in-out 1.25s backwards",
        enterSlow: "enter .5s ease-in-out",
        enterCard2: "enter .5s  ease-in-out 0.1s backwards",
        enterCard3: "enter .5s ease-in-out 0.2s backwards ",
        advantageFadeIn: "fadeIn 1s ease-in-out",
        advantageFadeIn85: "fadeIn85 1s ease-in-out",
        advantageToRight: "enterRight 1s ease-in-out",
        advantageToLeft: "enterLeft 1s ease-in-out",
        introToRight1: "introToRight 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)",
        introToRight2: "introToRight 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.5s both",
        introToLeft1: "introToLeft 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)",
        introToLeft2: "introToLeft 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.5s both",
        navModalFadeIn: "navModalFadeIn 0.3s ease-in-out",
        navModalFadeOut: "navModalFadeOut 0.3s ease-in-out",
      },
      zIndex: {
        backgroundVector: "10",
        component: "20",
        whyChooseUs: "50",
        hero: "50",
        top: "99999",
      },
      inset: {
        "2%": "2%",
        "6%": "6%",
        "10%": "10%",
        "12%": "12%",
        "14%": "14%",
        "20%": "20%",
        "30%": "30%",
        "47%": "47%",
        "50%": "50%",
        "56%": "56%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "85%": "85%",
      },
      rotate: {
        13: "13deg",
        85: "85deg",
      },
    },
  },
  plugins: [require("daisyui")],
};
