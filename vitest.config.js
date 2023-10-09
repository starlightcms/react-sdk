import { defineConfig } from 'vitest/config'

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  test: {
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
    coverage: {
      reporter: ['text', 'lcov'],
      include: ['src'],
    },
  },
})
