import process from "node:process";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import tailwind from "@tailwindcss/postcss";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";
import TurboConsole from "unplugin-turbo-console/rspack";

function normalizeBasePath(): string {
  const raw = process.env.BASE_PATH?.trim();
  if (!raw || raw === "/") {
    return "/";
  }
  const prefixed = raw.startsWith("/") ? raw : `/${raw}`;
  return prefixed.endsWith("/") ? prefixed : `${prefixed}/`;
}

const basePath = normalizeBasePath();
const useSubpath = basePath !== "/";

const enableRsdoctor = Boolean(process.env.RSDOCTOR);
const enableTurboConsole = process.env.NODE_ENV === "development";

export default defineConfig({
  ...(useSubpath
    ? {
        server: { base: basePath },
        output: { assetPrefix: basePath },
      }
    : {}),
  performance: {
    ...(enableRsdoctor ? { buildCache: false } : {}),
  },
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
        ...(enableTurboConsole ? [TurboConsole()] : []),
        ...(enableRsdoctor
          ? [
              new RsdoctorRspackPlugin({
                output: {
                  mode: "brief",
                  options: {
                    type: ["json"],
                  },
                },
              }),
            ]
          : []),
      ],
    },
  },
});
