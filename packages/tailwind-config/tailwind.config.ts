import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
export default config;
