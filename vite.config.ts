import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { YEARS_OF_EXPERIENCE } from "./src/lib/experience";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    {
      name: "years-of-experience",
      transformIndexHtml: (html) => html.replaceAll("%YEARS_OF_EXPERIENCE%", String(YEARS_OF_EXPERIENCE)),
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
