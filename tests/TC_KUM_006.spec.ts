import { test, expect } from '@playwright/test';

test('Click Menu Bola & Sports Kumparan', async ({ page }) => {
  test.setTimeout(60000);

  // 1. Buka halaman utama
  await page.goto('https://kumparan.com/', { waitUntil: 'domcontentloaded' });

  // 2. Klik menu Bola & Sports
  const menuBola = page.locator('text=Bola & Sports').first();
  await expect(menuBola).toBeVisible({ timeout: 15000 });
  await menuBola.click();

  // 3. Menunggu URL berpindah (menggunakan RegExp /bola|sports/i)
  await page.waitForURL(/\/bola|\/sports/i, { timeout: 15000 });

  console.log('Menu Bola & Sports berhasil diklik!');
  console.log('URL saat ini:', page.url());

  await page.waitForTimeout(3000);
  await page.pause(); 
});