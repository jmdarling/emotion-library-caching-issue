import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "jmd-react-component-lib",
      fileName: (format) => `jmd-react-component-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@emotion/react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    minify: false, // Disable minification
  },
});
