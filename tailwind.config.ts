import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "heading-1": ["32px", "32px"],
        "heading-2": ["24px", "32px"],
      },
      colors: {
        brand: "#0310F5",
        primary: "#241C3D",
        secondary: "#7D8389",
        tertiary: "#E0E0E0",
        quaternary: "#EFF1F3",
        background: "#FCFCFD",
      },
      boxShadow: {
        inner: 'inset -0.5px -0.5px 2px 0 rgba(3, 16, 245, 0.05)',
      },
      keyframes: {
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(8px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-8px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        slideLeftAndFade:
          "slideLeftAndFade 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
