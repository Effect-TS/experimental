import * as path from "node:path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    include: ["./test/**/*.test.ts"],
    globals: true
  },
  resolve: {
    alias: {
      "@effect/experimental/test": path.join(__dirname, "test"),
      "@effect/experimental": path.join(__dirname, "src")
    }
  }
})
