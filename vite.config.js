import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: '0.0.0.0',
    port:5000
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src/"),
    },
  },
})
