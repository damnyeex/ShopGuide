import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import sass from "sass";

// https://vite.dev/config/
export default defineConfig({
  base: "/ShopGuide",
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
