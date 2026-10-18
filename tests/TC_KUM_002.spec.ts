import { test, expect } from '@playwright/test';

test('Click Menu Tekno Kumparan', async ({ page }) => {
  // 1. Buka halaman utama Kumparan
  await page.goto('https://kumparan.com/', { waitUntil: 'domcontentloaded' });

  // 2. Cari menu "Tekno"
  const menuTekno = page.locator('text=Tekno').first();

  await expect(menuTekno).toBeVisible({ timeout: 15000 });
  
  // 3. Klik dan tunggu hingga URL berpindah ke halaman Tekno
  await menuTekno.click();
  
  // Menunggu hingga URL berubah mengandung '/tekno'
  await page.waitForURL('**/tekno**', { timeout: 15000 });

  console.log('Menu Tekno berhasil diklik dan halaman sudah berpindah!');
  console.log('URL saat ini:', page.url());

  // 4. Jeda singkat agar browser tidak langsung tertutup di layar saat mode --headed
  await page.pause();

});