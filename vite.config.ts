// Configuration pour déploiement Vercel
// Remplace @lovable.dev/vite-tanstack-config (spécifique Cloudflare)
import { defineConfig } from "@tanstack/react-start/config";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    // Preset Vercel : génère automatiquement .vercel/output
    preset: "vercel",
    // Garde le même wrapper serveur custom
    entry: "src/server",
  },
  vite: {
    plugins: [
      tsConfigPaths(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
