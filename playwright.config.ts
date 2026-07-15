// playwright.config.js
import { defineConfig } from '@playwright/test'
 
export default defineConfig({
  testDir: './test',
  use: {
    baseURL: 'https://task-manager-frontend-2cj8njexd-task-manager3.vercel.app',
    headless: true,
  },
  webServer: {
    command: 'npm run dev',
    url: 'https://task-manager-frontend-2cj8njexd-task-manager3.vercel.app',
    reuseExistingServer: true,
  },
})