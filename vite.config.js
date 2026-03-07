import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  esbuild: {
    include: /src\/.*\.[jt]sx?$/,
    loader: "jsx",
  },
  plugins: [
    react({
      include: /\.[jt]sx?$/,
    }),
  ],
});
