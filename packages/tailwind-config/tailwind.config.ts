import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {},
        },
        dark: {
          colors: {},
        },
      },
    }),
  ],
  darkMode: "class",
};
export default config;
