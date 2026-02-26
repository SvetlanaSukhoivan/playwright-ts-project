import { defineConfig, devices } from '@playwright/test';

require("dotenv").config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  /* Added: Timeout due to VPN and waiting for pop-ups, 30 seconds (standard) may not be enough.*/
  timeout: 60 * 10000,
  /* Added: Timeout added for expect */
  expect:{
    timeout: 10000,
  },

  use: {
    viewport: {width: 1920, height: 1080},
    baseURL: process.env.BASE_URL,
    storageState: '.auth/storageState.json',

    trace: 'on-first-retry',
    testIdAttribute: 'data-qa',

    /*Added: Stability settings for VPN: If the click does not go through within 15 seconds, 
    the test will fail (instead of hanging indefinitely).*/
    actionTimeout: 15000,

    /*Added: Page load time (page.goto)*/
    navigationTimeout: 30000,

    screenshot: 'only-on-failure',
    video: {
      mode: 'retain-on-failure',
      size: process.env.CI ? {width: 800, height: 600} : {width: 1440, height: 900}
    }
  },

  globalSetup: './global-setup.ts',

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
