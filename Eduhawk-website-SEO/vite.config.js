import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Framework libraries go into one stable "vendor" chunk. They rarely change
// between deploys, so this chunk stays cached while route chunks are updated.
// Everything else keeps Vite's default chunking (one chunk per lazy route).
const frameworkLibs =
  /[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom|@reduxjs[\\/]toolkit|redux|react-redux|reselect|react-helmet-async|prop-types)[\\/]/;

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules") && frameworkLibs.test(id)) {
            return "vendor";
          }
        },
      },
    },
  },
});