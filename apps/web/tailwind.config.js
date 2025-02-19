// apps/web/tailwind.config.js
import sharedConfig from "@repo/tailwind-config";

module.exports = {
  ...sharedConfig,
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};
