import { test, expect } from '@playwright/test';

test('Click Menu News Kumparan', async ({ page }) => {
  test.setTimeout(60000);

  // 1. Buka halaman utama Kumparan
  await page.goto('https://kumparan.com/', { waitUntil: 'domcontentloaded' });

  // 2. Cari dan klik menu "News"
  const menuNews = page.locator('text=News').first();
  await expect(menuNews).toBeVisible({ timeout: 15000 });
  await menuNews.click();

  // 3. Gunakan jeda waktu singkat (misal 3 detik) untuk membiarkan UI selesai me-render
  await page.waitForTimeout(3000);

  console.log('Menu News berhasil diklik!');
  console.log('URL saat ini:', page.url());

  await page.pause();
});