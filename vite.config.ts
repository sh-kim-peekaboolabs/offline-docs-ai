import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
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
  build: {
    // Optimize CSS delivery to reduce render-blocking
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Ensure CSS is loaded asynchronously
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
}));
