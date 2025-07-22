import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Conditionally set base path for GitHub Pages and Vercel
const isGithubPages = process.env.DEPLOY_TARGET === "GH_PAGES";

export default defineConfig({
  base: isGithubPages ? "/Devops-Portfolio/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
