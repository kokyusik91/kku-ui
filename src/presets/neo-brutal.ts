import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { sharedTheme } from "./shared-theme";

const neoBrutalPlugin = plugin(({ addBase }) => {
  addBase({
    ":root": {
      "--skin-primary": "#FF6B6B",
      "--skin-secondary": "#4ECDC4",
      "--skin-accent": "#FFE66D",
      "--skin-success": "#51CF66",
      "--skin-warning": "#FF922B",
      "--skin-danger": "#FF6B6B",
      "--skin-info": "#339AF0",
      "--skin-bg": "#FFF8E7",
      "--skin-surface": "#FFFFFF",
      "--skin-text": "#1A1A2E",
      "--skin-border": "#1A1A2E",
      "--skin-border-width": "3px",
      "--skin-radius": "12px",
      "--skin-shadow-sm": "2px 2px 0px 0px #1A1A2E",
      "--skin-shadow-md": "4px 4px 0px 0px #1A1A2E",
      "--skin-shadow-lg": "6px 6px 0px 0px #1A1A2E",
      "--skin-font": "'Space Grotesk', system-ui, -apple-system, sans-serif",
      "--skin-press-x": "2px",
      "--skin-press-y": "2px",
      "--skin-fw-medium": "500",
      "--skin-fw-semibold": "600",
      "--skin-fw-bold": "700",
    },
    ".dark": {
      "--skin-primary": "#FF8A8A",
      "--skin-secondary": "#6EE7D8",
      "--skin-accent": "#FFD93D",
      "--skin-success": "#69DB7C",
      "--skin-warning": "#FFA94D",
      "--skin-danger": "#FF8787",
      "--skin-info": "#5CB3FF",
      "--skin-bg": "#1A1A2E",
      "--skin-surface": "#2D2D44",
      "--skin-text": "#F0F0F0",
      "--skin-border": "#4A4A6A",
      "--skin-shadow-sm": "2px 2px 0px 0px #4A4A6A",
      "--skin-shadow-md": "4px 4px 0px 0px #4A4A6A",
      "--skin-shadow-lg": "6px 6px 0px 0px #4A4A6A",
    },
  });
});

export const neoBrutalPreset: Config = {
  content: [],
  theme: sharedTheme,
  plugins: [neoBrutalPlugin],
};
