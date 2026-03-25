import { test, expect } from '@playwright/test';

test('homepage loads and has YouTube video', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Digitalizacja360/);

  await expect(page.locator('h2', { hasText: 'Zobacz, co mówią nasi partnerzy' })).toBeVisible();
  await expect(page.locator('iframe[src*="youtube.com/embed/4WQTqOR55vk"]')).toBeVisible();

  // assert basic section exist
  await expect(page.locator('header >> text=Kontakt')).toBeVisible({ timeout: 30000 });
});
