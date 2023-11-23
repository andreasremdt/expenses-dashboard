import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        checked: "url(/checked.svg)",
        indeterminate: "url(/indeterminate.svg)",
      },
    },
  },
  plugins: [],
};

export default config;
