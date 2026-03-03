import type { Config } from "tailwindcss";

export const sharedTheme: Partial<Config["theme"]> = {
  extend: {
    colors: {
      skin: {
        primary: "var(--skin-primary)",
        secondary: "var(--skin-secondary)",
        accent: "var(--skin-accent)",
        success: "var(--skin-success)",
        warning: "var(--skin-warning)",
        danger: "var(--skin-danger)",
        info: "var(--skin-info)",
        bg: "var(--skin-bg)",
        surface: "var(--skin-surface)",
        text: "var(--skin-text)",
        border: "var(--skin-border)",
      },
    },
    borderWidth: {
      skin: "var(--skin-border-width)",
    },
    borderRadius: {
      skin: "var(--skin-radius)",
    },
    boxShadow: {
      "skin-sm": "var(--skin-shadow-sm)",
      "skin-md": "var(--skin-shadow-md)",
      "skin-lg": "var(--skin-shadow-lg)",
    },
    fontFamily: {
      skin: "var(--skin-font)",
    },
    keyframes: {
      "skin-press": {
        "0%": { transform: "translate(0, 0)" },
        "100%": {
          transform:
            "translate(var(--skin-press-x), var(--skin-press-y))",
        },
      },
      "skin-shake": {
        "0%, 100%": { rotate: "0deg" },
        "25%": { rotate: "-2deg" },
        "75%": { rotate: "2deg" },
      },
      "skin-pop": {
        "0%": { scale: "0.95", opacity: "0" },
        "100%": { scale: "1", opacity: "1" },
      },
    },
    animation: {
      "skin-press": "skin-press 0.1s ease-in-out forwards",
      "skin-shake": "skin-shake 0.3s ease-in-out",
      "skin-pop": "skin-pop 0.2s ease-out forwards",
    },
  },
};
