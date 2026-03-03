import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { sharedTheme } from "./shared-theme";

const modernPlugin = plugin(({ addBase }) => {
  addBase({
    ":root": {
      "--skin-primary": "#3182F6",
      "--skin-secondary": "#00C9B7",
      "--skin-accent": "#FFC107",
      "--skin-success": "#20C997",
      "--skin-warning": "#F59F00",
      "--skin-danger": "#F03E3E",
      "--skin-info": "#4C6EF5",
      "--skin-bg": "#FFFFFF",
      "--skin-surface": "#F9FAFB",
      "--skin-text": "#191F28",
      "--skin-border": "#E5E8EB",
      "--skin-border-width": "1px",
      "--skin-radius": "8px",
      "--skin-shadow-sm": "0 1px 2px rgba(0,0,0,0.05)",
      "--skin-shadow-md": "0 2px 8px rgba(0,0,0,0.08)",
      "--skin-shadow-lg": "0 4px 16px rgba(0,0,0,0.12)",
      "--skin-font": "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
      "--skin-press-x": "0px",
      "--skin-press-y": "0px",
    },
    ".dark": {
      "--skin-primary": "#4C9AFF",
      "--skin-secondary": "#3DD9C6",
      "--skin-accent": "#FFD54F",
      "--skin-success": "#38D9A9",
      "--skin-warning": "#FFB347",
      "--skin-danger": "#FF6B6B",
      "--skin-info": "#748FFC",
      "--skin-bg": "#0D1117",
      "--skin-surface": "#161B22",
      "--skin-text": "#E6EDF3",
      "--skin-border": "#30363D",
      "--skin-shadow-sm": "0 1px 2px rgba(0,0,0,0.2)",
      "--skin-shadow-md": "0 2px 8px rgba(0,0,0,0.3)",
      "--skin-shadow-lg": "0 4px 16px rgba(0,0,0,0.4)",
    },
  });
});

export const modernPreset: Config = {
  content: [],
  theme: sharedTheme,
  plugins: [modernPlugin],
};
