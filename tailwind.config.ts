import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: "#003366",
          primary2: "#242331",
          secondary: "#F9F9F9",
          secondary2: "#F4F4F4",
          secondary3: "#ECF4FF",
          secondary4: "#797979",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
