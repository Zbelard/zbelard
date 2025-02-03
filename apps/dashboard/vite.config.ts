import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import deno from "@deno/vite-plugin";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

import "react";
import "react-dom";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    deno(),
    react(),
    TanStackRouterVite({
      // Not a fan of code splitting, enable it if you want
      autoCodeSplitting: false,
      // Add file extensions in imports inside routeTree.gen.ts so the Deno language server doesn't yell at me
      addExtensions: true,
    }),
  ],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
