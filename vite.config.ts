import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
    headers: {
      'Content-Security-Policy': "default-src 'self' chrome-extension: data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' chrome-extension: * 'inline-speculation-rules'; style-src 'self' 'unsafe-inline' chrome-extension:; img-src 'self' data: https: chrome-extension:; font-src 'self' data:; media-src 'self' data: blob:; connect-src 'self' data: blob: chrome-extension: *; worker-src 'self' blob: chrome-extension:;",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
