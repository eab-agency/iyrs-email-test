import type { Config } from "tailwindcss";
import data from "./src/data/globalData.json";
import barestyles from "barestyles";

interface Branding {
  colors: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
  };
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const { branding } = data.partner as { branding: Branding };

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/skeletix/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...branding?.colors,
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
        serif: ['var(--font-roboto-slab)', 'Roboto Slab', 'serif'],
        h1: ['var(--font-roboto-slab)', 'Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [barestyles],
};
export default config;
