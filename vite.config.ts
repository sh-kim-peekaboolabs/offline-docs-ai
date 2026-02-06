import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  plugins: [
    react(),
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
