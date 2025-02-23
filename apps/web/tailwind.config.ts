// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";
const { heroui } = require("@heroui/react");

const config: Pick<Config, "content" | "presets" | "plugins"> = {
  content: [
    "./app/**/*.tsx",
    "../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
  plugins: [heroui()],
};

export default config;
