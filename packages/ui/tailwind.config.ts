import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";
import { heroui } from "@heroui/react";

const config: Pick<Config, "prefix" | "presets" | "content" | "plugins"> = {
  content: [
    "./src/**/*.tsx",
    "../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "ui-",
  plugins: [heroui()],
  presets: [sharedConfig],
};

export default config;
