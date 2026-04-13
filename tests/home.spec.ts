import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('https://nishant-manocha.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Nishant Manocha/);
});

test('has url', async ({ page }) => {
  await page.goto('https://nishant-manocha.vercel.app/');

  await expect(page).toHaveURL(/vercel.app/);
});

test('checking element using css', async ({ page }) => {
  await page.goto('https://nishant-manocha.vercel.app/');

  const el = page.locator('h1');

  await expect(el).toBeVisible();
});

test('checking element using getbytext', async ({ page }) => {
  await page.goto('https://nishant-manocha.vercel.app/');

  const el = page.getByText('WELCOME TO MY WORLD');

  await expect(el).toBeVisible();
});

test('checking element using getbyrole', async ({ page }) => {
  await page.goto('https://nishant-manocha.vercel.app/');

  const el = page.getByRole('button', { name: 'View Projects' });

  await expect(el).toBeVisible();

  await el.click();

  await expect(
  page.locator('.grid.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8.mb-12')
).toBeVisible();
});

test('checking element using hover', async ({ page }) => {
  await page.goto('https://nishant-manocha.vercel.app/');

  const el = page.getByRole('button', { name: 'View Projects' });

  await expect(el).toBeVisible();

  await el.hover();
});