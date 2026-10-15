import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    base: "/tvshows/",
    build: {
        outDir: "../dist",
        emptyOutDir: true
    }
});