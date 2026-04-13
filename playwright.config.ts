import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Run tests in parallel locally */
  fullyParallel: true,

  /* Prevent accidental test.only in CI */
  forbidOnly: !!process.env.CI,

  /* Retry failed tests in CI */
  retries: process.env.CI ? 2 : 0,

  /* Run tests sequentially in CI for stability */
  workers: process.env.CI ? 1 : undefined,

  /* Reporters */
  reporter: [
    ['html'],
    ['list']
  ],

  /* Shared settings */
  use: {
    /* Base URL (VERY IMPORTANT) */
    baseURL: 'https://nishant-manocha.vercel.app/',

    /* Collect trace on failure */
    trace: 'on-first-retry',

    /* Screenshot on failure */
    screenshot: 'only-on-failure',

    /* Record video on failure */
    video: 'retain-on-failure',

    /* Default timeout for actions */
    actionTimeout: 10 * 1000,

    /* Navigation timeout */
    navigationTimeout: 30 * 1000,
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  /* Optional: Run local server before tests */
  // webServer: {
  //   command: 'npm run dev',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

  /* Global timeout for entire test */
  timeout: 30 * 1000,

  /* Expect timeout */
  expect: {
    timeout: 5000,
  },
});