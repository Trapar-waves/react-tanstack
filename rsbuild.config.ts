import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import tailwind from "@tailwindcss/postcss";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwind],
      },
    },
    rspack: {
      plugins: [
        TanStackRouterRspack({ target: "react", autoCodeSplitting: true, routeFileIgnorePattern: ".css.d.ts", routeFileIgnorePrefix: "components" }),
      ],
    },
  },
});
