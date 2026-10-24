import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  reporter: 'list',
  use: { baseURL: process.env.SITE_URL || 'http://127.0.0.1:4173' },
  webServer: process.env.SITE_URL ? undefined : {command:'npm run preview',url:'http://127.0.0.1:4173',reuseExistingServer:!process.env.CI},
});
