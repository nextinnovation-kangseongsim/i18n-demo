import type { Config } from "tailwindcss";
const { color } = require("./public/css/tailwind");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        ow: "0px",
        sm: "359px",
      },
      colors: {
        primary: {
          100: "#fff", // 진짜 하얀색
          200: "#f7f7f7", // 가짜 하얀색
          300: "#d9d9d9", // 더 연한 회색
          400: "#bfbfbf", // 연한 회색
          500: "#737373", // 기본 회색
          600: "#333333", // 연한 검정색
          700: "#000000", // 기본검정색
        },
        accent: {
          100: "#E00000", // 강조 빨간색
        },
        others: {
          100: "#4200A0", // 리즌 보라색
        },
        999: "#999999", // 더 연한 회색
        "5B5B5E": "#5B5B5E", // 더 연한 회색
        d9d9d9: "#d9d9d9",
        FFE0E0: "#FFE0E0",
        FAFAFA: "#FAFAFA",
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
        roboto: ["var(--font-roboto)"],
        sans: ["Noto Sans KR", "sans-serif"],
      },
      boxShadow: {
        100: "2px 2px 14px 0px rgba(0, 0, 0, 0.10)",
        200: "10px 10px 20px 0px rgba(153, 153, 153, 0.10)",
        300: "2px 2px 10px 0px rgba(153, 153, 153, 0.20)",
        400: "0px 0px 10px 0px rgba(0, 0, 0, 0.25);",
      },
      backgroundImage: {
        "dropdown-close": "url('/img/icon_arrow_down.svg')",
        "dropdown-open": "url('/img/icon_arrow_top.svg')",
        radio: "url('/img/icon/radio.svg')",
        check: "url('/img/icon/check.svg')",
      },
      transform: {
        100: "translate(-50%, 0)",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        7: "repeat(7, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
      maxWidth: {
        "1/2": "50%",
      },

      backgroundPosition: {
        "right-4": "right 1rem",
      },
      // calc 사용
      mode: "jit",
    },
    plugins: [],
  },
  plugins: [color],
};
export default config;
