import { test, expect } from '@playwright/test';

test('TC-001 - Kumparan homepage loads successfully', async ({ page }) => {
  const response = await page.goto('https://kumparan.com/', { waitUntil: 'domcontentloaded' });

  expect(response, 'Homepage should return a response').not.toBeNull();
  expect(response!.status()).toBeLessThan(400);
});