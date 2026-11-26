// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Supplied by the GitHub Pages workflow. It is `/repository-name` for a
// project site and empty for a `username.github.io` repository or custom domain.
const githubPagesBase = process.env["GITHUB_PAGES_BASE_PATH"] || "/";

export default defineConfig({
  // GitHub Pages serves static files only; it cannot run the Nitro/SSR worker.
  nitro: false,
  vite: {
    base: githubPagesBase,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Produce a static application shell plus HTML for the public routes.
    spa: {
      enabled: true,
      prerender: { crawlLinks: true },
    },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
});
