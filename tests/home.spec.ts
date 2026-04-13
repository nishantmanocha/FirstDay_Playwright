import { test, expect } from '@playwright/test';

test.describe('Testing assertions', () => {
  // closing brace was missing for the describe block
  let runId = '';

  test.beforeAll(() => {
    runId = `run-${Date.now()}`;
  });

  test.afterAll(() => {
    expect(runId).toMatch(/^run-\d+$/);
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.afterEach(async ({ page }) => {
    await expect(page).toHaveURL(/vercel\.app/);
    await expect(page).not.toHaveTitle(/404|not found/i);
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Nishant Manocha/);
  });

  test('has url', async ({ page }) => {
    await expect(page).toHaveURL(/vercel\.app/);
  });

  test('checking element using css', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
  });

  test('checking element using getbytext', async ({ page }) => {
    await expect(page.getByText('WELCOME TO MY WORLD')).toBeVisible();
  });

  test('checking element using getbyrole', async ({ page }) => {
    const viewProjectsButton = page.getByRole('button', { name: 'View Projects' });
    await expect(viewProjectsButton).toBeVisible();
    await viewProjectsButton.click();

    await expect(
      page.locator('.grid.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8.mb-12')
    ).toBeVisible();
  });

  test('view projects button is enabled and focusable', async ({ page }) => {
    const viewProjectsButton = page.getByRole('button', { name: 'View Projects' });
    await expect(viewProjectsButton).toBeEnabled();

    await viewProjectsButton.focus();
    await expect(viewProjectsButton).toBeFocused();
  });

  test('page has viewport meta tag', async ({ page }) => {
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveCount(1);

    const content = await viewport.getAttribute('content');
    expect(content).toContain('width=device-width');
  });

  test('page has at least one button', async ({ page }) => {
    const buttonCount = await page.locator('button, [role="button"]').count();
    expect(buttonCount).toBeGreaterThan(0);
  });

  test('welcome text appears once', async ({ page }) => {
    await expect(page.getByText('WELCOME TO MY WORLD')).toHaveCount(1);
  });

  test('h1 contains a name', async ({ page }) => {
    await expect(page.locator('h1')).toContainText(/nishant/i);
  });

  test('document is fully loaded', async ({ page }) => {
    const readyState = await page.evaluate(() => document.readyState);
    expect(readyState).toBe('complete');
  });

});
