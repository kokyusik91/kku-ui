import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/presets/index.ts", "src/presets/neo-brutal.ts", "src/presets/modern.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "tailwindcss"],
  treeshake: true,
  splitting: true,
});
