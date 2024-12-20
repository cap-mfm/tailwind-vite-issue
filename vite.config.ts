import { defineConfig } from "vite";
import tailwindCss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({ plugins: [react(), tailwindCss()] });
