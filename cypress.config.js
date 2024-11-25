import {defineConfig} from 'cypress';

const baseUrl = process.env.CYPRESS_BASE_URL || 'http://localhost:5173';

export default defineConfig({
  e2e: {
    baseUrl,
    supportFile: 'cypress/support/e2e.ts', // or `e2e.ts`
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
