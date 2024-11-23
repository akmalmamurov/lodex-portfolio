/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "778px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        linkColor: "#021206",
        dangerColor: "#F44545",
        titleSpan: "#6778D6",
        textColor: "#808080",
        dustColor: "#5A5757",
      },
    },
  },
  plugins: [],
};
