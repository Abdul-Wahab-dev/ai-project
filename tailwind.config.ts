import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "morning-blue": "#86A789",
        "ash-gray": "#B2C8BA",
        "tea-green": "#D2E3C8",
        alabaster: "#EBF3E8",
        "winter-wizard": "#A0E9FF",
        Platinum: "#eceff5",
        "blue-bolt": "#00A9FF",
        "baby-blue": "#89CFF3",
        "baby-blue-700": "#89cff37a",
        "baby-blue-500": "#89cff35c",
        water: "#CDF5FD",
      },
      colors: {
        "morning-blue": "#86A789",
        "ash-gray": "#B2C8BA",
        "tea-green": "#D2E3C8",
        alabaster: "#EBF3E8",
        Platinum: "#eceff5",
        "prussian-blue": "#003049",
        "kombu-green": "#2e4531",
        "space-cadet": "#102c57",
        denim: "#225fbc",
        "winter-wizard": "#A0E9FF",
        "blue-bolt": "#00A9FF",
        "baby-blue": "#89CFF3",
        water: "#CDF5FD",
      },
      borderColor: {
        "morning-blue": "#86A789",
        "ash-gray": "#B2C8BA",
        "tea-green": "#D2E3C8",
        alabaster: "#EBF3E8",
        Platinum: "#eceff5",
        "winter-wizard": "#A0E9FF",
        "blue-bolt": "#00A9FF",
        "baby-blue": "#89CFF3",

        water: "#CDF5FD",
      },
    },
  },
  plugins: [],
};
export default config;
